import React, { useState, useEffect } from "react";
import { LineChart } from "@mui/x-charts/LineChart";

export default function LineGraph() {
  const [chartDimensions, setChartDimensions] = useState({
    width: 500,
    height: 300,
  });

  useEffect(() => {
    function handleResize() {
      setChartDimensions({
        width: window.innerWidth * 0.5,
        height: window.innerHeight * 0.5,
      });
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-gray-50  md:col-span-2 rounded p-3 flex justify-center items-center">
      <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
            area: true,
          },
        ]}
        width={chartDimensions.width}
        height={chartDimensions.height}
      />
    </div>
  );
}
