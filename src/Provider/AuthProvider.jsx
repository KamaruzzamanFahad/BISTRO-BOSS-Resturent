import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useState } from "react";
import app from "../fireconfig";
import { axiosSecure } from "../hooks/useAxiousSecure";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loooding, setlooding] = useState(true);

  const CreateUserByEmail = (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };
  const LoginWithEmail = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };
  const Upddateuserinfo = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: "none",
    });
  };
  const Logout = () => {
    signOut(auth);
  };

  onAuthStateChanged(auth, (user) => {
    setlooding(false);
    if (user) {
      console.log(user);
      setuser(user);
      axiosSecure.post("/jwt", user.email).then((res) => {
        localStorage.setItem("acces-token", res.data);
        console.log("token is ", res.data);
      });
    } else {
      console.log("logout");
      setuser(null);
      localStorage.removeItem('acces-token')
    }
  });

  const info = {
    CreateUserByEmail,
    LoginWithEmail,
    Upddateuserinfo,
    Logout,
    user,
    loooding,
  };

  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
