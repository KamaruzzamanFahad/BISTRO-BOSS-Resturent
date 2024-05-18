

const Menus = ({ item }) => {
    const { _id, name, image, price, recipe } = item;

    return (


        <div key={_id} className='flex gap-5'>
            <img style={{ borderRadius: '0px 200px 200px 200px' }} src={image} alt="" className='w-[70px]' />
            <div className='w-full'>
                <div className='flex justify-between w-full'>
                    <h2 className='w-full uppercase'>{`${name}  ------------------`}</h2>
                    <span className='text-yellow-600'>{`$${price}`}</span>
                </div>
                <p className='mr-10'>{recipe}</p>
            </div>
        </div>



    );
};

export default Menus;