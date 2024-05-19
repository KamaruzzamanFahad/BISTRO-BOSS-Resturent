import bg from '../assets/others/logregibg.png'
import img from '../assets/others/logregiimg.png'

const Login = () => {
    const bgimg = {
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover', // Adjust as needed
        backgroundRepeat: 'no-repeat', // Adjust as needed
        height: '100vh', // Optional for full viewport height
    };

    return (
        <div style={bgimg} className='flex justify-center items-center px-52 py-28'>
            <div style={bgimg, { 'box-shadow': '10px 10px 10px 10px rgba(0, 0, 0, 0.25)' }} className=' flex p-10 px-40 w-full h-full'>

                <div className='w-[50%] flex justify-center items-center '>
                    <img src={img} alt="" className='w-[500px]' />
                </div>
                <div className='w-[50%] ml-20'>
                    <h1 className='text-center text-2xl font-bold mb-10 mr-44'>Login</h1>
                    <form action="">
                        <div className='flex flex-col'>
                            <label htmlFor="" className='mb-2 font-semibold'>Email</label>
                            <input type="email" name="email" placeholder='Type here' id="" className='w-96 p-4 outline-none rounded-md border-[1px]' />
                        </div>
                        <div className='flex flex-col mt-3'>
                            <label htmlFor="" className='mb-2 font-semibold'>Password</label>
                            <input type="password" name="Password" placeholder='Enter your password' id="" className='w-96 p-4 outline-none rounded-md border-[1px]' />
                        </div>
                        <div className='flex flex-col mt-3'>
                            <label htmlFor="" className='mb-2 font-semibold'>Captcha</label>
                            <input type="text" name="" defaultValue={'U A g l u o '} id="" className='w-96 p-4 outline-none rounded-md border-[1px]' />
                            <label htmlFor="" className='font-semibold text-blue-500'>Reload Captcha</label>
                        </div>
                        <div className='flex flex-col mt-3'>
                            <label htmlFor="" className='mb-2 font-semibold'></label>
                            <input type="text" name="captcha" placeholder='Type here' id="" className='w-96 p-4 outline-none rounded-md border-[1px]' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;