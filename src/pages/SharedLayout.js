import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const SharedLayout = () => {
  return (
    <div className="relativeS">
      <Header />
      <Sidebar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default SharedLayout;
