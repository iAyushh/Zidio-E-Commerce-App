import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaChartPie, FaShoppingBag, FaPlus, FaTimes, FaChevronDown  } from 'react-icons/fa';
import { RiCoupon2Fill } from "react-icons/ri";



const Sidebar = ({ showSidebar, closeSidebar }) => {
  const location = useLocation();
  const [showProductsSubmenu, setShowProductsSubmenu] = useState(false);

  const navItems = [
    {
      label: 'Dashboard',
      icon: <FaChartPie />,
      path: '/admin',
    },
    {
      label: 'Create Product',
      icon: <FaPlus />,
      path: '/admin/create-product',
    },
    {
      label: 'Products',
      icon: <FaShoppingBag />,
      children: [
        { label: 'List', path: '/admin/productsList' },
        { label: 'Grid', path: '/admin/productsGrid' },
      ],
    },
    {
      label: 'Coupons',
      icon: <RiCoupon2Fill />,
      path: '/admin/coupons',
    }
  ];

  return (
    <div className="md:block">
      <div
        className={`
          fixed top-0 left-0 h-full w-64 bg-white shadow-md z-40
          transform transition-transform duration-300 ease-in-out
          ${showSidebar ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 md:relative md:static
        `}
      >
        <div className="p-4 border-b flex justify-between items-center md:justify-center">
          <span className="font-bold">🛒 Admin</span>
          <button onClick={closeSidebar} className="md:hidden">
            <FaTimes />
          </button>
        </div>

        <ul className="p-4 space-y-2">
          {navItems.map((item) => (
            <li key={item.label}>
              {item.children ? (
                <div>
                  <button
                    onClick={() => setShowProductsSubmenu(!showProductsSubmenu)}
                    className="flex items-center w-full gap-3 text-left"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                    <FaChevronDown
                      className={`ml-auto transition-transform ${
                        showProductsSubmenu ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {showProductsSubmenu && (
                    <ul className="ml-8 mt-2 space-y-2 text-sm text-gray-700">
                      {item.children.map((child) => (
                        <li key={child.path}>
                          <Link to={child.path} onClick={closeSidebar}>
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  to={item.path}
                  onClick={closeSidebar}
                  className={`flex items-center gap-3 ${
                    location.pathname === item.path ? 'text-blue-600 font-bold' : ''
                  }`}
                >
                  {item.icon}
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
