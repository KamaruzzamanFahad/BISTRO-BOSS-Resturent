import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import app from "../fireconfig";



export const AuthContext = createContext(null)
const auth = getAuth(app)


const AuthProvider = ({children}) => {

    const CreateUserByEmail = (email,pass)=>{
      return createUserWithEmailAndPassword(auth,email,pass);
    }
    const LoginWithEmail = (email,pass) => {
        return signInWithEmailAndPassword(auth,email,pass)
    }


    onAuthStateChanged(auth, (user) =>{
        if(user){
            console.log(user)
        }
        else{
            console.log('logout')
        }
    })



    const info = {
        CreateUserByEmail,
        LoginWithEmail,
        
    }


    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;