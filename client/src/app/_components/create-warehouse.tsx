"use client";
import React, { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { createWarehouse } from "../api/createWarehouse";
import { getServerAuthSession } from "~/server/auth";
import { uid } from "../api/authsx";

// Define your form schema using Zod
const schema = z.object({
  name: z.string(),
  location: z.string(),
});

export default function WarehouseForm() {
  const [sessionValue, setSessionValue] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    const fetchSession = async () => {
      const session = await uid();
      setSessionValue(session);
    };

    void fetchSession();
  }, []);

  const onSubmit = async (data: FieldValues) => {
    // Call your createWarehouse function here
    if (sessionValue && typeof sessionValue === "string") {
      const result = await createWarehouse(
        sessionValue,
        data.name as string,
        data.location as string,
      );
      console.log(result);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md"
      >
        <label
          className="mb-2 block text-sm font-bold text-gray-700"
          htmlFor="name"
        >
          Name
        </label>
        <input
          {...register("name")}
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          id="name"
          type="text"
          placeholder="Name"
        />
        {typeof errors.name?.message === "string" && (
          <p className="text-xs italic text-red-500">{errors.name.message}</p>
        )}

        <label
          className="mb-2 block text-sm font-bold text-gray-700"
          htmlFor="location"
        >
          Location
        </label>
        <input
          {...register("location")}
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          id="location"
          type="text"
          placeholder="Location"
        />
        {typeof errors.location?.message === "string" && (
          <p className="text-xs italic text-red-500">
            {errors.location.message}
          </p>
        )}
        <button
          type="submit"
          className="focus:shadow-outline mt-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
        >
          Create Warehouse
        </button>
      </form>
    </>
  );
}
