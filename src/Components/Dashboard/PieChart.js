import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const PieChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const chartInstance = new Chart(ctx, {
      type: "pie",
      data: {
        labels: [
          "Potentially Bad Traffic",
          "Attempted Information Leak",
          "Misc Attack",
        ],
        datasets: [
          {
            data: [10, 20, 30], // Replace with actual data
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
    });

    return () => {
      chartInstance.destroy();
    };
  }, [data]);

  return (
    <div className="w-full md:w-1/3 h-96 flex flex-col justify-center items-center border-4 border-solid border-gray-600 bg-gray-800 p-4 rounded-lg">
      <h1 className="text-center text-xl font-semibold pt-2">
        Alerts Distribution by Severity
      </h1>
      <div className="flex justify-center items-center w-full h-full">
        <canvas ref={chartRef} className=" p-2 w-full h-full" />
      </div>
    </div>
  );
};

export default PieChart;
