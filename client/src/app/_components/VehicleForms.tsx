import React from "react";
import { FileText, ChevronRight } from "lucide-react";

const VehicleForms = () => {
  return (
    <div className="mx-auto w-[80%]">
      <h1 className="mb-5 text-2xl font-bold">Required steps</h1>
      <div className="row-">
        <p className="text-lg font-bold">Welcome User</p>
        <p className="text-base font-light">
          Here is what you need to do to set up your account.
        </p>
        <div className="flex flex-row gap-3">
          <FileText />
          <h1>Driving license</h1>
          <p>Action </p>
        </div>
      </div>
    </div>
  );
};

export default VehicleForms;
