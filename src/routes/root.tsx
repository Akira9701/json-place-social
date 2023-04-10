import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/mobile/SidebarMobile';

export default function Root() {
  return (
    <div className="container">
      <Sidebar />
      <Outlet />
    </div>
  );
}
