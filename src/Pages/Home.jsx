
import Banner from '../Components/Banner';
import Swipe from '../Components/HomeComponents/Swipe';
import SectionHeader from '../Components/SectionHeader';
import bistoboss from '../assets/home/bistoboss.png'
import Menus from '../Components/Menus';
import React, { useEffect, useState } from 'react';
import calus from '../assets/home/callus.png'
import ItemCard from '../Components/HomeComponents/ItemCard';
import featchirdimg from '../assets/home/featured.jpg';
import Rating from 'react-rating';
import rattingfull from '../assets/home/ratingfull.png'
import rattingdark from '../assets/home/ratting.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Helmet } from 'react-helmet-async';
import useMenu from '../hooks/useMenu';

const Home = () => {
    const [reviews, setreviews] = useState([])
    const menu = useMenu("http://localhost:3000/menu",'popular')

    useEffect(() => {
        fetch('/reviews.json')
            .then(res => res.json())
            .then(data => {
                setreviews(data)
            })
    }, [])

    console.log(import.meta.env.VITE_projectId)

    return (
        <div >
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
            <div className='px-[10%]'>
                <SectionHeader
                    subhadding={'---From 11:00am to 10:00pm---'}
                    hadding={'ORDER ONLINE'}
                />
                <Swipe></Swipe>
                <img src={bistoboss} alt="" className='w-full mt-16' />
                <SectionHeader subhadding={'---Check it out---'}
                    hadding={'FROM OUR MENU'}
                ></SectionHeader>
                <div className='grid grid-cols-2 gap-5'>
                    {
                        menu.map((item, i) => (
                            <Menus item={item}

                            ></Menus>
                        ))
                    }
                </div>
                <div className="flex justify-center items-center">
                    <button className='my-7 bg-none border-b-2 border-black rounded-lg px-5 pb-2'>View Full  Menu</button>
                </div>

                <img className='w-full my-28' src={calus} alt="" />

                <SectionHeader
                    subhadding={'---Should Try---'}
                    hadding={'CHEF RECOMMENDS'}
                ></SectionHeader>

                <div>
                    <ItemCard
                    items={menu}
                    ></ItemCard>
                </div>


                <div className=' bgfeatcherimg bg-fixed  text-white mt-20'>
                    <div className='bg-black p-20 px-32 bg-opacity-50'>
                        <SectionHeader
                            subhadding={'---Check it out---'}
                            hadding={'FROM OUR MENU'}
                        ></SectionHeader>

                        <div className="flex gap-5 items-center">
                            <img src={featchirdimg} alt="" className='w-[500px]' />
                            <div>
                                <h2>March 20, 2023
                                    WHERE CAN I GET SOME?</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                                <div className="flex justify-start items-start">
                                    <button className='my-7 bg-none border-b-2 border-white hover:bg-black pt-2 rounded-lg px-5 pb-2'>Read More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <SectionHeader
                    subhadding={'---What Our Clients Say---'}
                    hadding={'TESTIMONIALS'}
                ></SectionHeader>

                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">


                    {
                        reviews.map((item, i) => (
                            <SwiperSlide>
                                <div className='flex flex-col justify-center items-center mb-40'>
                                    <Rating
                                        placeholderRating={item.rating}
                                        emptySymbol={<img src={rattingdark} />}
                                        placeholderSymbol={<img src={rattingfull} />}
                                        fullSymbol={<img src={rattingfull} className="icon" />}
                                    />
                                    <h1 className='text-9xl'>❝</h1>
                                    <p className='px-20 text-center'>{item.details}</p>
                                    <h1 className='font-bold text-xl text-yellow-500'>{item.name}</h1>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>




            </div>
        </div>
    );
};

export default Home;