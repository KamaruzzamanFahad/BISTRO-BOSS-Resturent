import img from '../assets/menu/banner3.jpg';

const SectionCover = ({image, title, detil}) => {


    return (
        <div style={{ backgroundImage: `url("${image}")` }} className=" bg-cover bg-no-repeat bg-fixed p-32 flex justify-center items-center ">
            <div className='text-white bg-black bg-opacity-50 py-36 w-[80%]  cinzel'>
                <h1 className='text-4xl font-semibold text-center'>{title}</h1>
                <p className='mt-3 text-center px-20'>{detil}</p>
            </div>
        </div>
    );
};

export default SectionCover;