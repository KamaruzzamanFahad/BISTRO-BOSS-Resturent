import React, { useRef } from 'react';
import SectionHeader from '../../../Components/SectionHeader';
import { useForm } from 'react-hook-form';
import useAxiousPublic from '../../../hooks/useAxiousPublic';
import useAxiousSecure, { axiosSecure } from '../../../hooks/useAxiousSecure';
import Swal from 'sweetalert2';

const AddItems = () => {
    const ImgBBKey = import.meta.env.VITE_imgbbApi;
    const ImgBBApi = `https://api.imgbb.com/1/upload?key=${ImgBBKey}`
    const axiosPublic = useAxiousPublic()
    const axiosSecure = useAxiousSecure()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        // const menuitem = {
        //     name: data.RecipeName,
        //     recipe: data.RecipeDetails,
        //     category: data.Category,
        //     price: data.Price,
        //     // image: res.data.data.display_url,
        // }
        console.log(data)


        // console.log(data.image[0])
        // const Image = { image: data.image[0] };
        // const res = await axiosPublic.post(ImgBBApi, Image, {
        //     headers: {
        //         'content-type': 'multipart/form-data'
        //     }
        // })
        // console.log(res.data.data.display_url)
        // if (res.data.success) {

        //     const menures = await axiosSecure.post('/menu', menuitem)
        //     console.log(menures.data)
        //     if (menures.data.insertedId) {
        //         Swal.fire({
        //             title: "Good job!",
        //             text: "Menu Item is Added!",
        //             icon: "success"
        //         });
        //     }
        // }
    }
    const refar = useRef()
    console.log(refar)

    return (
        <div className='-mt-10  w-full flex flex-col items-center'>
            <SectionHeader
                subhadding={"---What's new?---"}
                hadding={'ADD AN ITEM'}
            ></SectionHeader>

            <form onSubmit={handleSubmit(onSubmit)} action="" className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 w-[70%] rou p-20 bg-[#e2e2e2a9]'>


                <div className='md:col-span-2'>
                    <h2 className='mb-2 font-semibold'>Recipe name*</h2>
                    <input {...register('recipename')} required className='w-full p-2 outline-none' type="text" placeholder='Enter Recipe name' />
                </div>
                <div>
                    <h2 className='mb-2 font-semibold'>Category*</h2>
                    <input {...register('category')} required className='w-full p-2 outline-none' type="text" placeholder='Category' />
                </div>
                <div>
                    <h2 className='mb-2 font-semibold'>Price*</h2>
                    <input {...register('Price')} required className='w-full p-2 outline-none' type="text" placeholder='Price' />
                </div>
                <div className='md:col-span-2'>
                    <h2 className='mb-2 font-semibold'>Recipe Details*</h2>
                    <textarea {...register('RecipeDetails')} required className='w-full p-2 outline-none' name="detils" cols="30" rows="5" placeholder='Enter Recipe Details'></textarea>

                </div>
                <div className='flex flex-col'>
                    {/* <input {...register('image')} required type="file" name="image" className='file-input text-red-500 bg-green-500 ' /> */}

                    <button type='button' className='' onClick={() => {
                        refar.current.click()
                        console.log(refar)
                    }}>chose</button>
                    <input ref={refar}  type="file" />


                    <button type='submit' className='buttonbg flex p-3 rounded-sm w-40 items-center justify-center text-white gap-2 font-bold text-xl'>Add Item
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
                            <rect width="16" height="16" fill="none" />
                            <path fill="currentColor" d="M3.5 0c-1.657 0-3 1.567-3 3.5c0 1.655.985 3.042 2.308 3.406l-.497 8.096A.931.931 0 0 0 3.25 16h.5c.55 0 .972-.449.939-.998l-.497-8.096C5.515 6.541 6.5 5.155 6.5 3.5c0-1.933-1.343-3.5-3-3.5m10.083 0l-.833 5h-.625l-.417-5h-.417l-.417 5h-.625l-.833-5h-.417v6.5a.5.5 0 0 0 .5.5h1.302l-.491 8.002a.931.931 0 0 0 .939.998h.5c.55 0 .972-.449.939-.998L12.197 7h1.302a.5.5 0 0 0 .5-.5V0h-.417z" />
                        </svg>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddItems;