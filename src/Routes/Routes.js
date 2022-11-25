import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../Layout/DashBoardLayout";
import Main from "../Layout/Main";
import Blog from "../pages/Blog/Blog";
import AddProduct from "../pages/Dashboard/AddProduct/AddProduct";
import AllBuyers from "../pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../pages/Dashboard/AllSellers/AllSellers";
import MyBuyers from "../pages/Dashboard/MyBuyers/MyBuyers";
import MyOrders from "../pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../pages/Dashboard/MyProducts/MyProducts";
import Home from "../pages/Home/Home/Home";


import Login from "../pages/Login/Login";
import Products from "../pages/Products/Products";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/login',
                element : <Login></Login>
            },
            {
                path : '/register',
                element : <Register></Register>
            },
            {
                path : '/blog',
                element : <Blog></Blog>
            },
            {
                path : '/category/:id',
                element : <PrivateRoute><Products></Products></PrivateRoute>,
                loader : ({params})=> fetch(`http://localhost:5000/category/${params.id}`)
            }
        ]
    },
    {
        path : '/dashboard',
        element : <DashBoardLayout></DashBoardLayout>,
        children : [
            {
                path : '/dashboard/myOrders',
                element : <MyOrders></MyOrders>
            },
            {
                path : '/dashboard/addProduct',
                element : <AddProduct></AddProduct>
            },
            {
                path : '/dashboard/myProducts',
                element : <MyProducts></MyProducts>
            },
            {
                path : '/dashboard/myBuyers',
                element : <MyBuyers></MyBuyers>
            },
            {
                path : '/dashboard/allSellers',
                element : <AllSellers></AllSellers>
            },
            {
                path : '/dashboard/allBuyers',
                element : <AllBuyers></AllBuyers>
            }
        ]
    }
])