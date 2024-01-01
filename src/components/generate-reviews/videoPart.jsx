import Image from 'next/image'
import React from 'react'
import avatar from "@/assets/images/logo/avatar.webp";
import review from "@/assets/images/banner/review.svg";
import Link from 'next/link';
const VideoPart = () => {

    return (
        <div className='flex flex-col bg-white p-12 py-6'>
            <div className='grid items-start justify-start grid-cols-12 p-24 xl:p-12 md:p-8'>
                <div className='col-span-6'>
                    <div className='flex flex-col items-start justify-start p-16 mt-28 xl:p-10 xl:mt-20 md:p-6 md:mt-0'>
                        <h1 className='text-5xl text-black font-bold my-6 md:text-3xl'>Send review invites</h1>
                        <p className='text-3xl text-black/75 xl:text-2xl md:text-base '>Use our automatically generated landing page to request reviews from your current and former customers. You can easily add 85+ review sources. It takes just a few clicks and 30 seconds to leave a review.</p>
                    </div>
                </div>
                <div className='flex col-span-6'>
                    <div className='relative overflow-hidden m-12 rounded-2xl'>
                        <video src={"/videos/video1.mp4"} autoPlay loop muted />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoPart;
