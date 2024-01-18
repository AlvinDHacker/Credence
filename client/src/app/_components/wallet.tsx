"use client";

import { useAccount, useConnect, useDisconnect } from "wagmi";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState, useLayoutEffect } from "react";
import Link from "next/link";

export default function Wallet() {
  const account = useAccount();
  const { connectors, connect } = useConnect();
  const { disconnect } = useDisconnect();
  let [isOpen, setIsOpen] = useState(false);
  const walletImgs = {
    MetaMask: 'metamask.png',
    WalletConnect: 'walletconnect.png',
    "Coinbase Wallet": 'coinbase.png',
    Injected: 'injected.png'
  }

  // useEffect(()=>{
  //   setIsOpen(account.status != 'connected')
  // },[account])


  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
      {account.status != 'connected' ? <button
        onClick={openModal}
                href="#"
                className="inline-flex items-center gap-2 rounded-lg bg-[#24292F] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#24292F]/90 focus:outline-none focus:ring-4 focus:ring-[#24292F]/50"
              >
                Connect Wallet
              </button> : <button
        onClick={disconnect}
                href="#"
                className="inline-flex items-center gap-2 rounded-lg bg-[#24292F] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#24292F]/90 focus:outline-none focus:ring-4 focus:ring-[#24292F]/50"
              >
                Disconnect Wallet
              </button>}
        
      </div>

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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  {/* <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Payment successful
                  </Dialog.Title> */}
                  <div className="mb-5 flex justify-center text-3xl font-bold">
                    Connect Wallet
                  </div>
                  <div className="grid grid-cols-2 gap-5 mt-10">
                    {connectors.map((connector) => {
                      return (
                        <button
                        key={connector.id}
                        onClick={() => connect({ connector })}
                          type="button"
                          className="shadow-lg mb-2 me-2 inline-flex items-center rounded-lg border border-2 border-black bg-white px-5 py-3 text-center text-lg text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        >
                          <img className="mr-2 h-8" src={walletImgs[connector.name]} alt="" />
                          {connector.name.split(" ")[0]}
                        </button>
                      );
                    })}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
