import React from "react";

const CommonTemplate = ({
  imageUrl,
  title,
  description,
  data,
  imagePosition,
}) => {
  return (
    <div className="flex flex-col my-8 md:flex-row items-center p-4 max-h-[500px] overflow-hidden">
      {imagePosition === "left" && (
        <div className="md:w-1/2 p-4 flex justify-center">
          <img src={imageUrl} alt={title} className="max-w-full max-h-64 rounded-md" />
        </div>
      )}
      <div className="md:w-1/2 p-4 h-full">
        <h2 className="text-2xl font-bold mb-2 text-white">{title}</h2>
        <p className="mb-4 text-white">{description}</p>
        <ul className="list-disc list-inside text-white">
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      {imagePosition === "right" && (
        <div className="md:w-1/2 p-4 flex justify-center">
          <img src={imageUrl} alt={title} className="max-w-full max-h-64 rounded-md" />
        </div>
      )}
    </div>
  );
};

export default CommonTemplate;