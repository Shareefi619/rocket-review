import React from 'react'
import BannerArrow1 from "@/assets/images/banner/BannerArrow1.svg";
import BannerArrow2 from "@/assets/images/banner/BannerArrow2.svg";
import Link from 'next/link';
import Image from 'next/image';
import comma from "@/assets/images/banner/comma.svg";
import Eric from "@/assets/images/banner/Eric.webp";
import review from "@/assets/images/banner/review.svg";
import thumbsUp from '@/assets/svg/thumbs-up.svg';
import thumbsDown from "@/assets/svg/thumbs-down.svg";
const HeroBanner = () => {
    return (
        <>
            <section className='flex flex-col items-center justify-center p-12 xl:p-10 md:p-2 md:pb-20 bg-black/90'>
                <div className='grid grid-cols-12 p-8 mt-16 xl:p-4 xl:mt-0 md:p-0 '>
                    <div className='col-span-6'>
                        <div className='ml-4 xl:ml-2 md:ml-0'>
                            <Image src={BannerArrow2} className='w-20 md:w-14' alt='arrow2' />
                        </div>
                        <div className='flex items-center justify-center my-4 xl:my-0 '>
                            <h1 className=' text-white w-10/12 text-center text-7xl xl:text-5xl md:text-4xl md:text-left font-extrabold'>Generate reviews <br /> on auto-pilot</h1>
                        </div>
                        <div className='flex items-center justify-center mb-6 xl:mx-8'>
                            <p className='text-2xl text-white my-4 xl:text-xl md:text-lg'>Online reviews are core to your brand awareness. Get more reviews faster with Reviewshake on 85+ websites, boost your social proof and increase your revenue.</p>
                        </div>
                        <div className='flex items-center justify-center md:flex md:flex-col md:items-center md:justify-center gap-4 md:gap-4 '>
                            <Link href="/signup" className='bg-red-500 text-black hover:text-white py-4 px-10 text-xl md:text-base md:py-2 md:px-6 xl:py-2 xl:px-8 xl:text-lg font-semibold rounded-lg'>Try Free For 14 Days</Link>
                            <Link href="/signup" className='border-solid border-2 border-red-500 hover:border-white text-red-500 hover:text-white py-3 px-10 text-xl md:text-base md:py-2 md:px-12 xl:py-2 xl:px-8 xl:text-lg font-semibold rounded-lg'>Contact Sales</Link>
                        </div>
                        <div className='flex items-center justify-center mt-4'>
                            <p className='text-white text-lg md:text-sm'>No credit card required</p>
                        </div>
                        <div className="absolute left-[50%] top-[85%] xl:top-2/4 md:hidden">
                            <Image src={BannerArrow1} width={120} alt='arrow1' />
                        </div>

                    </div>
                    <div className='col-span-6 flex items-center justify-center gap-4 xl:ml-32 md:ml-4'>
                        <div className=' w-[200px] h-[230px] md:w-[150px] md:h-[180px] text-center bg-white p-6 border-[0.97px] border-solid border-gray-500 rounded-md'>
                            <Image src={thumbsUp} alt='thumbsUp' className='ml-9 w-[73px] h-[72px] md:ml-6 md:w-[50px] md:h-[50px]' />
                            <p className='text-2xl mt-5 md:text-base'>I had a good experience</p>
                        </div>
                        <div className=' w-[200px] h-[230px] md:w-[150px] md:h-[180px] text-center bg-white p-6 border-[0.97px] border-solid border-gray-500 rounded-md'>
                            <Image src={thumbsDown} alt='thumbsUp' className='ml-9 w-[73px] h-[72px] md:ml-6 md:w-[50px] md:h-[50px]' />
                            <p className='text-2xl mt-5 md:text-base'>I had a bad experience</p>
                        </div>
                    </div>
                </div>
                <div className='w-full flex items-center justify-center bg-white px-4 py-2 mt-16 mx-36 xl:px-2 md:px-0 md:mx-0 rounded-lg md:hidden'>
                    <Image src={comma} alt='comma' className='relative w-40 bottom-10 right-4 xl:w-20 md:w-14' />
                    <div>
                        <p className='text-2xl font-bold right-9 bottom-8 xl:text-lg'>"We have generated over 2,000 reviews for our clients using Reviewshake."</p>
                        <div className='flex items-start justify-start mt-4'>
                            <div className='flex gap-4'>
                                <Image src={Eric} alt='eric' className='w-12 lg:w-10 lg:h-10 rounded-3xl' />
                                <p><strong>Eric D </strong> <br />Founder & CEO, Small Business</p>
                            </div>
                            <div className='flex gap-4 items-end justify-end ml-[40rem] xl:ml-96 md:ml-[0rem]'>
                                <p className='mb-2'>Reviewed on</p>
                                <Image src={review} alt='reviewsvg' width={40} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroBanner