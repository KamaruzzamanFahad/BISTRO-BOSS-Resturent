import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaUser, FaUsers } from "react-icons/fa";
import { axiosSecure } from "../../hooks/useAxiousSecure";
import SectionHeader from "../../Components/SectionHeader";
import { AuthContext } from "../../Provider/AuthProvider";
const PaymentHistry = () => {
  const { user } = useContext(AuthContext)
  const { refetch, data: payment = [] } = useQuery({
    queryKey: ["paymenthistry"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/paymenthistry?email=${user.email}`);
      console.log('pay quary ', res.data)
      return res.data;
    },
  });

  console.log(payment)

  return (
    <div className="bg-[#f6f6f6e8] w-full px-40 -mt-12">
      <SectionHeader
        subhadding={"---At a Glance!---"}
        hadding={"PAYMENT HISTORY"}
      ></SectionHeader>

      <div className="bg-[#fff] p-10 rounded-lg">
        <div className="cinzel text-3xl font-bold flex items-center justify-between">
          <h1>Total Payments: {payment.length}</h1>
        </div>

        <div className=" rounded-2xl bg-[#D1A054] mt-4 pt-[1px]">
          <table className="table rounded-3xl mt-4">
            <thead className=" rounded-2xl bg-[#D1A054] text-white text-[15px]">
              <tr className="">
                <th>EMAIL</th>
                <th className="text-center">Tranjectionid</th>
                <th className="text-center ">TOTAL PRICE</th>
                <th className="text-center  w-52">PAYENT DATE</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="overflow-x-auto  rounded-t-xl h-[55vh]">
          <table className="table">
            <tbody className="">
              {payment.map((item, i) => (
                <tr key={i} className="">
                  <td className="text-[#000000a0] text-[15px] w-96">
                    {item.email}
                  </td>
                  <td className="text-[#000000a0] text-[15px] w-[650px]">
                    {item.tranjectionid}
                  </td>
                  <td className="text-[#000000a0] text-[15px] w-80 ">
                    {item.price}
                  </td>
                  <td className="text-[#000000a0] text-[15px] w-80">
                    {item.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistry;
