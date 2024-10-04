import React from "react";

const TableSection = ({ data }) => {
  return (
    <div className="p-4 bg-gray-800 text-white rounded-lg mb-4">
      <h2 className="text-2xl font-bold mb-4">Crop Data Table</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-900 rounded-lg">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-700">Crop</th>
              <th className="py-2 px-4 border-b border-gray-700">Year</th>
              <th className="py-2 px-4 border-b border-gray-700">Rainfall (mm)</th>
              <th className="py-2 px-4 border-b border-gray-700">Temperature (°C)</th>
              <th className="py-2 px-4 border-b border-gray-700">Fertilizer (kg/ha)</th>
              <th className="py-2 px-4 border-b border-gray-700">Soil Quality</th>
              <th className="py-2 px-4 border-b border-gray-700">Pest Incidence</th>
              <th className="py-2 px-4 border-b border-gray-700">Predicted Yield (tons/ha)</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="hover:bg-gray-700">
                <td className="py-2 px-4 border-b border-gray-700">{item.crop}</td>
                <td className="py-2 px-4 border-b border-gray-700">{item.year}</td>
                <td className="py-2 px-4 border-b border-gray-700">{item.rainfall}</td>
                <td className="py-2 px-4 border-b border-gray-700">{item.temp}</td>
                <td className="py-2 px-4 border-b border-gray-700">{item.fertilizer}</td>
                <td className="py-2 px-4 border-b border-gray-700">{item.soil_quality}</td>
                <td className="py-2 px-4 border-b border-gray-700">{item.pest_incidence}</td>
                <td className="py-2 px-4 border-b border-gray-700">{item.predicted_yield}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableSection;