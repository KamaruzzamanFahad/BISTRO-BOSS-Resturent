import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Root from "./Pages/Root";
import Home from "./Pages/Home";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path: '/',
                element:<Home></Home>
            }
        ]
    }
])