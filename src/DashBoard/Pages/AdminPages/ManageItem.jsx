import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../../../hooks/useAxiousSecure";
import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import Swal from "sweetalert2";
import SectionHeader from "../../../Components/SectionHeader";
import { FaEdit, FaUser, FaUsers } from "react-icons/fa";
import { useForm } from "react-hook-form";


const ManageItem = () => {
  const [edit, setedit] = useState(null);

  const { refetch, data: menus = [] } = useQuery({
    queryKey: ["menus"],
    queryFn: async () => {
      const res = await axiosSecure.get("/menu");
      return res.data;
    },
  });

  const handleedit = (item) => {
    setedit(item)

  }

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
        axiosSecure.delete(`/menu?id=${item._id}`)
          .then((res) => {
            console.log(res.data)
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your menu has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };






  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const updateitem = {
      name: data.recipename,
      recipe: data.detils,
      category: data.category,
      price: data.price,
    }
    console.log(updateitem)
    axiosSecure.patch(`/menu?id=${edit._id}`, updateitem)
      .then(res => {
        console.log(res.data)
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            title: "Updated!",
            text: "Your menu has been Updated.",
            icon: "success",
          });
        }
      })
  }


  return (
    <div className="w-full">
      {
        !edit ? <div className="bg-[#f6f6f6e8] w-full px-40 -mt-12">
          <SectionHeader
            subhadding={"---Hurry Up!---"}
            hadding={"MANAGE ALL ITEMS"}
          ></SectionHeader>

          <div className="bg-[#fff] p-10 rounded-lg">
            <div className="cinzel text-3xl font-bold flex items-center justify-between">
              <h1>Total items: {menus.length}</h1>
              <button className="uppercase text-xl bg-[#D1A054] p-2 rounded-lg text-white">
                Pay
              </button>
            </div>

            <div className=" rounded-2xl bg-[#D1A054] mt-4 pt-[1px]">
              <table className="table rounded-3xl mt-4">
                <thead className=" rounded-2xl bg-[#D1A054] text-white text-[15px]">
                  <tr className="">
                    <th></th>
                    <th>ITEM IMAGE</th>
                    <th>ITEM NAME</th>
                    <th className="text-center w-72">PRICE</th>
                    <th className="text-center w-20">ACTION</th>
                    <th className="text-center  w-40">ACTION</th>
                  </tr>
                </thead>
              </table>
            </div>
            <div className="overflow-x-auto  rounded-t-xl h-[55vh]">
              <table className="table">
                <tbody className="">
                  {menus.map((item, i) => (
                    <tr key={i} className="">
                      <th className=" w-20">
                        <label>
                          <p>{i + 1}</p>
                        </label>
                      </th>
                      <td className="text-[#000000a0] text-[15px]  w-64">
                        <img src={item.image} alt="" className="avatar w-16" />
                      </td>
                      <td className="text-[#000000a0] text-[15px]  w-96">
                        {item.name}
                      </td>
                      <td className="text-[#000000a0] text-[15px] w-40">
                        {item.price}
                      </td>

                      <th className="">
                        <div className="flex justify-start items-center">
                          <div
                            onClick={() => handleedit(item)}
                            className="bg-[#D1A054] btn p-3 rounded-lg"
                          >
                            <FaEdit className="text-2xl text-white" />
                          </div>
                        </div>
                      </th>
                      <th>
                        <div className="flex justify-center items-center">
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


          : <div className='-mt-10  w-full flex flex-col items-center'>
            <h1 className="text-4xl mt-20">UPDATE ITEM</h1>

            <form onSubmit={handleSubmit(onSubmit)} action="" className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 w-[70%] rou p-20 bg-[#e2e2e2a9]'>


              <div className='md:col-span-2'>
                <h2 className='mb-2 font-semibold'>Recipe name*</h2>
                <input {...register('recipename')} defaultValue={edit?.name} required className='w-full p-2 outline-none' type="text" placeholder='Enter Recipe name' />
              </div>
              <div>
                <h2 className='mb-2 font-semibold'>Category*</h2>
                <input {...register('category')} defaultValue={edit?.category} required className='w-full p-2 outline-none' type="text" placeholder='Category' />
              </div>
              <div>
                <h2 className='mb-2 font-semibold'>Price*</h2>
                <input {...register('price')} defaultValue={edit?.price} required className='w-full p-2 outline-none' type="text" placeholder='Price' />
              </div>
              <div className='md:col-span-2'>
                <h2 className='mb-2 font-semibold'>Recipe Details*</h2>
                <textarea {...register('detils')} defaultValue={edit?.recipe} required className='w-full p-2 outline-none' cols="30" rows="5" placeholder='Enter Recipe Details'></textarea>

              </div>
              <div className='flex justify-center items-center w-full col-span-2 '>
                <button type='submit' className='buttonbg flex p-3 rounded-sm  items-center justify-center text-white gap-2 font-bold text-xl'>Update Recipe Details
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
                    <rect width="16" height="16" fill="none" />
                    <path fill="currentColor" d="M3.5 0c-1.657 0-3 1.567-3 3.5c0 1.655.985 3.042 2.308 3.406l-.497 8.096A.931.931 0 0 0 3.25 16h.5c.55 0 .972-.449.939-.998l-.497-8.096C5.515 6.541 6.5 5.155 6.5 3.5c0-1.933-1.343-3.5-3-3.5m10.083 0l-.833 5h-.625l-.417-5h-.417l-.417 5h-.625l-.833-5h-.417v6.5a.5.5 0 0 0 .5.5h1.302l-.491 8.002a.931.931 0 0 0 .939.998h.5c.55 0 .972-.449.939-.998L12.197 7h1.302a.5.5 0 0 0 .5-.5V0h-.417z" />
                  </svg>
                </button>
              </div>
            </form>
          </div>


      }
    </div>
  );
};

export default ManageItem;
