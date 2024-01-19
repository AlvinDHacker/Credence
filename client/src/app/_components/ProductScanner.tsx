"use client";
import React, { useState, useEffect } from "react";
import QrReader from "react-qr-scanner";
import contractABI from "../../../build/artifacts/contracts/Tracker.sol/Tracker.json";
import { AlchemyProvider, Contract, ethers } from "ethers";

interface scanData {
  text: string;
}

export default function ProductScanner() {
  const [data, setData] = useState<string>();

  const getStatus = (id) => {
    const provider = new AlchemyProvider(
      "maticmum",
      process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
    );

    const userWallet = new ethers.Wallet(
      process.env.NEXT_PUBLIC_PRIVATE_KEY,
      provider,
    );

    const tracker = new Contract(
      process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
      contractABI.abi,
      userWallet,
    );

    const journey = tracker.track(id);
  };

  const handleScan = (cData: scanData) => {
    if (cData) {
      getStatus(cData.text);
    }
  };

  return (
    <div className="">
      <div className="flex h-screen w-full flex-col items-center bg-black pt-36">
        <div className="mb-8 text-3xl font-bold text-white">Scan QR</div>
        <div
          className="relative aspect-square w-3/4 rounded-3xl bg-white
        "
        >
          <div className="scan-line"></div>
          {!data ? (
            <QrReader
              className="h-full rounded-3xl object-fill"
              delay={100}
              onScan={handleScan}
            />
          ) : (
            data
          )}
        </div>
      </div>
    </div>
  );
}
