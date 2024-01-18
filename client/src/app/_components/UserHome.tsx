import { Search, ShoppingCart, Sparkles, Tag } from "lucide-react";
import React from "react";

const UserHome = () => {
  const data = [
    {
      url: "/truck.png",
      productName: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
      cost: "$599",
    },
    {
      url: "/certbg.png",
      productName: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
      cost: "$599",
    },
    {
      url: "/products.png",
      productName: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
      cost: "$599",
    },
  ];
  return (
    <div>
      <section className="bg-white bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-gray-900 dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
        <div className="relative z-10 mx-auto max-w-screen-xl px-4 py-8 text-center lg:py-16">
          <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            The most authentic products in the market
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 sm:px-16 lg:px-48 lg:text-xl dark:text-gray-200">
            Never get Scammed again, only buy OG!!!
          </p>
          {/* <form className="mx-auto w-full max-w-md">
            <label
              htmlFor="default-email"
              className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email sign-up
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5 rtl:inset-x-0">
                <svg
                  className="h-4 w-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input
                type="email"
                id="default-email"
                className="block w-full rounded-lg border border-gray-300 bg-white p-4 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Enter your email here..."
                required
              />
              <button
                type="submit"
                className="absolute bottom-2.5 end-2.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Sign up
              </button>
            </div>
          </form> */}
        </div>
        {/* <div className="absolute left-0 top-0 z-0 h-full w-full bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900"></div> */}
      </section>

      <div className="mx-auto my-5 w-[80%]">
        <div className="my-2 flex flex-row justify-between">
          <form className="w-[80%]">
            <label
              htmlFor="default-search"
              className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Search
            </label>
            <div className="relative w-full">
              <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                <Search />
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full  rounded-lg border border-gray-300 bg-gray-50 p-4 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="  Search for latest products..."
                required
              />
              <button
                type="submit"
                className="absolute bottom-2.5 end-2.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
          <div className="flex gap-3 p-1">
            <a href="#" className="rounded-full bg-yellow-500 p-3">
              <ShoppingCart />
            </a>
            <a href="#gallery" className="rounded-full bg-yellow-500 p-3">
              <Sparkles />
            </a>
            <a href="#gallery" className="rounded-full bg-yellow-500 p-3">
              <Tag />
            </a>
          </div>
        </div>

        <h2 className="pb-1 text-lg font-semibold text-gray-500">Products</h2>
        <div className="grid grid-cols-3 gap-3">
          {data.map((item, i) => {
            return (
              <div
                key={i}
                className="my-2 w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800"
              >
                <a href="#">
                  <img
                    className="rounded-t-lg p-1 aspect-square h-auto mx-auto"
                    src={item.url}
                    alt="product image"
                  />
                </a>
                <div className="px-5 pb-5">
                  <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      {item.productName}
                    </h5>
                  </a>
                  <div className="mb-5 mt-2.5 flex items-center">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                      <svg
                        className="h-4 w-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="h-4 w-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="h-4 w-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="h-4 w-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="h-4 w-4 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    </div>
                    <span className="ms-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
                      5.0
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                      {item.cost}
                    </span>
                    <a
                      href="#"
                      className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="my-7">
        <h2 id="gallery" className="pb-4 text-lg font-semibold text-gray-500">Latest Products</h2>
        <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="grid gap-4">
            <figure className="group relative max-w-sm cursor-pointer grayscale filter transition-all duration-300 hover:grayscale-0">
              <a href="#">
                <img
                  className="rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                  alt="image description"
                />
              </a>
              <figcaption className="absolute bottom-4 hidden w-full px-4 text-lg text-white group-hover:block">
                <div className="flex items-center justify-between">
                  <span className="my-3 text-3xl font-bold text-gray-900 dark:text-white">
                    $599
                  </span>
                  <a href="#" className="rounded-full bg-yellow-500 p-3">
                    <ShoppingCart />
                  </a>
                </div>
              </figcaption>
            </figure>

            <figure className="group relative max-w-sm cursor-pointer grayscale filter transition-all duration-300 hover:grayscale-0">
              <a href="#">
                <img
                  className="rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
                  alt="image description"
                />
              </a>
              <figcaption className="absolute bottom-4 hidden w-full px-4 text-lg text-white group-hover:block">
                <div className="flex items-center justify-between">
                  <span className="my-3 text-3xl font-bold text-gray-900 dark:text-white">
                    $599
                  </span>
                  <a href="#" className="rounded-full bg-yellow-500 p-3">
                    <ShoppingCart />
                  </a>
                </div>
              </figcaption>
            </figure>

            <figure className="group relative max-w-sm cursor-pointer grayscale filter transition-all duration-300 hover:grayscale-0">
              <a href="#">
                <img
                  className="rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
                  alt="image description"
                />
              </a>
              <figcaption className="absolute bottom-4 hidden w-full px-4 text-lg text-white group-hover:block">
                <div className="flex items-center justify-between">
                  <span className="my-3 text-3xl font-bold text-gray-900 dark:text-white">
                    $599
                  </span>
                  <a href="#" className="rounded-full bg-yellow-500 p-3">
                    <ShoppingCart />
                  </a>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="grid gap-4">
            <figure className="group relative max-w-sm cursor-pointer grayscale filter transition-all duration-300 hover:grayscale-0">
              <a href="#">
                <img
                  className="rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
                  alt="image description"
                />
              </a>
              <figcaption className="absolute bottom-4 hidden w-full px-4 text-lg text-white group-hover:block">
                <div className="flex items-center justify-between">
                  <span className="my-3 text-3xl font-bold text-gray-900 dark:text-white">
                    $599
                  </span>
                  <a href="#" className="rounded-full bg-yellow-500 p-3">
                    <ShoppingCart />
                  </a>
                </div>
              </figcaption>
            </figure>

            <figure className="group relative max-w-sm cursor-pointer grayscale filter transition-all duration-300 hover:grayscale-0">
              <a href="#">
                <img
                  className="rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
                  alt="image description"
                />
              </a>
              <figcaption className="absolute bottom-4 hidden w-full px-4 text-lg text-white group-hover:block">
                <div className="flex items-center justify-between">
                  <span className="my-3 text-3xl font-bold text-gray-900 dark:text-white">
                    $599
                  </span>
                  <a href="#" className="rounded-full bg-yellow-500 p-3">
                    <ShoppingCart />
                  </a>
                </div>
              </figcaption>
            </figure>

            <figure className="group relative max-w-sm cursor-pointer grayscale filter transition-all duration-300 hover:grayscale-0">
              <a href="#">
                <img
                  className="rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
                  alt="image description"
                />
              </a>
              <figcaption className="absolute bottom-4 hidden w-full px-4 text-lg text-white group-hover:block">
                <div className="flex items-center justify-between">
                  <span className="my-3 text-3xl font-bold text-gray-900 dark:text-white">
                    $599
                  </span>
                  <a href="#" className="rounded-full bg-yellow-500 p-3">
                    <ShoppingCart />
                  </a>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="grid gap-4">
            <figure className="group relative max-w-sm cursor-pointer grayscale filter transition-all duration-300 hover:grayscale-0">
              <a href="#">
                <img
                  className="rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
                  alt="image description"
                />
              </a>
              <figcaption className="absolute bottom-4 hidden w-full px-4 text-lg text-white group-hover:block">
                <div className="flex items-center justify-between">
                  <span className="my-3 text-3xl font-bold text-gray-900 dark:text-white">
                    $599
                  </span>
                  <a href="#" className="rounded-full bg-yellow-500 p-3">
                    <ShoppingCart />
                  </a>
                </div>
              </figcaption>
            </figure>

            <figure className="group relative max-w-sm cursor-pointer grayscale filter transition-all duration-300 hover:grayscale-0">
              <a href="#">
                <img
                  className="rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
                  alt="image description"
                />
              </a>
              <figcaption className="absolute bottom-4 hidden w-full px-4 text-lg text-white group-hover:block">
                <div className="flex items-center justify-between">
                  <span className="my-3 text-3xl font-bold text-gray-900 dark:text-white">
                    $599
                  </span>
                  <a href="#" className="rounded-full bg-yellow-500 p-3">
                    <ShoppingCart />
                  </a>
                </div>
              </figcaption>
            </figure>

            <figure className="group relative max-w-sm cursor-pointer grayscale filter transition-all duration-300 hover:grayscale-0">
              <a href="#">
                <img
                  className="rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
                  alt="image description"
                />
              </a>
              <figcaption className="absolute bottom-4 hidden w-full px-4 text-lg text-white group-hover:block">
                <div className="flex items-center justify-between">
                  <span className="my-3 text-3xl font-bold text-gray-900 dark:text-white">
                    $599
                  </span>
                  <a href="#" className="rounded-full bg-yellow-500 p-3">
                    <ShoppingCart />
                  </a>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="grid gap-4">
            <figure className="group relative max-w-sm cursor-pointer grayscale filter transition-all duration-300 hover:grayscale-0">
              <a href="#">
                <img
                  className="rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
                  alt="image description"
                />
              </a>
              <figcaption className="absolute bottom-4 hidden w-full px-4 text-lg text-white group-hover:block">
                <div className="flex items-center justify-between">
                  <span className="my-3 text-3xl font-bold text-gray-900 dark:text-white">
                    $599
                  </span>
                  <a href="#" className="rounded-full bg-yellow-500 p-3">
                    <ShoppingCart />
                  </a>
                </div>
              </figcaption>
            </figure>

            <figure className="group relative max-w-sm cursor-pointer grayscale filter transition-all duration-300 hover:grayscale-0">
              <a href="#">
                <img
                  className="rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
                  alt="image description"
                />
              </a>
              <figcaption className="absolute bottom-4 hidden w-full px-4 text-lg text-white group-hover:block">
                <div className="flex items-center justify-between">
                  <span className="my-3 text-3xl font-bold text-gray-900 dark:text-white">
                    $599
                  </span>
                  <a href="#" className="rounded-full bg-yellow-500 p-3">
                    <ShoppingCart />
                  </a>
                </div>
              </figcaption>
            </figure>

            <figure className="group relative max-w-sm cursor-pointer grayscale filter transition-all duration-300 hover:grayscale-0">
              <a href="#">
                <img
                  className="rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
                  alt="image description"
                />
              </a>
              <figcaption className="absolute bottom-4 hidden w-full px-4 text-lg text-white group-hover:block">
                <div className="flex items-center justify-between">
                  <span className="my-3 text-3xl font-bold text-gray-900 dark:text-white">
                    $599
                  </span>
                  <a href="#" className="rounded-full bg-yellow-500 p-3">
                    <ShoppingCart />
                  </a>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
