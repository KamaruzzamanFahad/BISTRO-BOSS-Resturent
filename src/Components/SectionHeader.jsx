import React from 'react';

const SectionHeader = ({subhadding, hadding}) => {
    return (
        <div className='flex flex-col justify-center items-center mb-7 mt-20'>
            <i className=' text-yellow-600'>{subhadding}</i>
            <div className='h-1 w-96 my-4 bg-[#E8E8E8]'></div>
            <h1 className='text-3xl'>{hadding}</h1>
            <div className='h-1 w-96 my-4 bg-[#E8E8E8]'></div>
        </div>
    );
};

export default SectionHeader;