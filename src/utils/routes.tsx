import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/features/home/Home';
import Landing from '../components/features/landing/Landing';
import NotFound from '../components/features/notfound/NotFound';
import Layout from '../components/layout/layout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Landing />
      },
      {
        path: "home",
        element: <Home />
      },
    ]
  }
]);

export default router;