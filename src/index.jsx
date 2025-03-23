import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Landing from './Landing';
import Nav from './components/navigation/nav';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <Landing />
  </React.StrictMode>
);
