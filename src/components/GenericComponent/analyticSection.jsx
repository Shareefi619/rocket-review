'use client';
import Image from 'next/image'
import React from 'react'
import { usePathname } from 'next/navigation'
const AnalyticSection = ({ title, subtitle, imgSrc }) => {
    const router = usePathname();
    return (
        <>
            <div className='flex items-center justify-center bg-white p-24 xl:p-12 lg:p-10 md:p-7 sm:p-6 xxs:p-2'>
                <div className='grid grid-cols-12 sm:flex sm:flex-col'>
                    <div className='col-span-6 p-28 xl:p-14 lg:p-10 md:p-7'>
                        <h1 className='text-4xl text-black font-extrabold xl:text-3xl lg:text-2xl md:text-xl sm:text-2xl sm:text-center'>{title}</h1>
                        <p className='text-3xl text-black/75 font-normal py-6 xl:text-2xl lg:text-xl md:text-lg sm:text-center'>{subtitle}</p>
                    </div>
                    <div className='col-span-6'>
                        {
                            router === "/analyze-reviews" ? (<Image src={imgSrc} width={400} height={378} alt='invitation card' />) : 
                            (router === '/generate-reviews' ? (<Image src={imgSrc} alt='invitation card' className='w-[500px] xl:w-[400px] lg:w-[350px] md:w-[300px]' />) : 
                            (<Image src={imgSrc} width={700} alt='invitation card' />))

                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default AnalyticSection;