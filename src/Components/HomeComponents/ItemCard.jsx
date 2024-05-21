import React, { useContext } from "react";
import img from "../../assets/menu/salad-bg.jpg";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import useAxiousSecure from "../../hooks/useAxiousSecure";
import axios from "axios";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";
const ItemCard = (items) => {
  const menu = items.items;
  const { user } = useContext(AuthContext);
  const goto = useNavigate();
  const axiosSecure = useAxiousSecure();
  const [,refetch] = useCart()


  const handleclick = (item) => {
    if (user && user.email) {
      console.log(item, user.email);
      const data = {
        menuId: item._id,
        email: user.email,
        name: item.name,
        image: item.image,
        price: item.price,
      }
     
      axiosSecure.post('/carts',data)
      .then(res => {
        if(res.data.insertedId){
          Swal.fire({
            title: "Good job!",
            text: "Item Added to The cart!",
            icon: "success"
          });
          refetch()
        }
      })
    }
    else{
        goto('/login', {state: '/shop'})
    }
  };

  return (
    <div className="grid grid-cols-4 gap-10  w-full">
      {menu.map((item, i) => (
        <div key={i} className="text-center relative bg-[#F3F3F3]">
          <p className="bg-black text-white absolute p-2 px-5 right-3 top-3">
            ${item.price}
          </p>
          <img src={item.image} alt="" />
          <h2 className="font-bold my-2">{item.name}</h2>
          <p className="px-7">{item.recipe}</p>
          <div className="flex justify-center items-center mt-3 pb-4 ">
            <button
              onClick={() => handleclick(item)}
              className=" bg-[#E8E8E8] border-b-2 pt-2 hover:bg-[#111827] hover:text-[#BB8506]  border-[#BB8506] rounded-lg px-5 pb-2"
            >
              add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemCard;
