import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">
        SolarOptima
      </div>
      <div className="flex items-center">
        <img 
          src="https://via.placeholder.com/40" 
          alt="User Profile" 
          className="rounded-full w-10 h-10"
        />
      </div>
    </nav>
  );
};

export default Navbar;

