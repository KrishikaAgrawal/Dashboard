import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const LineChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const chartInstance = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar"], // Replace with actual data
        datasets: [
          {
            label: "Alert Trends",
            data: [12, 19, 3], // Replace with actual data
            fill: false,
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
          },
        ],
      },
      options: {
        scales: {
          x: {
            beginAtZero: true,
          },
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      chartInstance.destroy();
    };
  }, [data]);

  return (
    <div className="w-1/3 border-4 border-solid border-gray-600 bg-gray-800 p-4 rounded-lg">
      <h1 className=" text-center text-xl mb-14 font-semibold ">
        Alerts Over Time
      </h1>
      <div className="flex justify-center items-center">
        <canvas ref={chartRef} />
      </div>
    </div>
  );
};

export default LineChart;
