"use server";

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

    await db.vehicles.create({
      data: {
        name: name,
        mileage: mileage,
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

    return "Warehouse created and user role updated successfully";
  }

  // If the user was not found, return null
  return null;
}
