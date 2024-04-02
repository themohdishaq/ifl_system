import React from "react";
import LineGraph from "./LineGraph";
import BarGraph from "./BarGraph";
import PieGraph from "./PieGraph";
import TopBox from "./TopBox";

export default function DashBoard() {
  return (
    <div className="relative w-full md:h-screen md:p-8 p-1">
      <div className="text-3xl ">Admin Dashboard</div>
      <div className="my-3">
        <a href="/">Home</a>
        <span className="text-amber-600 hover:f">
          <span className="mx-3">/</span>
          <a href="/messaging">Admin</a>
        </span>
      </div>
      <div class="grid md:grid-row-7">
        <div className="m-3 grid md:grid-cols-4 grid-row-4 gap-4">
          <TopBox />
          <TopBox />
          <TopBox />
          <TopBox />
        </div>
        <div className="m-3 row-span-3 grid md:grid-cols-4 gap-4">
          <div className="md:col-span-2 ">
            <BarGraph />
          </div>
          <div>
            <PieGraph />
          </div>
          <div>
            <PieGraph />
          </div>
        </div>
        <div className="m-3 row-span-3 grid md:grid-cols-3 grid-row-3 gap-4">
          <div>
            <LineGraph />
          </div>
          <div>
            <LineGraph />
          </div>
          <div>
            <LineGraph />
          </div>
        </div>
      </div>
    </div>
  );
}
