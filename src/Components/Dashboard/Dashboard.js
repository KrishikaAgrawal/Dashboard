import React, { useState, useEffect } from "react";

import SummaryCard from "./SummaryCard";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import DataTable from "./DataTable";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full transition-colors duration-300 ${
        scrolled ? "bg-white shadow-ms text-slate-950" : "text-white"
      }`}
    >
      <div className="container mx-auto px-4 py-6 flex justify-around items-center">
        <div className="">Wi-Jungle</div>
        <ul className="flex space-x-4 text-sm items-center">
          <li>
            <a href="#home" className=" text-base">
              DASHBOARD
            </a>
          </li>
          <li>
            <a href="#home" className=" text-slate-400">
              MARKET
            </a>
          </li>
          <li>
            <a href="#about" className="text-slate-400">
              PRODUCTS
            </a>
          </li>
          <li>
            <a href="#contact" className="text-slate-400">
              PARTNER
            </a>
          </li>
          <li>
            <a href="#contact" className="text-slate-400">
              SUPPORT
            </a>
          </li>
          <li>
            <a href="#contact" className="text-slate-400">
              NEWS
            </a>
          </li>
          <li>
            <a href="#contact" className="text-slate-400">
              MORE
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const Dashboard = ({ data }) => {
  const columns = React.useMemo(
    () => [
      { Header: "Timestamp", accessor: "timestamp" },
      { Header: "Source IP", accessor: "src_ip" },
      { Header: "Destination IP", accessor: "dest_ip" },
      { Header: "Category", accessor: "alert.category" },
      { Header: "Severity", accessor: "alert.severity" },
    ],
    []
  );
  if (!Array.isArray(data) || data.length === 0) {
    return (
      <div className="h-screen flex justify-center items-center font-bold ">
        <h1 className=" text-4xl">Loading...</h1>
      </div>
    );
  }
  const summaryData = {
    totalAlerts: data.length,
    uniqueIPs: new Set(data.map((item) => item.src_ip)).size,
  };

  return (
    <>
      <div>
        <Navbar />
        <div className="container mx-auto p-4">
          <div className=" mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <SummaryCard title="Total Alerts" value={summaryData.totalAlerts} />
            <SummaryCard title="Unique IPs" value={summaryData.uniqueIPs} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <BarChart data={data} />
            <LineChart data={data} />
            <PieChart data={data} />
          </div>
          <div className="mt-4">
            <DataTable columns={columns} data={data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
