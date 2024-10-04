import React from "react";
import PieChart from "../Pie/PieChart";
import SplineChart from "../Spline/SplineChart";
import DensityPlot from "../Density/DensityPlot";
import ColumnChart from "../Column/ColumnChart";
import OutcomeComponent from "../Outcome/OutcomeComponent";

const Dashboard = () => {
  return (
    <div className="p-4 h-full w-auto mt-[70px] overflow-scroll scrollbar-hide ml-52">
      <div className="grid grid-cols-3 grid-rows-3 gap-4 h-full">
        <div className="bg-[#040936] border-[#151a44] border shadow-xl text-white p-4 rounded-md flex flex-col justify-center items-center h-[200px]">
          <PieChart />
        </div>
        <div className="bg-[#040936] border-[#151a44] shadow-xl text-white p-4 rounded-md flex flex-col justify-center items-center h-[200px]">
          <SplineChart
            title="Surface Temperature"
            chartData={[65, 59, 80, 81, 56, 55, 40]}
          />
        </div>
        <div className="bg-[#040936] border-[#151a44] shadow-xl text-white p-4 rounded-md flex flex-col justify-center items-center h-[200px]">
          <SplineChart
            title="Temperature 2m"
            chartData={[81, 65, 56, 59, 80, 55, 40]}
          />
        </div>
        <div className="bg-[#040936] border-[#151a44] shadow-xl text-white p-4 rounded-md flex flex-col justify-center items-center h-[200px]">
          <DensityPlot
            title="Surface Temperature"
            data1={[65, 59, 80, 81, 56, 55, 40]}
            data2={[28, 48, 40, 19, 86, 27, 90]}
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
        <div className="bg-[#040936] border-[#151a44] row-span-2 col-span-2 shadow-xl text-white p-4 rounded-md flex flex-col justify-center items-center h-[200px]">
          <OutcomeComponent />
        </div>

        <div className="bg-[#040936] border-[#151a44] shadow-xl text-white p-4 rounded-md flex flex-col justify-center items-center h-[200px]">
          <ColumnChart
            title="Sales Data"
            labels={[
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
            ]}
            data1={[65, 59, 80, 81, 56, 55, 40]}
            data2={[28, 48, 40, 19, 86, 27, 90]}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
