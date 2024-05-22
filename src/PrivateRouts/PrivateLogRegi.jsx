import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const PrivateLogRegi = ({ children }) => {
  const pathname = useLocation();
  const { user, loooding } = useContext(AuthContext);
  if (loooding) {
    return <span className="loading loading-spinner text-error"></span>;
  } else if (!user) {
    return children;
  } else {
    if (pathname.state) {
      return <Navigate to={pathname.state}></Navigate>;
    } else {
      return <Navigate to={'/'}></Navigate>;
    }
  }
};

export default PrivateLogRegi;
