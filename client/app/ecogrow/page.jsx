import Navbar from "@/components/dashboard/Navbar/Navbar";
import Sidebar from "@/components/dashboard/sidebar/Sidebar";
import Explain from "@/components/ecogrow/explain/Explain";
import Graph from "@/components/ecogrow/graph/Graph";
import TableSection from "@/components/ecogrow/table/TableSection";
import React from "react";

const explanations = [
  {
    description:
      "Solar energy is a renewable energy source that is harnessed from the sun.",
    points: [
      "Solar panels convert sunlight into electricity.",
      "It is a clean and sustainable energy source.",
      "Reduces electricity bills and carbon footprint.",
    ],
  },
];

const data = [
  {
    crop: "Wheat",
    year: 2024,
    rainfall: 580,
    temp: 23,
    fertilizer: 115,
    soil_quality: 8,
    pest_incidence: 0,
    predicted_yield: 2.847,
  },
  {
    crop: "Corn",
    year: 2024,
    rainfall: 620,
    temp: 26,
    fertilizer: 130,
    soil_quality: 7,
    pest_incidence: 1,
    predicted_yield: 3.9744,
  },
  {
    crop: "Rice",
    year: 2024,
    rainfall: 750,
    temp: 28,
    fertilizer: 160,
    soil_quality: 6,
    pest_incidence: 0,
    predicted_yield: 6.0412,
  },
  {
    crop: "Soybean",
    year: 2024,
    rainfall: 500,
    temp: 25,
    fertilizer: 120,
    soil_quality: 7,
    pest_incidence: 1,
    predicted_yield: 2.7094,
  },
];
function page() {
  return (
    <div className="scrollbar-hide">
      <Navbar />
      <div className="flex">
        <Sidebar className="fixed" />
        <main className="flex-1 p-4 bg-[#04092f] h-full">
          <div className="p-8 min-h-screen h-full w-auto mt-[70px] ml-52 text-white">
            <Graph data={data} />
            {explanations.map((explanation, index) => (
              <Explain
                key={index}
                title={explanation.title}
                description={explanation.description}
                points={explanation.points}
              />
            ))}
            <TableSection data={data} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default page;
