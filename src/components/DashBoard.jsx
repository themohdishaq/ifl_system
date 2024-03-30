import React from "react";
import LineGraph from "./LineGraph";
import BarGraph from "./BarGraph";
import PieGraph from "./PieGraph";
import TopBox from "./TopBox";

export default function DashBoard() {
  return (
    <div className="relative w-full md:h-screen bg-slate-300">
      <div class="grid md:grid-row-7 h-full">
        <div className="m-3 grid md:grid-cols-4 grid-row-4 gap-4">
          <TopBox />
          <TopBox />
          <TopBox />
          <TopBox />
        </div>
        <div className="m-3 row-span-3 grid md:grid-cols-4 gap-4">
          <div className="bg-gray-50  md:col-span-2 rounded p-3 flex justify-center items-center">
            {/* <LineGraph /> */}
          </div>
          <div className="bg-gray-50  rounded p-3  flex justify-center items-center">
            {/* <BarGraph /> */}
          </div>
          <div className="bg-gray-50  rounded p-3 flex justify-center items-center">
            {/* <PieGraph /> */}
          </div>
        </div>
        <div className="m-3 row-span-3 grid md:grid-cols-3 grid-row-3 gap-4">
          <div className="bg-gray-50 rounded p-3"></div>
          <div className="bg-gray-50  rounded p-3">Earnings</div>
          <div className="bg-gray-50  rounded p-3">dfkjal</div>
        </div>
      </div>
    </div>
  );
}
