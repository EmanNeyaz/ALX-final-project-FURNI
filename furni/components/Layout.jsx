import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar'; // Import Navbar component

function Layout() {
  return (
    <div>
      <Navbar /> {/* Include Navbar component */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;