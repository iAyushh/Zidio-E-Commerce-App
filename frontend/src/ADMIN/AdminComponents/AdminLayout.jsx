import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const AdminLayout = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex md:flex-row">
      {/* Sidebar */}
      <Sidebar showSidebar={showSidebar} closeSidebar={() => setShowSidebar(false)} />

      {/* Mobile overlay */}
      {showSidebar && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setShowSidebar(false)}
        />
      )}

      {/* Page content */}
      <div className="flex-1 flex flex-col">
        <Navbar toggleSidebar={() => setShowSidebar(!showSidebar)} />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
