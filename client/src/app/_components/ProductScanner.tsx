"use client";
import React, { useState, useEffect } from "react";
// import QrReader from "react-qr-scanner";
import { QrScanner } from "@yudiel/react-qr-scanner";
interface scanData {
  onDecode?: (result: scanData) => void;
}

interface QrScannerProps {
  onDecode?: (result: scanData) => void;
}

export default function ProductScanner() {
  const handleScan = (cData: scanData) => {
    if (cData) {
      window.location.replace(`/user/journey/${cData}`);
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

          <QrScanner
            onDecode={(result: scanData) => {
              return handleScan(result);
            }}
          />
        </div>
      </div>
    </div>
  );
}
