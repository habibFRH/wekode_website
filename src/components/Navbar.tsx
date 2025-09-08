import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-8 py-4 shadow-lg">
        <div className="flex items-center space-x-8">
          <a
            href="#home"
            className="!text-white/90 hover:!text-white transition-colors duration-200 font-medium"
          >
            Home
          </a>
          <a
            href="#about"
            className="!text-white/90 hover:!text-white transition-colors duration-200 font-medium"
          >
            About
          </a>
          <a
            href="#services"
            className="!text-white/90 hover:!text-white transition-colors duration-200 font-medium"
          >
            Services
          </a>
          <a
            href="#contact"
            className="!text-white/90 hover:!text-white transition-colors duration-200 font-medium"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
