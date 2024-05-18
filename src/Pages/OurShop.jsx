import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import PageCover from '../Components/PageCover';
import pagecover from '../assets/shop/banner2.jpg'
import useMenu from '../hooks/useMenu';
import ItemCard from '../Components/HomeComponents/ItemCard';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
const OurShop = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const { state } = useLocation();
    console.log(state)
    const [index, setindex] = useState(state);

    const drinks = useMenu("http://localhost:3000/menu", "offered");
    const dessert = useMenu("http://localhost:3000/menu", "dessert");
    const pizza = useMenu("http://localhost:3000/menu", "pizza");
    const salad = useMenu("http://localhost:3000/menu", "salad");
    const soup = useMenu("http://localhost:3000/menu", "soup");
    return (

        <div>
            <PageCover
                image={pagecover}
                title={'OUR SHOP'}
                detil={'Would you like to try a dish?'}
            ></PageCover>

            <div className='flex justify-center items-center my-20 px-[10%]'>
                <Tabs defaultIndex={index}>
                    <TabList className={'uppercase flex justify-center items-center mb-8'}>
                        <Tab>Salad</Tab>
                        <Tab>pizza</Tab>
                        <Tab>soups</Tab>
                        <Tab>desserts</Tab>
                        <Tab>drinks</Tab>
                    </TabList>

                    <TabPanel>
                        <ItemCard
                            items={salad}
                        ></ItemCard>
                    </TabPanel>
                    <TabPanel>
                        <ItemCard
                            items={pizza}
                        ></ItemCard>
                    </TabPanel>
                    <TabPanel>
                        <ItemCard
                            items={soup}
                        ></ItemCard>
                    </TabPanel>
                    <TabPanel>
                        <ItemCard
                            items={dessert}
                        ></ItemCard>
                    </TabPanel>
                    <TabPanel>
                        <ItemCard
                            items={drinks}
                        ></ItemCard>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default OurShop;