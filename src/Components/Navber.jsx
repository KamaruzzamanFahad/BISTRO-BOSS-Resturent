import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import cardicon from "../assets/icon/cardicon.png";
import profileicon from "../assets/icon/profile.png";
import { AuthContext } from "../Provider/AuthProvider";

const Navber = () => {
  const { Logout } = useContext(AuthContext);
  const links = (
    <>
      <NavLink activeclassname="active" to={"/"}>
        <li>Home</li>
      </NavLink>
      <NavLink activeclassname="active" to={""}>
        <li>CONTACT US</li>
      </NavLink>
      <NavLink activeclassname="active" to={""}>
        <li>DASHBOARD</li>
      </NavLink>
      <NavLink activeclassname="active" to={"/menu"}>
        <li>Our Menu</li>
      </NavLink>
      <NavLink activeclassname="active" to={"/shop"}>
        <li>Our Shop</li>
      </NavLink>
    </>
  );

  return (
    <div className="fixed z-10 w-full">
      <div className="navbar bg-black w-full bg-opacity-20 text-white font-bold px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu gap-3 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 uppercase"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center w-[75%]  justify-end hidden lg:flex">
          <ul className="menu gap-5 menu-horizontal px-1 uppercase">{links}</ul>
        </div>
        <div className="navbar-end flex justify-center items-center gap-2 ">
          <div className="indicator">
            <span className="indicator-item mb-3 mr-3 indicator-bottom badge bg-red-500">0</span>
            <div className="grid place-items-center">
              <img src={cardicon} alt="" className="w-12" />
            </div>
          </div>
          <button onClick={Logout} className="bg-transparent">
            SIGN OUT
          </button>
          <img src={profileicon} alt="" className="w-12" />
        </div>
      </div>
    </div>
  );
};

export default Navber;
