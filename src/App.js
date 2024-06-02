import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Dashboard from "./Components/Dashboard/Dashboard";

// function App() {
//   return (
//     <>
//       <Dashboard />
//     </>
//   );
// }

// export default App;
const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/eve.json");
        const dataString = response.data;
        // Split the data by newline and parse each JSON object
        const parsedData = dataString
          .trim()
          .split("\n")
          .map((line) => JSON.parse(line));
        console.log("Parsed data:", parsedData);
        setData(parsedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="dark">
      <div className="min-h-screen bg-gray-900 text-white">
        <Dashboard data={data} />
      </div>
    </div>
  );
};

export default App;
