import React from "react";
import AddSection from "./AddSection";

function EducationCard() {
  return (
    <div className="text-[#1e214d]  bg-white rounded-2xl h-[55vh] p-5">
      <div className="text-5xl font-bold my-4 mx-2">Education</div>
      <div className="grid grid-cols-1 gap-4">
        <AddSection />
        <AddSection />
      </div>
    </div>
  );
}

export default EducationCard;