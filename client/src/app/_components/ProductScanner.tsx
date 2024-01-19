"use client";
import React, { useState, useEffect } from "react";
import QrReader from "react-qr-scanner";
interface scanData {
  text: string;
}

export default function ProductScanner() {
  const handleScan = (cData: scanData) => {
    if (cData) {
      window.location.replace(`/user/journey/${cData.text}`);
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
          <div className="scan-line"></div>\
          <QrReader
            className="h-full rounded-3xl object-fill"
            delay={100}
            onScan={handleScan}
          />
        </div>
      </div>
    </div>
  );
}
