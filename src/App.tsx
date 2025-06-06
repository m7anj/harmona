import React from 'react'
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './utils/routes';
import Home from './components/features/home/Home';

function App() {
  return (
    <div className="App">

      <RouterProvider router={router} />

    </div>
  );
}

export default App;
