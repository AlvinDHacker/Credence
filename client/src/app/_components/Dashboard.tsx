import {
  Construction,
  Factory,
  Home,
  MapPin,
  PackageOpen,
  PlusCircle,
  Scroll,
  Store,
  Truck,
  User2,
  Users2,
  Weight,
} from "lucide-react";
import React from "react";

const Dashboard = () => {
  return (
    <div className=" mx-auto w-[80%] ">
      <h1 className="mb-3 text-2xl font-bold tracking-tight text-gray-900">
        Dashboard
      </h1>

      <div className="flex justify-between">
        <h2 className="pb-1 text-lg font-semibold text-gray-500">
          Welcome Organization Name
        </h2>
        <div className="mr-5 flex flex-row gap-5">
          <MapPin />
          <p>Andheri</p>
        </div>
      </div>
      <div className="my-7 grid grid-cols-1 gap-4 md:grid-cols-4">
        <div className="flex-1 rounded-lg bg-white p-4 shadow-md">
          <div className="flex justify-between">
            <h2 className="pb-1 text-lg font-semibold text-gray-500">
              No. of Warehouses
            </h2>
            <Store />
          </div>
          <div className="my-1"></div>
          <div className="mb-6 h-px bg-gradient-to-r from-cyan-300 to-cyan-500"></div>
          <div className="chart-container relative flex w-full flex-row gap-3">
            <h5 className=" w-full text-5xl font-bold text-gray-900">
              40 <span className="text-lg font-light">Warehouses</span>
            </h5>
          </div>
        </div>

        <div className="flex-1 rounded-lg bg-white p-4 shadow-md">
          <div className="flex justify-between">
            <h2 className="pb-1 text-lg font-semibold text-gray-500">
              Warehouse Usage
            </h2>
            <PackageOpen />
          </div>
          <div className="my-1"></div>
          <div className="mb-6 h-px bg-gradient-to-r from-cyan-300 to-cyan-500"></div>
          <div className="chart-container relative flex w-full flex-row gap-3">
            <h5 className="w-full text-5xl font-bold text-gray-900">
              92% <span className="text-lg font-light">of 100</span>
            </h5>
          </div>
        </div>

        <div className="flex-1 rounded-lg bg-white p-4 shadow-md">
          <div className="flex justify-between">
            <h2 className="pb-1 text-lg font-semibold text-gray-500">
              No. of Vehicles
            </h2>
            <Truck />
          </div>
          <div className="my-1"></div>
          <div className="mb-6 h-px bg-gradient-to-r from-cyan-300 to-cyan-500"></div>
          <div className="chart-container relative flex w-full flex-row gap-3">
            <h5 className="w-full text-5xl font-bold text-gray-900">
              100 <span className="text-lg font-light">Vehicles</span>
            </h5>
          </div>
        </div>

        <div className="flex-1 rounded-lg bg-white p-4 shadow-md">
          <div className="flex justify-between">
            <h2 className="pb-1 text-lg font-semibold text-gray-500">
              No. of Employees
            </h2>
            <Users2 />
          </div>
          <div className="my-1"></div>
          <div className="mb-6 h-px bg-gradient-to-r from-cyan-300 to-cyan-500"></div>
          <div className="chart-container relative w-full">
            <h5 className="mt-5 w-full text-5xl font-bold text-gray-900">
              3,000 <span className="text-lg font-light">Employees</span>
            </h5>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-wrap">
        <div className="w-full flex-1 py-2 md:w-1/2">
          <div className="mt-1 flex flex-wrap space-x-0 space-y-2 md:space-x-4 md:space-y-0">
            <div className="flex-1 rounded-lg bg-white p-4 shadow-md md:w-1/2">
              <h2 className="pb-1 text-lg font-semibold text-gray-500">
                Sales
              </h2>
              <div className="my-1"></div>
              <div className="mb-6 h-px bg-gradient-to-r from-cyan-300 to-cyan-500"></div>
              <div className="chart-container relative w-full">
                Zane's Graph
                <h5 className="mt-5 w-full text-5xl font-bold text-gray-900">
                  $2999
                </h5>
              </div>
            </div>

            <a
              href="/orders"
              className="flex-1 rounded-lg bg-white p-4 shadow-md md:w-1/2"
            >
              <h2 className="pb-1 text-lg font-semibold text-gray-500">
                Orders
              </h2>
              <div className="my-1"></div>
              <div className="mb-6 h-px bg-gradient-to-r from-cyan-300 to-cyan-500"></div>
              <div className="chart-container">
                Zane's Graph
                <canvas id="commercesChart"></canvas>
              </div>
            </a>
          </div>

          <div className="mt-8 rounded-lg bg-white p-4 shadow-md">
            <a href="/orders">
              <h2 className="pb-4 text-lg font-semibold text-gray-500">
                Latest Orders
              </h2>
              <div className="my-1"></div>
              <div className="mb-6 h-px bg-gradient-to-r from-cyan-300 to-cyan-500"></div>
              <div className="light relative overflow-x-auto rounded-md">
                <table className="w-full text-left text-sm text-gray-500 rtl:text-right ">
                  <thead className="bg-gray-50 text-xs uppercase text-gray-700">
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
                    <tr className="border-b bg-white ">
                      <th
                        scope="row"
                        className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 "
                      >
                        Apple MacBook Pro 17"
                      </th>
                      <td className="px-6 py-4">Silver</td>
                      <td className="px-6 py-4">Laptop</td>
                      <td className="px-6 py-4">$2999</td>
                    </tr>
                    <tr className="border-b bg-white ">
                      <th
                        scope="row"
                        className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 "
                      >
                        Microsoft Surface Pro
                      </th>
                      <td className="px-6 py-4">White</td>
                      <td className="px-6 py-4">Laptop PC</td>
                      <td className="px-6 py-4">$1999</td>
                    </tr>
                    <tr className="bg-white">
                      <th
                        scope="row"
                        className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 "
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
            </a>
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
                <table className="w-full text-left text-sm text-gray-500 rtl:text-right ">
                  <thead className="bg-gray-50 text-xs uppercase text-gray-700 ">
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
                    <tr className="border-b bg-white ">
                      <th
                        scope="row"
                        className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 "
                      >
                        Apple MacBook Pro 17"
                      </th>
                      <td className="px-6 py-4">Silver</td>
                      <td className="px-6 py-4">Laptop</td>
                      <td className="px-6 py-4">$2999</td>
                    </tr>
                    <tr className="border-b bg-white ">
                      <th
                        scope="row"
                        className="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
                      >
                        Microsoft Surface Pro
                      </th>
                      <td className="px-6 py-4">White</td>
                      <td className="px-6 py-4">Laptop PC</td>
                      <td className="px-6 py-4">$1999</td>
                    </tr>
                    <tr className="bg-white">
                      <th
                        scope="row"
                        className="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
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
