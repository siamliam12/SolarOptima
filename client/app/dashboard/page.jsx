import Dashboard from "@/components/dashboard/Content/Content";
import Navbar from "@/components/dashboard/Navbar/Navbar";
import Sidebar from "@/components/dashboard/sidebar/Sidebar";
import React from "react";

function Page() {
  return (
    <>
      <div className="scrollbar-hide">
        <Navbar />
        <div className="flex">
          <Sidebar className="fixed" />
          <main className="flex-1 p-4">
            <Dashboard />
          </main>
        </div>
      </div>
    </>
  );
}

export default Page;
