'use client';
import Image from 'next/image'
import React from 'react'
import { usePathname } from 'next/navigation';
const CampaignSection = ({ title, subtitle, imgSrc }) => {
    const router = usePathname();
    return (
        <>
            <div className='flex items-center justify-center md:py-20 bg-white '>
                <div className='grid grid-cols-12 md:flex md:flex-col md:items-center md:justify-center md:text-center'>
                    <div className='col-span-6 p-28 xl:p-16 md:p-6'>
                        <h1 className='text-5xl leading-[3.5rem] text-black font-bold xl:text-4xl xl:leading-9 md:text-3xl'>{title}</h1>
                        <p className='text-2xl text-black/75 font-normal py-6 xl:text-xl md:text-base md:mx-16'>{subtitle}</p>
                    </div>
                    <div className='col-span-6 m-6 md:m-0'>
                        {router === '/generate-reviews' ? (<Image src={imgSrc}  alt='invitation card' className='w-[500px] mt-40 md:mt-2'/>) : (<Image src={imgSrc} width={500} alt='invitation card' className='mt-16 md:mt-0'/>)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CampaignSection;