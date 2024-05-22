import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../../../hooks/useAxiousSecure";
import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import Swal from "sweetalert2";
import SectionHeader from "../../../Components/SectionHeader";
import { FaUser, FaUsers } from "react-icons/fa";
const AllUsers = () => {
  const {refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

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
        axiosSecure.delete(`/users?id=${item._id}`).then((res) => {
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

  const handleadmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          title: "Updated!",
          text: "Admin role Updated.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="bg-[#f6f6f6e8] w-full px-40 -mt-12">
      <SectionHeader
        subhadding={"---How many??---"}
        hadding={"MANAGE ALL USERS"}
      ></SectionHeader>

      <div className="bg-[#fff] p-10 rounded-lg">
        <div className="cinzel text-3xl font-bold flex items-center justify-between">
          <h1>Total users: {users.length}</h1>
          <button className="uppercase text-xl bg-[#D1A054] p-2 rounded-lg text-white">
            Pay
          </button>
        </div>

        <div className=" rounded-2xl bg-[#D1A054] mt-4 pt-[1px]">
          <table className="table rounded-3xl mt-4">
            <thead className=" rounded-2xl bg-[#D1A054] text-white text-[15px]">
              <tr className="">
                <th></th>
                <th>NAME</th>
                <th className="text-center">EMAIL</th>
                <th className="text-center ">ROLE</th>
                <th className="text-center  w-52">ACTION</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="overflow-x-auto  rounded-t-xl h-[55vh]">
          <table className="table">
            <tbody className="">
              {users.map((item, i) => (
                <tr key={i} className="">
                  <th>
                    <label>
                      <p>{i + 1}</p>
                    </label>
                  </th>
                  <td className="text-[#000000a0] text-[15px] w-80">
                    {item.name}
                  </td>
                  <td className="text-[#000000a0] text-[15px] w-72">
                    {item.email}
                  </td>
                  <th className="">
                    <div className="flex justify-center items-center">
                      <div
                        onClick={() => handleadmin(item)}
                        className="bg-[#B91C1C] btn p-3 rounded-lg"
                      >
                       {
                        item.role?  <FaUser className="text-2xl text-white" />
                        :  <FaUsers className="text-2xl text-white" />
                       }
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
  );
};

export default AllUsers;
