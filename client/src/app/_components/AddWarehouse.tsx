import { Factory } from "lucide-react";
import React from "react";

const AddWarehouse = () => {
  return (
    <div className="mx-auto w-[80%]">
      <div className="justify-center flex gap-5">
        <h2 className="pb-4 text-center text-lg font-semibold text-gray-500">
          Add Your Warehouse
        </h2>
        <Factory />
      </div>
      <form className="mx-auto w-[50%]">
        <div className="mb-5">
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Warehouse Name
          </label>
          <input
            type="text"
            id="name"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Warehouse Name "
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="location"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Warehouse Location
          </label>
          <input
            type="location"
            id="location"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddWarehouse;
