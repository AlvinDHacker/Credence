import { ShoppingCart } from "lucide-react";
import React from "react";

const AddProducts = () => {
  return (
    <div className="mx-auto w-[80%]">
      <div className="grid grid-cols-3 gap-3">
        <div className="grid gap-3">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
              alt=""
            />
          </div>
          <div className="flex items-center justify-between">
            <span className="my-3 text-3xl font-bold text-gray-900 dark:text-white">
              $599
            </span>
            <a href="#" className="rounded-full bg-yellow-500 p-3">
              <ShoppingCart />
            </a>
          </div>
        </div>
        <div className="grid col-span-2 ">

        </div>
      </div>
    </div>
  );
};

export default AddProducts;
