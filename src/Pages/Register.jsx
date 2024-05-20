import { Link } from "react-router-dom";
import bg from "../assets/others/logregibg.png";
import img from "../assets/others/logregiimg.png";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const { CreateUserByEmail,Upddateuserinfo } = useContext(AuthContext);
  const bgimg = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover", // Adjust as needed
    backgroundRepeat: "no-repeat", // Adjust as needed
    height: "100vh", // Optional for full viewport height
  };

  const handlesubmit = (event) => {
    event.preventDefault();
    const from = event.target;

    const name = from.name.value;
    const email = from.email.value;
    const Password = from.Password.value;

    CreateUserByEmail(email, Password)
      .then((result) => { 
        console.log(result);
        Upddateuserinfo(name)
        .then(res => console.log('update', res))
        .catch(error => console.log('not updated', error))
    })
      .catch((error) => { console.log(error);});

  };

  return (
    <div
      style={bgimg}
      className="flex  justify-center items-center px-52 py-28"
    >
      <div
        style={
          (bgimg, { "box-shadow": "10px 10px 10px 10px rgba(0, 0, 0, 0.25)" })
        }
        className=" flex p-10 px-40 w-full h-full flex-row-reverse"
      >
        <div className="w-[50%] flex justify-center items-center ">
          <img src={img} alt="" className="w-[500px]" />
        </div>
        <div className="w-[50%] ml-20">
          <h1 className="text-center text-2xl font-bold mb-2 mr-44">Sign Up</h1>
          <form onSubmit={handlesubmit}>
            <div className="flex flex-col mt-3">
              <label htmlFor="" className="mb-2 font-semibold">
                Name
              </label>
              <input
                required
                type="text"
                name="name"
                placeholder="Type here"
                id=""
                className="w-96 p-4 outline-none rounded-md border-[1px]"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="mb-2 font-semibold">
                Email
              </label>
              <input
                required
                type="email"
                name="email"
                placeholder="Type here"
                id=""
                className="w-96 p-4 outline-none rounded-md border-[1px]"
              />
            </div>
            <div className="flex flex-col mt-3">
              <label htmlFor="" className="mb-2 font-semibold">
                Password
              </label>
              <input
                required
                type="password"
                name="Password"
                placeholder="Enter your password"
                id=""
                className="w-96 p-4 outline-none rounded-md border-[1px]"
              />
            </div>
            <button className="bg-[#d19f54cb] w-96 p-4 mt-4 rounded-md font-bold text-white">
              Sign In
            </button>
            <div>
              <p className="mt-3 text-center w-96 text-[#d19f54cb]">
                Already registered?{" "}
                <Link to={"/login"}>
                  {" "}
                  <span className="font-bold"> Go to log in</span>
                </Link>
              </p>
              <p className="w-96 text-center mt-2 font-semibold text-[#0404047e] mb-4">
                Or sign in with
              </p>
              <div className="w-96 flex justify-center items-center">
                <img src="/signin.png" alt="" className="w-48" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
