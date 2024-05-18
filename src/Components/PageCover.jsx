import img from '../assets/menu/banner3.jpg';

const PageCover = ({image, title, detil}) => {


    return (
        <div style={{ backgroundImage: `url("${image}")` }} className=" bg-cover bg-no-repeat bg-fixed h-[800px] p-20 flex justify-center items-center ">
            <div className='text-white bg-black bg-opacity-50 p-36 px-96 cinzel'>
                <h1 className='text-6xl font-bold text-center'>{title}</h1>
                <p className='uppercase mt-3 font-semibold text-center'>{detil}</p>
            </div>
        </div>
    );
};

export default PageCover;