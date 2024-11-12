import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import LimitedTimeOffer from './LimitedTimeOffer';

export function Layout() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Outlet />
      <LimitedTimeOffer />
    </div>
  );
}

export default Layout;