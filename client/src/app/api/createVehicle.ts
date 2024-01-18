"use server";

import { BlobServiceClient } from "@azure/storage-blob";
import type { User } from "@prisma/client";
import { db } from "~/server/db";
import { getUserOrganizationId } from "./getOrganizer";
import { getServerAuthSession } from "~/server/auth";
import type { Session } from "next-auth";

const session: Promise<Session | null> = getServerAuthSession();

export async function createVehicle(
  userId: string,
  name: string,
  mileage: number,
  certificate: File,
): Promise<string | null> {
  // Fetch the user from the database using their id
  const user: User | null = await db.user.findUnique({
    where: { id: userId },
  });

  // If the user was found, create a new organization and link the user to it
  if (user) {
    const organizationId = await getUserOrganizationId(userId);
    if (organizationId === null) {
      // Handle the case where organizationId is null
      return "Could not find organization for user";
    }

    // Create the BlobServiceClient object which will be used to create a container client
    const connectionString = process.env.NEXT_PUBLIC_AZURE_STORAGE;

    if (!connectionString) {
      throw new Error("Azure Storage connection string is not defined");
    }

    const blobServiceClient =
      BlobServiceClient.fromConnectionString(connectionString);

    // Get a reference to a container
    const containerClient = blobServiceClient.getContainerClient("dj2");

    // Create a unique name for the blob
    const blobName = "certificate_" + new Date().getTime() + ".png";

    // Get a block blob client
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);

    // Upload data to the blob
    const uploadBlobResponse = await blockBlobClient.uploadData(certificate);

    // Get the blob URL
    const blobURL = blockBlobClient.url;

    await db.vehicles.create({
      data: {
        name: name,
        mileage: mileage,
        Registration: blobURL,
        Organization: {
          connect: { id: organizationId },
        },
      },
    });

    // Update the user's role to "organizer"
    await db.user.update({
      where: { id: userId },
      data: { role: "organizer" },
    });

    return "Warehouse created, certificate uploaded and user role updated successfully";
  }

  // If the user was not found, return null
  return null;
}
