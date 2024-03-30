import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

export default function DashBoard() {
  return (
    <div className="relative w-full md:h-screen bg-black">
      <div class="grid md:grid-row-7 h-full">
        <div className="m-3 grid md:grid-cols-4 grid-row-4 gap-4">
          <div className="bg-green-400 rounded p-3">Earnings</div>
          <div className="bg-green-400 rounded p-3">Students</div>
          <div className="bg-green-400 rounded p-3">dfkjal</div>
          <div className="bg-green-400 rounded p-3">ksdjfla</div>
        </div>
        <div className="m-3 row-span-3 grid md:grid-cols-4 gap-4">
          <div className="bg-green-300 md:col-span-2 rounded p-3">
            <BarChart
              xAxis={[
                { scaleType: "band", data: ["group A", "group B", "group C"] },
              ]}
              series={[
                { data: [4, 3, 5] },
                { data: [1, 6, 3] },
                { data: [2, 5, 6] },
              ]}
              width={300}
              height={300}
            />
          </div>
          <div className="bg-green-400 rounded p-3">ajsdfd</div>
          <div className="bg-green-400 rounded p-3">ksdjfla</div>
        </div>
        <div className="m-3 row-span-3 grid md:grid-cols-3 grid-row-3 gap-4">
          <div className="bg-green-300 rounded p-3">Students</div>
          <div className="bg-green-400 rounded p-3">Earnings</div>
          <div className="bg-green-400 rounded p-3">dfkjal</div>
        </div>
      </div>
    </div>
  );
}
