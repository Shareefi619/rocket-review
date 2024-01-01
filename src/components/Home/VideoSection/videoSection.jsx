import Image from 'next/image'
import React from 'react'
import avatar from "@/assets/images/logo/avatar.webp";
import review from "@/assets/images/banner/review.svg";
import Link from 'next/link';
const VideoSection = () => {

    return (
        <div className='flex flex-col bg-blue-500/90 p-12 py-10 xl:p-6 xl:py-8'>
            <h1 className='flex flex-col items-center justify-start text-black text-6xl font-bold mb-4 pt-20 xl:text-5xl md:text-3xl xl:mb-2'>Generate reviews on auto-pilot</h1>
            <div className='grid items-start justify-start grid-cols-12 p-24 xl:p-12'>
                <div className='col-span-6'>
                    <div className='flex items-start justify-start'>
                        <Image src={avatar} alt='avatar' width={50} />
                        <div>
                            <p className='ml-2 text-lg'><strong>Jed H</strong><br />Owner, Digital Agencies</p>
                            <p className=' text-black/80 font-serif font-normal text-3xl my-10 xl:text-2xl md:text-xl xl:my-6'>"What I really like is that the system follows up (not aggressively) but gentle reminders for the customers to leave the review. It is WAY more effective than a single text, phone call, or email. It also stays on brand and is consistent with what the dealership wants."</p>
                            <div className='flex gap-4 mb-4'>
                                <p className='mt-2 xl:mt-1'>Reviewed on </p>
                                <Image src={review} alt='review' className='w-10 xl:w-8' />
                            </div>
                            <div className='flex gap-4 mt-14 xl:mt-8'>
                                <p className='text-7xl font-extrabold xl:text-5xl text-red-600'><strong>25%</strong> </p>
                                <p className='text-black/80 text-lg xl:text-base'>more influence of reviews on <br />conversions than in 2019</p>
                            </div>
                            <div className='flex mt-8 px-4'>
                                <Link href="/generate-reviews" className='border-[3px] border-red-500 hover:border-black rounded-lg py-3 px-10 text-2xl xl:py-2 xl:px-7 xl:text-xl font-medium text-red-500 hover:text-black'>Find out more &#x2192;</Link>
                            </div>
                        </div>
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

export default VideoSection;
