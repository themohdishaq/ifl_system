import React from "react";
import LineGraph from "./LineGraph";
import BarGraph from "./BarGraph";
import PieGraph from "./PieGraph";

export default function DashBoard() {
  return (
    <div className="relative w-full md:h-screen bg-black">
      <div class="grid md:grid-row-7 h-full w-full">
        <div className="m-3 grid md:grid-cols-4 grid-row-4 gap-4">
          <div className="bg-green-400 rounded p-3">Earnings</div>
          <div className="bg-green-400 rounded p-3">Students</div>
          <div className="bg-green-400 rounded p-3">dfkjal</div>
          <div className="bg-green-400 rounded p-3">ksdjfla</div>
        </div>
        <div className="m-3 row-span-3 grid md:grid-cols-4 gap-4">
          <div className="bg-green-300 md:col-span-2 rounded p-3 flex justify-center items-center">
            <LineGraph />
          </div>
          <div className="bg-gareen-400 rounded p-3 flex justify-center items-center">
            <BarGraph />
          </div>
          <div className="bg-green-400 rounded p-3 flex justify-center items-center">
            <PieGraph />
          </div>
        </div>
        <div className="m-3 row-span-3 grid md:grid-cols-3 grid-row-3 gap-4">
          <div className="bg-green-300 rounded p-3"></div>
          <div className="bg-green-400 rounded p-3">Earnings</div>
          <div className="bg-green-400 rounded p-3">dfkjal</div>
        </div>
      </div>
    </div>
  );
}
