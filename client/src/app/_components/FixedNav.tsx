"use client";
import { Home, PlusCircle, Scroll } from 'lucide-react'
import React, { useState, Fragment, useRef } from "react";
import QRCode from "react-qr-code";
import { Dialog, Transition } from "@headlessui/react";
import ReactToPrint from "react-to-print";

const FixedNav = () => {

    let [isOpen, setIsOpen] = useState(false);
  const qr = useRef(null);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div>
        <div className=" fixed bg-black shadow-md text-white p-3 flex flex-col gap-5 right-0 top-[60%] rounded-l-xl">
        <a href="/">
        <Home/>
        </a>
        <button onClick={openModal}>
        <PlusCircle/>
        </button>
        <a href="/orders">
        <Scroll/>
        </a>
        {/* <User2/> */}
      </div>

      <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[80%] mx-auto transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  {/* <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Payment successful
                  </Dialog.Title> */}
                  <div className="flex justify-center text-4xl font-bold">
                    Expand Your Organization
                  </div>
                  <div ref={qr} className="my-2 h-full">
                    <div className="grid grid-cols-4 justify-center h-full items-center text-sm text-gray-500">
                      <a href='/add-products' className='text-center'>
                        <img className='rounded-full ' src='/products.png'/>
                        Add Products
                      </a>
                      <a href='/add-employee' className='text-center'>
                        <img className='rounded-full ' src='/employee.png'/>
                        Add Employees
                      </a>
                      <a href='/add-warehouse' className='text-center'>
                        <img className='rounded-full ' src='/warehouse2.png'/>
                        Add Warehouses
                      </a>
                      <a href='/add-vehicle' className='text-center'>
                        <img className='rounded-full ' src='/truck.png'/>
                        Add Vehicles
                      </a>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
    </div>
  )
}

export default FixedNav