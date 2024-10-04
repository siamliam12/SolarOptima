import React from "react";
import PieChart from "../Pie/PieChart";
import SplineChart from "../Spline/SplineChart";

const Dashboard = () => {
  return (
    <div className="p-4 h-full w-full">
      <div className="grid grid-cols-3 gap-4 h-full">
        {Array.from({ length: 9 }).map((_, index) => (
          <div
            key={index}
            className="bg-white shadow-xl text-white p-4 rounded-md flex flex-col justify-center items-center"
          >
            {index === 1 ? (
              <PieChart />
            ) : index === 0 ? (
              <SplineChart
                title="Surface Temperature"
                chartData={[65, 59, 80, 81, 56, 55, 40]}
              />
            ) : index === 2 ? (
              <SplineChart
                title="Temperature 2m"
                chartData={[81, 65, 56, 59, 80, 55, 40]}
              />
            ) : (
              <>
                <h2 className="text-xl font-semibold">Box {index + 1}</h2>
                <p className="mt-2">Content for box {index + 1}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
