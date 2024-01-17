"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { createWarehouse } from "../api/createWarehouse";
import { getServerAuthSession } from "~/server/auth";

// Define your form schema using Zod
const schema = z.object({
  name: z.string(),
  location: z.string(),
});

export default function WarehouseForm() {
  const [sessionValue, setSessionValue] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    const fetchSession = async () => {
      const session = await getServerAuthSession();
      setSessionValue(session);
    };

    fetchSession();
  }, []);

  const onSubmit = async (data) => {
    // Call your createWarehouse function here
    if (sessionValue && typeof sessionValue.user.name === "string") {
      const result = await createWarehouse(
        sessionValue.user.id,
        data.name,
        data.location,
      );
      console.log(result);
    }
  };

  return (
    <><form
          onSubmit={handleSubmit(onSubmit)}
          className="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md"
      >
          <div className="mb-4">
              <label
                  className="mb-2 block text-sm font-bold text-gray-700"
                  htmlFor="name"
              >
                  Name
              </label>
              <input
                  {...register("name")}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Name" />
              {typeof errors.name?.message === "string" && (
                  <p className="text-red-500 text-xs italic">{errors.name.message}</p>
              )}
          </label>

          <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="location"
          >
              Location
          </label>
          <input
              {...register("location")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="location"
              type="text"
              placeholder="Location" />
          {typeof errors.location?.message === "string" && (
              <p className="text-red-500 text-xs italic">{errors.location.message}</p>
          )}
      </label><button
          type="submit"
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
              Create Warehouse
          </button></>
  </form>
);

