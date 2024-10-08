import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center fixed top-0 w-full">
      <div className="text-xl font-bold">SolarOptima</div>
      <div className="flex items-center">
        <img
          src="/images/user.png"
          alt="User Profile"
          className="rounded-full w-10 h-10"
        />
      </div>
    </nav>
  );
};

export default Navbar;
