import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './Login';
import SaveUser from './SaveUser';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/cadastre-se',
    element: <SaveUser />
  },
  {
    path: '/consultas',
    element: <App />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
