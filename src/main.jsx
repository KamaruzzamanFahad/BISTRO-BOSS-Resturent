import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ScrollRestoration } from "react-router-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { router } from './Routers.jsx';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>

      <RouterProvider router={router}></RouterProvider>

    </HelmetProvider>
  </React.StrictMode>,
)
