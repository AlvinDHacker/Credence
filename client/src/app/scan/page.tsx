import React from "react";
import StatusScanner from "../_components/StatusScanner";
import Navbar from "../_components/Navbar";

export default function page() {
  return (
    <div className="bg-black h-screen">
      <Navbar />
      <StatusScanner />
    </div>
  );
}
