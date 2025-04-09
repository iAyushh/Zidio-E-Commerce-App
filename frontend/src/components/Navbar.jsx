import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b">
      <div className="text-lg font-bold tracking-widest">ZIDIO STORE</div>
      <ul className="hidden md:flex gap-8 text-sm font-medium">
        {["What's New", "Home", "Shop", "Collection", "About","Contact"].map((item) => (
          <li key={item} className="hover:underline cursor-pointer">{item}</li>
        ))}
      </ul>
      <div className="flex gap-4 text-lg ">
        <i className="ri-search-line"></i>
        <i className="ri-user-line"></i>
        <i className="ri-shopping-bag-line"></i>
      </div>
    </nav>
  );
};

export default Navbar;
