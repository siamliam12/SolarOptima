"use client";

import React, { useEffect, useState } from "react";
import PieChart from "../Pie/PieChart";
import SplineChart from "../Spline/SplineChart";
import DensityPlot from "../Density/DensityPlot";
import ColumnChart from "../Column/ColumnChart";
import OutcomeComponent from "../Outcome/OutcomeComponent";
import { getSession } from "next-auth/react";
import axios from "axios";

const getLastEntries = (data, lastNum) => {
  const entries = Object.entries(data || {});
  const last100Entries =
    entries.length > lastNum ? entries.slice(-1 * lastNum) : entries;
  return Object.fromEntries(last100Entries);
};

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [solarData, setSolarData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const session = await getSession();
        const accessToken = session?.accessToken;
        console.log(accessToken);

        const response = await axios.post(
          `https://solaroptima.onrender.com/get-power-data`,
          {
            lat: 23.810331,
            lon: 90.412521,
          },
          {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI4MTc1ODM5LCJpYXQiOjE3MjgxMDM4MzksImp0aSI6IjI1Njk1YjU5YWI5NzQ0NzU4NWUxODUwYzIxMzJjMWVhIiwidXNlcl9pZCI6M30.Cgu1eKTxR1JgD7UAexCB9KBXwfgYLFyd0A4K2tvN7JA`,
              // Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setSolarData(response.data?.properties?.parameter);
        console.log(response.data?.properties?.parameter);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#04092f] text-white">
        <div>Loading...</div>
      </div>
    );
  }
  return (
    <div className="p-4 h-full w-auto mt-[70px] overflow-scroll scrollbar-hide ml-52">
      <div className="grid grid-cols-3 grid-rows-3 gap-4 h-full">
        <div className="bg-[#040936] border-[#151a44] shadow-xl text-white p-4 rounded-md flex flex-col justify-center items-center h-[200px]">
          <SplineChart
            title="Surface Temperature"
            // chartData={solarData?.TS}
            chartData={getLastEntries(solarData?.TS, 50)}
          />
        </div>
        <div className="bg-[#040936] border-[#151a44] border shadow-xl text-white p-4 rounded-md flex flex-col justify-center items-center h-[200px]">
          <PieChart data={getLastEntries(solarData?.CLOUD_AMT, 25)} />
        </div>
        <div className="bg-[#040936] border-[#151a44] shadow-xl text-white p-4 rounded-md flex flex-col justify-center items-center h-[200px]">
          <SplineChart
            title="Temperature 2m"
            chartData={getLastEntries(solarData?.T2M, 50)}
          />
        </div>
        <div className="bg-[#040936] border-[#151a44] shadow-xl text-white p-4 rounded-md flex flex-col justify-center items-center h-[200px]">
          <DensityPlot
            title={"Wind speed at 2 Meters & Wind speed at 10 Meters"}
            data1={getLastEntries(solarData?.WS2M, 50)}
            data2={getLastEntries(solarData?.WS10M, 50)}
            labels={[
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
            ]}
          />
        </div>
        <div className="bg-[#040936] border-[#151a44] row-span-2 col-span-2 shadow-xl text-white p-4 rounded-md">
          <OutcomeComponent />
        </div>

        <div className="bg-[#040936] border-[#151a44] shadow-xl text-white p-4 rounded-md flex flex-col justify-center items-center h-[200px]">
          <ColumnChart
            title="Surface Pressure"
            labels={[
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
            ]}
            data={getLastEntries(solarData?.PS, 25)}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
