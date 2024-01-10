import React from 'react'
import BannerArrow1 from "../../../public/svg/bannerArrow1.svg";
import BannerArrow2 from "../../../public/svg/bannerArrow2.svg";
import Link from 'next/link';
import Image from 'next/image';
import comma from "../../../public/svg/comma.svg";
import review from "../../../public/svg/review.svg";
const HeroBannerTwo = ({title, subtitle, imgtitle, imgSrc, imgPosition, person , heroImg}) => {
    return (
        <>
            <section className='flex flex-col items-center justify-center p-12 lg:p-2 md:p-1 lg:pb-16 md:pb-14 bg-black/90'>
                <div className='grid grid-cols-12 p-8 md:p-4 mt-16 xl:mt-8 lg:mt-6 sm:flex sm:flex-col sm:gap-4'>
                    <div className='col-span-6 sm:flex sm:flex-col sm:items-center sm:justify-center sm:relative'>
                        <div className='ml-4 sm:ml-0 sm:absolute sm:left-0 sm:bottom-96 xxs:bottom-[430px]'>
                            <Image src={BannerArrow2} className='w-20 sm:w-10' alt='arrow2' />
                        </div>
                        <div className='flex items-center justify-center my-4 '>
                            <h1 className=' text-white w-11/12 text-7xl font-extrabold xl:w-full xl:text-5xl lg:text-4xl md:text-3xl sm:w-full sm:text-center'>{title}</h1>
                        </div>
                        <div className='flex items-center justify-center mb-6'>
                            <p className='text-2xl w-11/12 text-white xl:w-full xl:text-xl lg:text-lg md:text-base sm:text-center my-4'>{subtitle}</p>
                        </div>
                        <div className='flex items-start justify-start gap-4 ml-8 xl:ml-0 lg:ml-0 md:ml-0 md:flex md:flex-col md:items-center md:justify-center '>
                            <Link href="/signup" className='bg-red-500 text-black hover:text-white py-4 px-10 text-xl xl:py-3 xl:px-7 md:text-lg  font-semibold rounded-lg'>Try Free For 14 Days</Link>
                            <Link href="/signup" className='border-solid border-2 border-red-500 hover:border-white text-red-500 hover:text-white py-3 px-10 text-xl md:text-lg md:py-2 md:px-14 xl:px-7 font-semibold rounded-lg'>Contact Sales</Link>
                        </div>
                        <div className='flex items-start justify-start mt-4 ml-52 xl:ml-40 md:ml-28 sm:ml-0'>
                            <p className='text-white text-lg md:text-base'>No credit card required</p>
                        </div>
                        <div className="absolute left-[50%] top-[85%] xl:top-[70%] sm:hidden">
                            <Image src={BannerArrow1} width={120} alt='arrow1' />
                        </div>

                    </div>
                    <div className='col-span-6 flex items-center justify-center xl:ml-36 sm:ml-0'>
                       <Image src={heroImg} className='w-[600px] xl:w-[400px]'/>
                    </div>
                </div>
                <div className='w-full flex items-center justify-center bg-white px-4 py-2 mt-16 mx-36 rounded-lg sm:hidden'>
                    <Image src={comma} alt='comma' className='relative w-40 bottom-10 md:bottom-8 right-4 xl:w-25 lg:w-20' />
                    <div>
                        <p className='text-2xl font-bold right-9 bottom-8 mx-4 xl:text-xl md:text-base xl:mx-0'>{imgtitle}</p>
                        <div className='flex items-start justify-start mt-4'>
                            <div className='flex gap-4'>
                                <Image src={imgSrc} alt='eric' className='rounded-3xl w-[50px] md:w-[30px] md:h-[30px]' />
                                <p><strong>{person} </strong> <br />{imgPosition}</p>
                            </div>
                            <div className='flex gap-4 items-end justify-end ml-[40rem] xl:ml-[20rem] lg:ml-[17rem] md:ml-[7rem]'>
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

export default HeroBannerTwo;