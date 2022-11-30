import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import Loader from '../Loader/Loader';
import Navbar from '../Shared/Navbar/Navbar';

const DashBoardLayout = () => {

    const {user} = useContext(AuthContext);
    const [userInfo, setUserInfo] = useState()

    useEffect(() => {
        fetch(`https://readers-port-server.vercel.app/users?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setUserInfo(data))
    },[user?.email])

    if(!userInfo){
        return <Loader></Loader>
    }
    
    return (
        <>
           <Navbar></Navbar>
           <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                <label htmlFor="my-drawer-2" className="my-4 btn btn-primary text-secondary drawer-button lg:hidden">Open Sidebar</label>
                    <Outlet></Outlet>             
                </div> 
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                    <ul className="menu p-4 w-80 bg-primary text-white">                    
                    {
                       userInfo.type === "user" && 
                        <li className="hover:bg-accent hover:text-primary"><Link to='/dashboard/myOrders'>My Orders</Link></li>
                    }
                    {
                        userInfo?.type === "seller" && 
                        <>
                        <li className="hover:bg-accent hover:text-primary"><Link to='/dashboard/addProduct'>Add Product</Link></li>
                        <li className="hover:bg-accent hover:text-primary"><Link to='/dashboard/myProducts'>My Products</Link></li>
                        <li className="hover:bg-accent hover:text-primary"><Link to='/dashboard/myBuyers'>My Buyers</Link></li>
                        </>
                    }
                    {
                        userInfo?.type === "admin" && 
                        <>
                        <li className="hover:bg-accent hover:text-primary"><Link to='/dashboard/allBuyers'>All Buyers</Link></li>
                        <li className="hover:bg-accent hover:text-primary"><Link to='/dashboard/allSellers'>All Sellers</Link></li>
                        </>
                    }
                    </ul>               
                </div>
            </div>
        </>
    );
};

export default DashBoardLayout;