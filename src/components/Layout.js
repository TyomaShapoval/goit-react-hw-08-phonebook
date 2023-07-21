import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { Header } from './Header/Header.jsx';

export const Layout = () => {
  return (
    <div style={{backgroundColor: '#93A8B5', height: "100vh"}}>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        closeOnClick
        theme="light"
      />
    </div>
  );
};