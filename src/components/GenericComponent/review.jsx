import Image from 'next/image'
import React from 'react'

const Review = ({ title, subtitle, imgSrc }) => {
    return (
        <>
            <div className='flex items-center justify-center bg-blue-400 p-24 xl:p-12 lg:p-10 md:p-7 xxs:p-4'>
                <div className='grid grid-cols-12 sm:flex sm:flex-col sm:text-center'>
                    <div className='col-span-6 p-28 xl:p-12 lg:p-10 xxs:p-4'>
                        <h1 className='text-4xl text-black font-extrabold lg:text-3xl md:text-2xl'>{title}</h1>
                        <p className='text-3xl text-black/75 font-normal py-6 lg:text-2xl md:text-xl sm:text-lg'>{subtitle}</p>
                    </div>
                    <div className='col-span-6'>
                        <Image src={imgSrc} alt='invitation card' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Review;