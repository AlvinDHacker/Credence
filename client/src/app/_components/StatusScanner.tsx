"use client";
import React, { useState, useEffect } from "react";
import QrReader from "react-qr-scanner";
import contractABI from "../../../build/artifacts/contracts/Tracker.sol/Tracker.json";
import Wallet from "./wallet";
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

  const updateStatus = () => {
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

    tracker.addStatus("ppId", "0xyuubd", "warehouse", "19.72332", "102.2281");
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
      navigator.geolocation.getCurrentPosition(async function (position) {
        var pos = position;
        var lat = pos.coords.latitude;
        var long = pos.coords.longitude;
      });
    }
  };

  return (
    <div className="">
      {!data ? (
        <QrReader className="aspect-square" delay={100} onScan={handleScan} />
      ) : (
        data
      )}
      <Wallet />
      <button className="btn bg-info z-5" onClick={updateStatus}>
        Click me
      </button>
      {hash && <div>Transaction Hash: {hash}</div>}
    </div>
  );
}
