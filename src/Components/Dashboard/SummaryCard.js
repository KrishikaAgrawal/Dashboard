import React from "react";

const SummaryCard = ({ title, value }) => (
  <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md">
    <p className="text-3xl font-bold">{value}</p>
    <h3 className="text-lg font-semibold text-slate-500">{title}</h3>
  </div>
);

export default SummaryCard;
