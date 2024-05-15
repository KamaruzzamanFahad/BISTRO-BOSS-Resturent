import React from 'react';
import { NavLink } from 'react-router-dom';

const Navber = () => {
    const links = <>
    <NavLink to={'/'}><li>Home</li></NavLink>
    <NavLink to={''}><li>CONTACT US</li></NavLink>
    <NavLink to={''}><li>DASHBOARD</li></NavLink>
    <NavLink to={''}><li>Our Menu</li></NavLink>
    <NavLink to={''}><li>Our Shop</li></NavLink>
    </>
    return (
        <div className='fixed z-10 w-full'>
            <div className="navbar bg-black bg-opacity-20 text-white font-bold px-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu gap-3 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
                           {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center w-[90%] justify-end hidden lg:flex">
                    <ul className="menu gap-5 menu-horizontal px-1">
                       {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navber;