"use client";
import React, { useState, useEffect } from "react";
import QrReader from "react-qr-scanner";
import contractABI from "../../../artStore/artifacts/contracts/Tracker.sol/Tracker.json";
import {
  useReadContract,
  useWriteContract,
  useWaitForTransactionReceipt,
} from "wagmi";
import { AlchemyProvider, Contract, ethers } from "ethers";

interface scanData {
  text: string;
}

export default function StatusScanner() {
  const [data, setData] = useState<string>();
  const item = {
    v: "vehicle",
    w: "warehouse",
    p: "product",
  };

  const { data: hash, writeContract } = useWriteContract();
  const { data: journey } = useReadContract({
    functionName: "track",
    args: ["pId"],
  });

  const updateStatus = (name, desc, lat, long) => {
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

    tracker.addStatus(name, desc, lat, long);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async function (position) {
      var pos = position;
      console.log(pos);
    });
  }, []);

  const handleScan = (cData: scanData) => {
    if (cData) {
      const [type, id] = cData.text.split("#");
      const message =
        type == "p"
          ? "Product created"
          : type == "w"
            ? "Product moved to warehouse"
            : type == "v"
              ? "Product loaded in truck"
              : "";

      navigator.geolocation.getCurrentPosition(async function (position) {
        var pos = position;
        var lat = pos.coords.latitude;
        var long = pos.coords.longitude;
      });

      // updateStatus(cData.text, message, lat.toString(), long.toString());
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
