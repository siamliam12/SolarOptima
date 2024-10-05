"use client";

import CommonTemplate from "@/components/cropmatch/commonTemplate/commonTemplate";
import Navbar from "@/components/dashboard/Navbar/Navbar";
import Sidebar from "@/components/dashboard/sidebar/Sidebar";
import withAuth from "@/lib/withAuth";
import React from "react";

const templatesData = [
  {
    imageUrl: "/images/rice.avif",
    title: "Rice",

    data: [
      "Soil: Prefers clayey or loamy soil with good water retention. Well-drained alluvial soil is ideal.",
      "pH: Slightly acidic to neutral (5.5 to 7.0)",
      "Temperature: Requires a warm temperature, ideally between 20°C to 35°C, with high humidity.",
    ],
    imagePosition: "left",
  },
  {
    imageUrl: "/images/Mangoes.webp",
    title: "Mango",

    data: [
      "Soil: Thrives in well-drained, deep loamy, and sandy loam soils with good aeration.",
      "pH: Prefers a slightly acidic to neutral range (5.5 to 7.5)",
      "Temperature: Grows well in tropical and subtropical regions, requiring temperatures between 24°C and 30°C.",
    ],
    imagePosition: "right",
  },
  {
    imageUrl: "/images/coffee.jpg",
    title: "Coffee",
    data: [
      "Soil: Requires well-drained, fertile soil rich in organic matter. Loamy soil with good water-holding capacity is ideal.",
      "pH: Prefers slightly acidic soil (5.2 to 6.0).",
      "Temperature: Best suited to a moderate climate, with ideal temperatures between 18°C to 24°C.",
    ],
    imagePosition: "left",
  },
];

function Page() {
  return (
    <div className="scrollbar-hide">
      <Navbar />
      <div className="flex">
        <Sidebar className="fixed" />
        <main className="flex-1 p-4 bg-[#04092f] h-full">
          <div className="p-8 min-h-screen h-full w-auto mt-[70px] overflow-scroll scrollbar-hide ml-52">
            {templatesData.map((template, index) => (
              <CommonTemplate
                key={index}
                imageUrl={template.imageUrl}
                title={template.title}
                description={template.description}
                data={template.data}
                imagePosition={template.imagePosition}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default withAuth(Page);
