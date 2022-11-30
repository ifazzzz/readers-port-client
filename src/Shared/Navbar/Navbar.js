import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Navbar = () => {

    const {user, logOut} = useContext(AuthContext);

    const handleLogout= () => {
        logOut()
        .then(() =>{})
        .catch((error) => console.log(error))
    }

    const menuItems = 
    <>
     <li><Link to='/'>Home</Link></li>       
     <li><Link to='/reviews'>Reviews</Link></li>
       {
        user?.uid && <li><Link to='/dashboard'>DashBoard</Link></li>
       }
     <li><Link to='/blog'>Blog</Link></li>       
     <li><Link to='/about'>About</Link></li>       
    </>

    return (
        <div>
            <div className="navbar bg-primary text-white py-4 px-16 sticky">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow text-primary bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                    </div>
                    <Link to='/' className="text-3xl">Readers_port</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.uid? <Link onClick={handleLogout} className="btn btn-secondary">Log Out</Link>
                        :
                        <Link to='/login' className="btn btn-secondary">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;