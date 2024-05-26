import React, { useContext } from "react";
import useAdmin from "../../hooks/useAdmin";
import { AuthContext } from "../../Provider/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";

const PrivateAdmin = ({ children }) => {
    const back = useNavigate()
  const { user, loooding } = useContext(AuthContext);
  const [Admina, refetch, isPending] = useAdmin();

  if (loooding || isPending) {
    return <span className="loading loading-spinner text-error"></span>;
  } else if (Admina == true) {
    return children;
  } else {
    back(-1);
  }
};

export default PrivateAdmin;
