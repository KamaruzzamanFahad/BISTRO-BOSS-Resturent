import React from "react";
import SectionHeader from "../../Components/SectionHeader";
import { RiDeleteBinLine } from "react-icons/ri";
import useCart from "../../hooks/useCart";
import useAxiousSecure, { axiosSecure } from "../../hooks/useAxiousSecure";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCart();
  const totalprice = cart.reduce((total, item) => total + item.price, 0);

  const handledelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts?id=${item._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="bg-[#f6f6f6e8] w-full px-40 -mt-12">
      <SectionHeader
        subhadding={"---My Cart---"}
        hadding={"WANNA ADD MORE?"}
      ></SectionHeader>

      <div className="bg-[#fff] p-10 rounded-lg">
        <div className="cinzel text-3xl font-bold flex items-center justify-between">
          <h1>Total orders: {cart.length}</h1>
          <h1>total price: ${totalprice}</h1>

          <Link to={'/dashboard/pay'}>
            <button className="uppercase text-xl bg-[#D1A054] p-2 rounded-lg text-white">
              Pay
            </button>
          </Link>
        </div>

        <div className=" rounded-2xl bg-[#D1A054] mt-4 pt-[1px]">
          <table className="table rounded-3xl mt-4">
            <thead className=" rounded-2xl bg-[#D1A054] text-white text-[15px]">
              <tr>
                <th>
                  <label>
                    <th></th>
                  </label>
                </th>
                <th>ITEM IMAGE</th>
                <th>ITEM NAME</th>
                <th>PRICE</th>
                <th>ACTION</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="overflow-x-auto  rounded-t-xl h-[55vh]">
          <table className="table">
            <tbody className="">
              {cart.map((item, i) => (
                <tr key={i}>
                  <th>
                    <label>
                      <p>{i + 1}</p>
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-square w-16 h-16">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-[#000000a0] text-[15px]">{item.name}</td>
                  <td className="text-[#000000a0] text-[15px]">
                    ${item.price}
                  </td>
                  <th>
                    <div className="flex justify-start items-center">
                      <div
                        onClick={() => handledelete(item)}
                        className="bg-[#B91C1C] btn p-3 rounded-lg"
                      >
                        <RiDeleteBinLine className="text-2xl text-white" />
                      </div>
                    </div>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
