import React from "react";

const Explain = ({ title, description, points }) => {
  return (
    <div className="p-4 bg-gray-800 text-white rounded-lg mb-4">
      {title && <h2 className="text-2xl font-bold mb-2">{title}</h2>}
      {description && <p className="mb-4">{description}</p>}
      {points && points.length > 0 && (
        <ul className="list-disc list-inside">
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Explain;