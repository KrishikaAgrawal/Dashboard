//javascriptCopy code
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const BarChart = ({ data }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Ensure data is valid and extract necessary information
    const validData = data.filter((item) => item.alert && item.alert.category);
    const categories = validData.map((item) => item.alert.category);
    const uniqueCategories = [...new Set(categories)];
    const categoryCounts = uniqueCategories.map(
      (category) => categories.filter((cat) => cat === category).length
    );

    const chart = new Chart(canvasRef.current, {
      type: "bar",
      data: {
        labels: uniqueCategories,
        datasets: [
          {
            label: "Alerts by Category",
            data: categoryCounts,
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => chart.destroy();
  }, [data]);

  return (
    //    <div className="w-1/3 border-4 border-solid border-gray-600 bg-gray-800 p-4 rounded-lg">
    //   <h1 className=" text-center mt-3 text-xl mb-14 font-semibold ">
    //     Alerts Over Time
    //   </h1>
    //   <div className="flex justify-center items-center">
    //     <canvas ref={chartRef} />
    //   </div>
    // </div>
    <div className="w-1/3 border-4 border-solid border-gray-600 bg-gray-800 p-4 rounded-lg">
      <h1 className="text-center  text-xl font-semibold mb-14">
        Alerts By Category
      </h1>
      <div className="flex justify-center items-center">
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
};

export default BarChart;
