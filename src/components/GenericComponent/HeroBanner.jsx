'use client';
import Link from 'next/link'
import React from 'react'
import BannerArrow1 from "../../../public/svg/bannerArrow1.svg";
import BannerArrow2 from "../../../public/svg/bannerArrow2.svg";
import WebPage from "@/assets/images/banner/webpage.png";
import comma from "../../../public/svg/comma.svg";
import Eric from "@/assets/images/banner/Eric.webp";
import review from "../../../public/svg/review.svg";
import Image from 'next/image';
import samsung from "../../../public/svg/samsung.svg";
import crowncaliber from "../../../public/svg/crown&caliber.svg";
import keystone from "@/assets/images/BrandLogo/keystone.webp";
import localclarity from "../../../public/svg/localclarity.svg";
import pwc from "../../../public/svg/pwc.svg";
const brandLogo = [samsung, pwc, localclarity, crowncaliber, keystone];
import { usePathname } from 'next/navigation';
const HeroBanner = ({ title, titleRemain, title2, subtitle }) => {
    const router = usePathname();
    return (
        <>
            <div className='w-full flex flex-col items-center justify-center bg-black/90 p-10 2xl:p-2 xl:p-12 md:p-4 md:pb-12 sm:py-8 xs:py-8 xs:p-2 xxs:py-16'>
                <div className='flex items-center justify-center my-4 xs:my-0'>
                    <h1 className={`w-full text-white text-center text-7xl font-extrabold 2xl:text-6xl xl:text-6xl lg:5xl md:text-4xl sm:text-5xl sm:leading-[4rem] xs:text-4xl xxs:text-3xl ${router === "/smallBusiness" ? "md:w-10/12 md:pt-24 xxs:pt-16" : ""}`}>{title}<br /><span className='text-red-600'>{titleRemain}</span> <span>{title2}</span></h1>
                </div>
                <div className='flex items-center justify-center mb-6'>
                    <p className='text-2xl text-center text-white my-4 2xl:text-2xl 2xl:w-1/3 2xl:text-center xl:w-3/4 xl:text-xl md:text-base sm:w-full sm:text-base'>{subtitle}</p>
                </div>
                <div className='flex items-center justify-center sm:flex sm:flex-col'>
                    <Link href="/signup" className='bg-red-600 text-white hover:text-black py-4 px-10 text-xl xl:py-3 xxs:px-14 xl:px-7 xl:text-lg lg:text-base md:text-sm sm:text-base sm:px-20 font-semibold rounded-lg'>Fuel the rocket here</Link>
                    {/* <Link href="/signup" className='border-solid border-2 border-red-500 hover:border-white text-white hover:text-red-600 py-3 px-10 xxs:px-20 text-xl xl:py-2 xl:px-7 xl:text-lg lg:text-base md:text-sm sm:text-base sm:px-24 font-semibold rounded-lg'>Contact Sales</Link> */}
                </div>
                {/* <div className='flex items-center justify-center mt-4'>
                    <p className='text-white text-lg lg:text-base md:text-sm'>No credit card required</p>
                </div> */}
                <div className="absolute top-80 right-[6%] xl:w-28 xl:right-[3%] 2xl:right-[15%] md:hidden">
                    <Image src={BannerArrow1} alt='arrow1' />
                </div>
                <div className={`relative -left-[650px] 2xl:relative -2xl:bottom-3 2xl:left-48 xl:w-16 xl:-left-96 xs:w-12 xxs:w-9 ${router === '/smallBusiness' ? "md:bottom-[400px] sm:bottom-[520px] xs:bottom-[420px]" : "md:bottom-[350px] sm:bottom-[465px] xs:bottom-[400px]"} md:-left-52 xs:-left-44 xxs:-left-[125px]`}>
                    <Image src={BannerArrow2} alt='arrow2' />
                </div>
                <div className='flex items-center justify-center w-[1300px] xl:w-[700px] sm:w-[600px] xs:w-[400px] xxs:w-[300px] '>
                    <Image src={WebPage} alt='webpage' />
                </div>

                <div className='flex sm:flex sm:flex-col items-center justify-center bg-white px-4 py-2 mt-16 mx-36 rounded-lg xl:w-full xl:mx-24 xl:px-4 xl:py-6 lg:mx-8 lg:px-8 lg:py-5 xs:py-1'>
                    <Image src={comma} alt='comma' className='relative w-40 xl:w-24 md:w-20 sm:w-14 bottom-10 right-4 sm:bottom-8 xs:bottom-4 sm:right-64 xs:right-44 xxs:right-32' />
                    <div className='sm:flex sm:flex-col sm:gap-4'>
                        <p className='text-2xl font-bold right-9 bottom-8 xl:text-lg md:text-base'>"We have generated over 2,000 reviews for our clients using Rocket Review Tool."</p>
                        <div className='flex sm:flex sm:flex-col sm:gap-4 items-start justify-start mt-4'>
                            <div className='flex gap-4 xl:gap-2'>
                                <Image src={Eric} alt='eric' className='rounded-3xl w-12 xl:w-10 xl:h-10' />
                                <p className="w-full"><strong>Eric D </strong> <br />Founder & CEO, Small Business</p>
                            </div>
                            <div className='flex gap-4 items-end justify-end ml-[40rem] xl:ml-[25rem] lg:ml-[20rem] md:ml-[10rem] sm:ml-0'>
                                <p className='mb-2'>Reviewed on</p>
                                <Image src={review} alt='reviewsvg' className='w-10 xl:w-8' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className="flex items-center justify-center mt-24 mb-6 xs:mt-14">
                        <div className="text-center w-full">
                            <div className="flex items-center justify-center">
                                <div className="flex-1 border-t border-white"></div>
                                <div className="mx-4 text-white text-base sm:text-sm xs:text-xs uppercase font-semibold">1000+ COMPANIES TRUST Rocket Review Tool</div>
                                <div className="flex-1 border-t border-white"></div>
                            </div>
                        </div>
                    </div>


                    <div className='flex justify-center items-center my-2'>
                        {brandLogo.map((img, index) => (
                            <Image
                                key={index}
                                src={img} // Use the actual image source from the brandLogo array
                                alt="brand logo"
                                className="mx-2 rounded-md xl:mx-1 xl:w-52 lg:mx-auto lg:w-44 md:w-36 sm:w-28 xs:w-20 xxs:w-16"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroBanner