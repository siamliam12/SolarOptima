import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-4 h-full w-full">
      <div className="grid grid-cols-3 gap-4 h-full">
        {Array.from({ length: 9 }).map((_, index) => (
          <div key={index} className="bg-gray-800 text-white p-4 rounded-md flex flex-col justify-center items-center">
            <h2 className="text-xl font-semibold">Box {index + 1}</h2>
            <p className="mt-2">Content for box {index + 1}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;