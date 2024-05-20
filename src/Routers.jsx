import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Root from "./Pages/Root";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import OurShop from "./Pages/OurShop";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import PrivateLogRegi from "./PrivateRouts/PrivateLogRegi";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/menu',
                element:<Menu></Menu>
            },
            {
                path: '/shop',
                element:<OurShop></OurShop>
            },
        ]
    },
    {
        path: '/login',
        element:<PrivateLogRegi><Login></Login></PrivateLogRegi>
    },
    {
        path: '/register',
        element:<PrivateLogRegi><Register></Register></PrivateLogRegi>
    },
])
