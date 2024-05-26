import { Link, useLocation } from 'react-router-dom';
import bg from '../assets/others/logregibg.png'
import img from '../assets/others/logregiimg.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';


const Login = () => {
    const [disable,setdesable] = useState(true)
    const {LoginWithEmail} = useContext(AuthContext)
    // const returnpath = useLocation();

    const bgimg = {
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover', // Adjust as needed
        backgroundRepeat: 'no-repeat', // Adjust as needed
        height: '100vh', // Optional for full viewport height
    };

    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])


    const handlesubmit = (event) => {
        event.preventDefault();
        const from = event.target;

        const email = from.email.value;
        const Password = from.Password.value;

        LoginWithEmail(email,Password)
        .then(res => console.log(res))
        .catch(error => console.log(error))
        
    }


    const handlechange  = (event)=> {
        const uservalue = event.target.value;
        if(uservalue.length >= 6 && validateCaptcha(uservalue)){
            setdesable(false)
        }else{
            setdesable(true)
        }
        
    }

    return (
        <div style={bgimg} className='flex justify-center items-center px-52 py-28'>
            <div style={bgimg, { 'box-shadow': '10px 10px 10px 10px rgba(0, 0, 0, 0.25)' }} className=' flex p-10 px-40 w-full h-full'>

                <div className='w-[50%] flex justify-center items-center '>
                    <img src={img} alt="" className='w-[500px]' />
                </div>
                <div className='w-[50%] ml-20'>
                    <h1 className='text-center text-2xl font-bold mb-2 mr-44'>Login</h1>
                    <form onSubmit={handlesubmit}>
                        <div className='flex flex-col'>
                            <label htmlFor="" className='mb-2 font-semibold'>Email</label>
                            <input required type="email" name="email" placeholder='Type here' id="" className='w-96 p-4 outline-none rounded-md border-[1px]' />
                        </div>
                        <div className='flex flex-col mt-3'>
                            <label htmlFor="" className='mb-2 font-semibold'>Password</label>
                            <input required type="password" name="Password" placeholder='Enter your password' id="" className='w-96 p-4 outline-none rounded-md border-[1px]' />
                        </div>
                        <div className='flex flex-col mt-3'>
                            <label htmlFor="" className='mb-2 font-semibold'>Captcha</label>
                            <LoadCanvasTemplate />
                        </div>
                        <div className='flex flex-col mt-3'>
                            <label htmlFor="" className='mb-2 font-semibold'></label>
                            <input onChange={handlechange} type="text" name="captcha" placeholder='Type here' id="" className='w-96 p-4 outline-none rounded-md border-[1px]' />
                        </div>
                        <button /*disabled={disable}*/ className='bg-[#d19f54cb] w-96 p-4 mt-4 rounded-md font-bold text-white'>Sign In</button>
                        <div>
                            <p className='mt-3 text-center w-96 text-[#d19f54cb]'>New here?<Link to={'/register'}> <span className='font-bold'> Create a New Account</span></Link></p>
                            <p className='w-96 text-center mt-2 font-semibold text-[#0404047e] mb-2'>Or sign in with</p>
                            <div className='w-96 flex justify-center items-center'>
                                <img src="/signin.png" alt="" className='w-48' />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;