import React from 'react';
import { FaBars } from 'react-icons/fa';

const Navbar = ({ toggleSidebar }) => {
  return (
    <header className="h-16 bg-white flex items-center justify-between px-6 shadow z-10">
      <div className="flex items-center gap-4">
        <button onClick={toggleSidebar} className="md:hidden">
          <FaBars className="text-xl text-gray-600" />
        </button>
        <h1 className="text-xl font-semibold">Admin Panel</h1>
      </div>
      <div>👤 Admin</div>
    </header>
  );
};

export default Navbar;
