
// import React from 'react';
// import Navbar from './AdminComponents/Navbar.jsx';

// import Sidebar from './AdminComponents/Sidebar.jsx';


// const AdminDashboard = () => {
//   return (
//     <>
//     {/* <Navbar/> */}
//     {/* <Sidebar/> */}
//     {/* <ProductForm/> */}
//     {/* <Products/> */}
//     </>
//   );
// };

// export default AdminDashboard;



import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [productCount, setProductCount] = useState(0);

  useEffect(() => {
    const fetchProductCount = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        setProductCount(res.data.length);
      } catch (err) {
        console.error("Failed to fetch product count", err);
      }
    };

    fetchProductCount();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-white shadow rounded p-6 text-center">
          <h3 className="text-lg font-semibold">Total Products</h3>
          <p className="text-3xl font-bold text-blue-600">{productCount}</p>
        </div>

        {/* Add more dashboard cards here like Orders, Users, Revenue etc. */}
      </div>
    </div>
  );
};

export default AdminDashboard;
