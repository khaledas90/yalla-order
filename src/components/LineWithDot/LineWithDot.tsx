import React from "react";

interface LineWithDotProps {
  mainColor: string;
}

const LineWithDot: React.FC<LineWithDotProps> = ({ mainColor }) => {
  return (
    <div className="absolute h-full ltr:left-0 rtl:right-0 top-0 flex flex-col items-center">
      <span className="w-[2px] h-1/2 bg-gray-500"></span>
      <span className={`bg-${mainColor} w-3 h-3 rounded-full mt-2`}></span>
    </div>
  );
};

export default LineWithDot;

