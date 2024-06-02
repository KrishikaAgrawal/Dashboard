import React from "react";

const SummaryCard = ({ title, value }) => (
  <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="text-3xl">{value}</p>
  </div>
);

export default SummaryCard;
