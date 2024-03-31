import React, { useState, useEffect } from "react";
import { PieChart } from "@mui/x-charts/PieChart";

export default function PieGraph() {
  const [chartDimensions, setChartDimensions] = useState({
    width: window.innerWidth * 0.8,
    height: window.innerHeight * 0.5,
  });

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 400) {
        setChartDimensions({
          width: 300,
          height: window.innerHeight * 0.5,
        });
        console.log("object");
        return;
      }

      setChartDimensions({
        width: window.innerWidth * 0.8,
        height: window.innerHeight * 0.5,
      });
    }
    console.log(chartDimensions.width, chartDimensions.height);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);

  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: "series A" },
            { id: 1, value: 15, label: "series B" },
            { id: 2, value: 20, label: "series C" },
          ],
        },
      ]}
      width={chartDimensions.width}
      height={chartDimensions.height}
    />
  );
}
