import Link from "next/link";
import React from "react";

const sidebarItems = [
  { title: "Dashboard", url: "/dashboard" },
  { title: "CropMatch", url: "/cropmatch" },
  { title: "EcoGrow", url: "/ecogrow" },
  { title: "AquaAlert", url: "/aquaalert" },
  { title: "SolarScan", url: "/solarscan" },
];

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-52 h-screen p-4">
      <ul>
        {sidebarItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center p-2 hover:bg-gray-700 rounded-md"
          >
            <Link href={item.url}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
