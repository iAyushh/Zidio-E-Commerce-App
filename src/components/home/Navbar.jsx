import React from "react";
import { Link } from 'react-router-dom';
import { FaHome, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { useWishlist } from '../../context/wishlistContext';
import { useCart } from '../../context/cartContext';

const Navbar = () => {
  const { wishlist } = useWishlist();
  const { cart } = useCart();

  // Total quantity in cart (not just length)
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b bg-gray-900 text-white">
      <div className="text-lg font-bold tracking-widest">ZIDIO STORE</div>
      
      <ul className="hidden md:flex gap-8 text-sm font-medium">
        {["What's New", "Home", "Shop", "Collection", "About", "Contact"].map((item) => (
          <li key={item} className="hover:underline cursor-pointer">{item}</li>
        ))}
      </ul>

      <div className="flex gap-4 text-lg">
        <i className="ri-search-line"></i>
        <i className="ri-user-line"></i>
        <i className="ri-shopping-bag-line"></i>
      </div>

      <div className="flex justify-center items-center gap-4 text-lg">
        <Link to="/home" className="text-xl">
          <FaHome />
        </Link>

        <Link to="/wishlist" className="relative">
          <FaHeart className="hover:text-pink-700" />
          {wishlist.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-pink-600 text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
              {wishlist.length}
            </span>
          )}
        </Link>

        <Link to="/cart" className="relative">
          <FaShoppingCart className="hover:text-yellow-200 transition duration-200" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-yellow-500 text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

