import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white text-black">
      {/* Logo and Name */}
      <div className="flex items-center">
        <img src="/logo.jpeg" alt="Logo" className="h-10 mr-3 rounded-md" />
        <span className="text-xl font-bold ">Geekaxis</span>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-10">
        <a
          href="#home"
          className="text-[#142f32] hover:text-[#10331b] hover:underline"
        >
          Home
        </a>
        <a
          href="#about"
          className="text-[#142f32] hover:text-[#10331b] hover:underline"
        >
          About
        </a>
        <a
          href="#services"
          className="text-[#142f32] hover:text-[#10331b] hover:underline"
        >
          Services
        </a>
      </div>

      {/* Sign Up Button */}
      <button className="bg-[#142f32] hover:bg-[#10331b] hover:scale-105 text-white px-4 py-2 rounded-3xl text-sm font-medium">
        Contact
      </button>
    </nav>
  );
};

export default Navbar;
