"use client";
import React, { useState, useEffect } from "react";
import contractABI from "../../../artStore/artifacts/contracts/Tracker.sol/Tracker.json";
import {
  useReadContract,
  useWriteContract,
  useWaitForTransactionReceipt,
} from "wagmi";
import { AlchemyProvider, Contract, ethers } from "ethers";
import { Position } from "postcss";
import QrReader from "react-qr-scanner";

interface scanData {
  text: string;
}

type PositionState = {
  latitude: number | null;
  longitude: number | null;
};

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

  const updateStatus = (
    name: ethers.Overrides,
    desc: ethers.Overrides,
    lat: ethers.Overrides,
    long: ethers.Overrides,
  ) => {
    const provider: AlchemyProvider = new AlchemyProvider(
      "maticmum",
      process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
    );

    const userWallet: ethers.Wallet = new ethers.Wallet(
      process.env.NEXT_PUBLIC_PRIVATE_KEY!,
      provider,
    );

    const tracker = new Contract(
      process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!,
      contractABI.abi,
      userWallet,
    );

    if (tracker?.addStatus) {
      void tracker.addStatus(name, desc, lat, long);
    } else {
      // Handle the case when the object or method is undefined
    }
  };

  const [pos, setPos] = useState<PositionState>({
    latitude: null,
    longitude: null,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          setPos({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
      );
    }
  }, []);

  const handleScan = (cData: scanData) => {
    if (cData) {
      const [type, id] = cData.text.split("#");
      console.log(cData.text);
      const message = type == "p" ? "Product created" : type == "w";

      // navigator.geolocation.getCurrentPosition(async function (position: PositionState) {
      //   const pos = position;
      //   const lat = pos.coords.latitude;
      //   const long = pos.coords.longitude;
      // });

      // updateStatus(cData.text, message, lat.toString(), long.toString());
    }
  };

  return (
    <div>
      <div className="w-[80%] mx-auto flex-col items-center  pt-36">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
        <div className="mb-8 text-3xl font-bold md:text-start text-center text-white">Scan QR</div>
        <div className="mb-8 text-lg md:block hidden text-white">Scan here to know the Product Info and get a detailed info about the info of the QR, how the product was made, where it was manufactured and its journey from start to end</div>
          </div>
        <div className="relative aspect-square w-3/4 mx-auto rounded-3xl bg-white">
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
    </div>
  );
}
