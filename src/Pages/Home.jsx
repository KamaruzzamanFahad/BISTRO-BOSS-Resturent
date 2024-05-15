import React from 'react';
import Banner from '../Components/Banner';
import Swipe from '../Components/HomeComponents/Swipe';
import SectionHeader from '../Components/SectionHeader';

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <div className='px-[10%]'>
                <SectionHeader 
                subhadding={'---From 11:00am to 10:00pm---'}
                hadding={'ORDER ONLINE'}
                />
                <Swipe></Swipe>
            </div>
        </div>
    );
};

export default Home;