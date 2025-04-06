import react from 'react';
import Home from '../features/home/Home';
import Landing from '../features/landing/Landing';
import App from '../../App';
import { RouteObject } from 'react-router-dom';
import NotFound from '../features/notfound/NotFound';


import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout">
      <Outlet />
    </div>
  )
};

export default Layout;