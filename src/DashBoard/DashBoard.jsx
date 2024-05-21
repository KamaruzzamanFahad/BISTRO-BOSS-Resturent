import { NavLink, Outlet } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
import { IoMdCart } from "react-icons/io";
import { MdRateReview } from "react-icons/md";
import { FaCalendarCheck } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { FaShoppingBag } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const DashBoard = () => {
  return (
    <div className="flex">
      <div className="w-96 cinzel bg-[#D1A054] p-10 bashbord h-[100vh]">
        <h1 className="uppercase text-2xl font-bold">BISTRO BOSS</h1>
        <p className="uppercase text-lg font-semibold mb-16">
          R e s t a u r a n t
        </p>
        <NavLink
          className={"flex items-center gap-3"}
          activeclassname="active"
          to={"/dashboard"}
        >
          <IoMdHome className="text-3xl" />
          <p className="uppercase font-semibold text-lg">User Home</p>
        </NavLink>
        <NavLink
          className={"flex items-center gap-3 mt-5"}
          activeclassname="active"
          to={"/dashboard"}
        >
          <FaCalendarAlt className="text-3xl" />
          <p className="uppercase font-semibold text-lg">reservation</p>
        </NavLink>
        <NavLink
          className={"flex items-center gap-3 mt-5"}
          activeclassname="active"
          to={"/dashboard"}
        >
          <GiWallet className="text-3xl" />
          <p className="uppercase font-semibold text-lg">payment history</p>
        </NavLink>
        <NavLink
          className={"flex items-center gap-3 mt-5"}
          activeclassname="active"
          to={"/dashboard/cart"}
        >
          <IoMdCart className="text-3xl" />
          <p className="uppercase font-semibold text-lg">my cart</p>
        </NavLink>
        <NavLink
          className={"flex items-center gap-3 mt-5"}
          activeclassname="active"
          to={"/dashboard"}
        >
          <MdRateReview className="text-3xl" />
          <p className="uppercase font-semibold text-lg">add review</p>
        </NavLink>
        <NavLink
          className={"flex items-center gap-3 mt-5 mb-5"}
          activeclassname="active"
          to={"/dashboard"}
        >
          <FaCalendarCheck className="text-3xl" />
          <p className="uppercase font-semibold text-lg">my booking</p>
        </NavLink>
        <hr />
        <NavLink
          className={"flex items-center gap-3 mt-5"}
          activeclassname="active"
          to={"/dashboard"}
        >
          <IoMdHome className="text-3xl" />
          <p className="uppercase font-semibold text-lg">Home</p>
        </NavLink>
        <NavLink
          className={"flex items-center gap-3 mt-5"}
          activeclassname="active"
          to={"/dashboard"}
        >
          <TiThMenu className="text-3xl" />
          <p className="uppercase font-semibold text-lg">Menu</p>
        </NavLink>
        <NavLink
          className={"flex items-center gap-3 mt-5"}
          activeclassname="active"
          to={"/dashboard"}
        >
          <FaShoppingBag className="text-3xl" />
          <p className="uppercase font-semibold text-lg">Shop</p>
        </NavLink>
        <NavLink
          className={"flex items-center gap-3 mt-5"}
          activeclassname="active"
          to={"/dashboard"}
        >
          <MdEmail className="text-3xl" />
          <p className="uppercase font-semibold text-lg">Contact</p>
        </NavLink>
      </div>
      <div className=" flex flex-1 justify-center">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;
