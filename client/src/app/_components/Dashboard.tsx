import React from "react";

const Dashboard = () => {
  return (
    <div className=" mx-auto w-[80%] ">
      <h1 className="mb-3 text-2xl font-bold tracking-tight text-gray-900">
        Dashboard
      </h1>

      <div className="flex flex-1 flex-wrap">
        <div className="w-full flex-1 p-4 md:w-1/2">
          <div className="mt-8 flex flex-wrap space-x-0 space-y-2 md:space-x-4 md:space-y-0">
            <div className="flex-1 rounded-lg bg-white p-4 shadow-md md:w-1/2">
              <h2 className="pb-1 text-lg font-semibold text-gray-500">
                Sales
              </h2>
              <div className="my-1"></div>
              <div className="mb-6 h-px bg-gradient-to-r from-cyan-300 to-cyan-500"></div>
              <div
                className="chart-container relative w-full"
              >
                <h5 className="mt-5 w-full text-5xl font-bold text-gray-900">
              Rs. 300
            </h5>
              </div>
            </div>

            <div className="flex-1 rounded-lg bg-white p-4 shadow-md md:w-1/2">
              <h2 className="pb-1 text-lg font-semibold text-gray-500">
                Orders
              </h2>
              <div className="my-1"></div>
              <div className="mb-6 h-px bg-gradient-to-r from-cyan-300 to-cyan-500"></div>
              <div
                className="chart-container"
              >
                <canvas id="commercesChart"></canvas>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-lg bg-white p-4 shadow-md">
            <h2 className="pb-4 text-lg font-semibold text-gray-500">
              Latest Orders
            </h2>
            <div className="my-1"></div>
            <div className="mb-6 h-px bg-gradient-to-r from-cyan-300 to-cyan-500"></div>
            <div className="light relative overflow-x-auto rounded-md">
                <table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
                  <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Product name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Color
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Category
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                      <th
                        scope="row"
                        className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                      >
                        Apple MacBook Pro 17"
                      </th>
                      <td className="px-6 py-4">Silver</td>
                      <td className="px-6 py-4">Laptop</td>
                      <td className="px-6 py-4">$2999</td>
                    </tr>
                    <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                      <th
                        scope="row"
                        className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                      >
                        Microsoft Surface Pro
                      </th>
                      <td className="px-6 py-4">White</td>
                      <td className="px-6 py-4">Laptop PC</td>
                      <td className="px-6 py-4">$1999</td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                      <th
                        scope="row"
                        className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                      >
                        Magic Mouse 2
                      </th>
                      <td className="px-6 py-4">Black</td>
                      <td className="px-6 py-4">Accessories</td>
                      <td className="px-6 py-4">$99</td>
                    </tr>
                  </tbody>
                </table>
              </div>
          </div>

          {/* <!-- Cuarto contenedor -->
            <!-- Sección 4 - Tabla de Transacciones --> */}
          <div className="mt-8 rounded-lg bg-white p-4 shadow-md">
            <div className="mt-4 rounded-md bg-white p-4">
              <h2 className="pb-4 text-lg font-semibold text-gray-500">
                Transacciones
              </h2>
              <div className="my-1"></div>
              {/* <!-- Espacio de separación --> */}
              <div className="mb-6 h-px bg-gradient-to-r from-cyan-300 to-cyan-500"></div>
              {/* <!-- Línea con gradiente --> */}

              <div className="light relative overflow-x-auto rounded-md">
                <table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
                  <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Product name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Color
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Category
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                      <th
                        scope="row"
                        className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                      >
                        Apple MacBook Pro 17"
                      </th>
                      <td className="px-6 py-4">Silver</td>
                      <td className="px-6 py-4">Laptop</td>
                      <td className="px-6 py-4">$2999</td>
                    </tr>
                    <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                      <th
                        scope="row"
                        className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                      >
                        Microsoft Surface Pro
                      </th>
                      <td className="px-6 py-4">White</td>
                      <td className="px-6 py-4">Laptop PC</td>
                      <td className="px-6 py-4">$1999</td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                      <th
                        scope="row"
                        className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                      >
                        Magic Mouse 2
                      </th>
                      <td className="px-6 py-4">Black</td>
                      <td className="px-6 py-4">Accessories</td>
                      <td className="px-6 py-4">$99</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
