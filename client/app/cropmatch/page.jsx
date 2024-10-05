"use client";

import CommonTemplate from "@/components/cropmatch/commonTemplate/commonTemplate";
import Navbar from "@/components/dashboard/Navbar/Navbar";
import Sidebar from "@/components/dashboard/sidebar/Sidebar";
import withAuth from "@/lib/withAuth";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { getSession } from "next-auth/react";

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
  const [loading, setLoading] = useState(true);
  const [cropData, setCropData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const session = await getSession();
        const accessToken = session?.access;

        const response = await axios.post(
          `${process.env.NEXT_APP_API_URL}/recommend-crop`,

          {
            temperature: 23.6,
            humidity: 60.3,
          },
          {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI4MTU3MzY1LCJpYXQiOjE3MjgwODUzNjUsImp0aSI6IjBhNGJkNTVlOWFkMzQ5ZTViZTE1MzY5NWQ0MjVmODNiIiwidXNlcl9pZCI6Mn0.9U3dXNnWR_wOGCmiZwv0iX3AXc_z2cmqTC5eQJFT8P4 `,
            },
          }
        );
        setCropData(response.data.Crop);
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
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">Crop Data</h2>
              <ul>
                {cropData.map((crop, index) => (
                  <li key={index} className="mb-2">
                    <span className="font-semibold">{crop.title}:</span>{" "}
                    {crop.value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default withAuth(Page);
