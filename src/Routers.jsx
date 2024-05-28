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
import PrivateRout from "./PrivateRouts/Private";
import DashBoard from "./DashBoard/DashBoard";
import DashboardHome from "./DashBoard/Pages/DashboardHome";
import Cart from "./DashBoard/Pages/Cart";
import AllUsers from "./DashBoard/Pages/AdminPages/AllUsers";
import PrivateAdmin from "./DashBoard/PrivateRouts/PrivateAdmin";
import AddItems from "./DashBoard/Pages/AdminPages/AddItems";
import ManageItem from "./DashBoard/Pages/AdminPages/ManageItem";
import Payment from "./DashBoard/Pages/Payment";
import PaymentHistry from "./DashBoard/Pages/PaymentHistry";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/menu',
                element: <PrivateRout><Menu></Menu></PrivateRout>
            },
            {
                path: '/shop',
                element: <OurShop></OurShop>
            },
        ]
    },
    {
        path: '/login',
        element: <PrivateLogRegi><Login></Login></PrivateLogRegi>
    },
    {
        path: '/register',
        element: <PrivateLogRegi><Register></Register></PrivateLogRegi>
    },
    {
        path: '/dashboard',
        element: <PrivateRout><DashBoard></DashBoard></PrivateRout>,
        children: [
            {
                path: '/dashboard',
                element: <PrivateRout><DashboardHome></DashboardHome></PrivateRout>
            },
            {
                path: '/dashboard/cart',
                element: <PrivateRout><Cart></Cart></PrivateRout>
            },
            {
                path: '/dashboard/pay',
                element: <PrivateRout><Payment></Payment></PrivateRout>
            },
            {
                path: '/dashboard/paymenthistory',
                element: <PrivateRout><PaymentHistry></PaymentHistry></PrivateRout>
            },



            //admin routs
            {
                path: '/dashboard/allusers',
                element: <PrivateAdmin><AllUsers></AllUsers></PrivateAdmin>,
            },
            {
                path: '/dashboard/additems',
                element: <PrivateAdmin><AddItems></AddItems></PrivateAdmin>
            },
            {
                path: '/dashboard/manageitems',
                element: <PrivateAdmin><ManageItem></ManageItem></PrivateAdmin>
            },
        ]
    },
])
