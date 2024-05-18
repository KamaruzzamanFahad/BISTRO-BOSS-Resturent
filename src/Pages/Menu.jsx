import React, { useEffect } from 'react';
import PageCover from '../Components/PageCover';
import SectionHeader from '../Components/SectionHeader';
import useMenu from '../hooks/useMenu';
import Menus from '../Components/Menus';
import coverimg from '../assets/menu/banner3.jpg'
import SectionCover from '../Components/SectionCover';
import desertimg from '../assets/menu/dessert-bg.jpeg';
import pizzaimg from '../assets/menu/pizza-bg.jpg';
import saladimg from '../assets/menu/salad-bg.jpg';
import soupimg from '../assets/menu/soup-bg.jpg';
import { Link } from 'react-router-dom';
const Menu = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const offred = useMenu("http://localhost:3000/menu", "offered")
    const dessert = useMenu("http://localhost:3000/menu", "dessert")
    const pizza = useMenu("http://localhost:3000/menu", "pizza")
    const salad = useMenu("http://localhost:3000/menu", "salad")
    const soup = useMenu("http://localhost:3000/menu", "soup")
    return (
        <div>
            <PageCover
                image={coverimg}
                title={'OUR MENU'}
                detil={"Would you like to try a dish?"}
            ></PageCover>
            <div className='px-[10%] mb-10'>
                <SectionHeader
                    subhadding={"---Don't miss---"}
                    hadding={"TODAY'S OFFER"}
                ></SectionHeader>

                <div className='grid grid-cols-2 gap-5'>
                    {
                        offred.map((item, i) => (
                            <Menus item={item}

                            ></Menus>
                        ))
                    }
                </div>
                <div className="flex justify-center items-center mb-10">
                    <Link to={'/shop'} state={0}>
                        <button className='my-7 bg-none border-b-2 hover:bg-black pt-2 hover:text-white border-black rounded-lg px-5 pb-2'>ORDER YOUR FAVOURITE FOOD</button>
                    </Link>
                </div>
            </div>
            <SectionCover
                image={desertimg}
                title={'DESSERTS'}
                detil={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
            ></SectionCover>

            <div className='px-[10%] mb-10 mt-20'>
                <div className='grid grid-cols-2 gap-5'>
                    {
                        dessert.map((item, i) => (
                            <Menus item={item}

                            ></Menus>
                        ))
                    }
                </div>
                <div className="flex justify-center items-center mb-10">
                    <Link to={'/shop'} state={3}>
                        <button className='my-7 bg-none border-b-2 hover:bg-black pt-2 hover:text-white border-black rounded-lg px-5 pb-2'>ORDER YOUR FAVOURITE FOOD</button>
                    </Link>
                </div>
            </div>

            <SectionCover
                image={pizzaimg}
                title={'PIZZA'}
                detil={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
            ></SectionCover>

            <div className='px-[10%] mb-10 mt-20'>
                <div className='grid grid-cols-2 gap-5'>
                    {
                        pizza.map((item, i) => (
                            <Menus item={item}

                            ></Menus>
                        ))
                    }
                </div>
                <div className="flex justify-center items-center mb-10">
                    <Link to={'/shop'} state={1}>
                        <button className='my-7 bg-none border-b-2 hover:bg-black pt-2 hover:text-white border-black rounded-lg px-5 pb-2'>ORDER YOUR FAVOURITE FOOD</button>
                    </Link>
                </div>
            </div>

            <SectionCover
                image={saladimg}
                title={'SALADS'}
                detil={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
            ></SectionCover>


            <div className='px-[10%] mb-10 mt-20'>
                <div className='grid grid-cols-2 gap-5'>
                    {
                        salad.map((item, i) => (
                            <Menus item={item}

                            ></Menus>
                        ))
                    }
                </div>
                <div className="flex justify-center items-center mb-10">
                    <Link to={'/shop'} state={0}>
                        <button className='my-7 bg-none border-b-2 hover:bg-black pt-2 hover:text-white border-black rounded-lg px-5 pb-2'>ORDER YOUR FAVOURITE FOOD</button>
                    </Link>
                </div>
            </div>


            <SectionCover
                image={soupimg}
                title={'SOUPS'}
                detil={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
            ></SectionCover>


            <div className='px-[10%] mb-10 mt-20'>
                <div className='grid grid-cols-2 gap-5'>
                    {
                        soup.map((item, i) => (
                            <Menus item={item}

                            ></Menus>
                        ))
                    }
                </div>
                <div className="flex justify-center items-center mb-10">
                    <Link to={'/shop'} state={2}>
                        <button className='my-7 bg-none border-b-2 hover:bg-black pt-2 hover:text-white border-black rounded-lg px-5 pb-2'>ORDER YOUR FAVOURITE FOOD</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Menu;