import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";

const PrivateRout = ({ children }) => {
  const { user, loooding } = useContext(AuthContext);
  const goto = useNavigate();
  if (loooding) {
    return <span className="loading loading-spinner text-error"></span>;
  } else if (user) {
    return children;
  } else {
    goto("/login");
    return <Navigate to={"/login"}></Navigate>; 
  }
};

export default PrivateRout;
