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
    } else {
      console.log("logout");
      setuser(null);
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
