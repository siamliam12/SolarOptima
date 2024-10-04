import CommonTemplate from "@/components/cropmatch/commonTemplate/commonTemplate";
import Navbar from "@/components/dashboard/Navbar/Navbar";
import Sidebar from "@/components/dashboard/sidebar/Sidebar";
import React from "react";

const templatesData = [
  {
    imageUrl: "https://via.placeholder.com/200",
    title: "Sample Title 1",
    description: "This is a short description of the content.",
    data: ["First bullet point", "Second bullet point", "Third bullet point"],
    imagePosition: "left",
  },
  {
    imageUrl: "https://via.placeholder.com/200",
    title: "Sample Title 2",
    description: "This is a short description of the content.",
    data: ["First bullet point", "Second bullet point", "Third bullet point"],
    imagePosition: "right",
  },
  {
    imageUrl: "https://via.placeholder.com/200",
    title: "Sample Title 3",
    description: "This is a short description of the content.",
    data: ["First bullet point", "Second bullet point", "Third bullet point"],
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

export default Page;