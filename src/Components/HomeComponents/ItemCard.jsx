import React from 'react';
import img from '../../assets/menu/salad-bg.jpg'
const ItemCard = (items) => {
    const menu = items.items;
    return (

        <div className='grid grid-cols-4 gap-10  w-full'>
            {
                menu.map((item) => (
                    <div className='text-center relative bg-[#F3F3F3]'>
                        <p className='bg-black text-white absolute p-2 px-5 right-3 top-3'>${item.price}</p>
                        <img src={item.image} alt="" />
                        <h2 className='font-bold my-2'>{item.name}</h2>
                        <p className='px-7'>{item.recipe}</p>
                        <div className="flex justify-center items-center mt-3 pb-4 ">
                            <button className=' bg-[#E8E8E8] border-b-2 pt-2 hover:bg-[#111827] hover:text-[#BB8506]  border-[#BB8506] rounded-lg px-5 pb-2'>add to cart</button>
                        </div>
                    </div>
                ))
            }
        </div>

    );
};

export default ItemCard;