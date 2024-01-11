'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import isabella from "@/assets/images/banner/isabela.webp";
import richard from "@/assets/images/banner/richard.jpeg";
import amazon from "../../../public/svg/amazon.svg";
import starfull from "../../../public/svg/star-full.svg"
import star from "../../../public/svg/star.svg";
import triangle from "../../../public/svg/triangle.svg";
import whiteStar from "../../../public/svg/whiteStar.svg";
import facebook from "../../../public/svg/facebook.svg";
import google from "../../../public/svg/google.svg";
import comma from "../../../public/svg/comma.svg";
import Link from 'next/link';
const Widgets = () => {
    const [activeTab, setActiveTab] = useState('Slider');
    const [activeIndex, setActiveIndex] = useState(2); // Set the initial active index

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? 4 : prevIndex - 1));
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex === 4 ? 0 : prevIndex + 1));
    };

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    const index = 2;
    return (
        <section className='bg-white flex items-center justify-center pt-28 pb-24 xxs:pt-20 xxs:pb-16'>
            <div className='max-w-[1170px] w-full my-0 mx-auto box-border flex flex-col'>
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex flex-col'>
                        <h1 className='text-7xl md:text-5xl xxs:text-4xl mb-16 xxs:mb-10 text-black leading-5 mx-auto text-center font-bold'>Widgets</h1>
                        <p className='max-w-[550px] text-2xl md:text-xl xxs:text-lg leading-6 text-black/75 my-0 mx-auto text-center'>Widgets are one of the most powerful way to showcase your reviews.</p>
                    </div>
                    <div className="border-2 border-gray-200 dark:border-gray-700 mt-10 mr-[180px] md:mr-[50px] xs:mr-0">
                        <ul
                            className="flex flex-wrap sm:flex-col sm:px-44 xs:px-36 xxs:px-20 text-2xl md:text-base font-bold text-center"
                            id="default-tab"
                            data-tabs-toggle="#default-tab-content"
                            role="tablist"
                        >
                            <li className="mx-4 md:mx-2" role="presentation">
                                <button
                                    className={`inline-block p-5 border-b-4 rounded-t-lg ${activeTab === 'Slider'
                                        ? 'border-blue-500 text-blue-500'
                                        : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
                                        }`}
                                    id="Slider-tab"
                                    data-tabs-target="#Slider"
                                    type="button"
                                    role="tab"
                                    aria-controls="Slider"
                                    aria-selected={activeTab === 'Slider'}
                                    onClick={() => handleTabClick('Slider')}
                                >
                                    Slider
                                </button>
                            </li>
                            <li className="mx-4 md:mx-2" role="presentation">
                                <button
                                    className={`inline-block p-5 border-b-4 rounded-t-lg ${activeTab === 'Carousel'
                                        ? 'border-blue-500 text-blue-500'
                                        : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
                                        }`}
                                    id="Carousel-tab"
                                    data-tabs-target="#Carousel"
                                    type="button"
                                    role="tab"
                                    aria-controls="Carousel"
                                    aria-selected={activeTab === 'Carousel'}
                                    onClick={() => handleTabClick('Carousel')}
                                >
                                    Carousel
                                </button>
                            </li>

                            <li className="mx-4 md:mx-2" role="presentation">
                                <button
                                    className={`inline-block p-5 border-b-4 rounded-t-lg ${activeTab === 'Grid'
                                        ? 'border-blue-500 text-blue-500'
                                        : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
                                        }`}
                                    id="Grid-tab"
                                    data-tabs-target="#Grid"
                                    type="button"
                                    role="tab"
                                    aria-controls="Grid"
                                    aria-selected={activeTab === 'Grid'}
                                    onClick={() => handleTabClick('Grid')}
                                >
                                    Grid
                                </button>
                            </li>

                            <li className="mx-4 md:mx-2" role="presentation">
                                <button
                                    className={`inline-block p-5 border-b-4 rounded-t-lg ${activeTab === 'Quotes'
                                        ? 'border-blue-500 text-blue-500'
                                        : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
                                        }`}
                                    id="Quotes-tab"
                                    data-tabs-target="#Quotes"
                                    type="button"
                                    role="tab"
                                    aria-controls="Quotes"
                                    aria-selected={activeTab === 'Quotes'}
                                    onClick={() => handleTabClick('Quotes')}
                                >
                                    Quotes
                                </button>
                            </li>

                            <li className="mx-4 md:mx-2" role="presentation">
                                <button
                                    className={`inline-block p-5 border-b-4 rounded-t-lg ${activeTab === 'List'
                                        ? 'border-blue-500 text-blue-500'
                                        : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
                                        }`}
                                    id="List-tab"
                                    data-tabs-target="#List"
                                    type="button"
                                    role="tab"
                                    aria-controls="List"
                                    aria-selected={activeTab === 'List'}
                                    onClick={() => handleTabClick('List')}
                                >
                                    List
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div id="default-tab-content" className='w-full'>
                        <div
                            className={`${activeTab === 'Slider' ? 'block' : 'hidden'
                                } p-20 rounded-lg bg-white border-2 xs:p-6 xxs:p-4`}
                            id="Slider"
                            role="tabpanel"
                            aria-labelledby="Slider-tab"
                        >
                            <div
                                id="animation-carousel"
                                className="flex gap-4 w-full mb-32 items-center justify-center"
                                data-carousel="static"
                            >
                                {/* Carousel wrapper */}
                                <div className="w-[400px] flex flex-col overflow-hidden rounded-lg sm:hidden">
                                    <div className='flex gap-4'>
                                        <div className='relative'>
                                            <div className='w-20 md:w-16 overflow-hidden rounded-md'>
                                                <Image src={isabella} alt='isabella' />
                                            </div>
                                            <div className='absolute w-8 md:w-7 p-1 bg-white rounded-md -bottom-[2px] md:bottom-1 -right-[11px]'>
                                                <Image src={amazon} alt='amazon' />
                                            </div>
                                        </div>
                                        <div className='flex flex-col ml-2 mt-0'>
                                            <h1 className='mb-2 md:mb-1 text-lg md:text-base font-semibold text-black'>
                                                Isabel Black
                                            </h1>
                                            <div className='flex flex-start gap-4 md:flex md:flex-col md:gap-2'>
                                                <div className='flex gap-1'>
                                                    <Image src={starfull} width={16} height={16} alt='star-full' />
                                                    <Image src={starfull} width={16} height={16} alt='star-full' />
                                                    <Image src={starfull} width={16} height={16} alt='star-full' />
                                                    <Image src={star} width={16} height={16} alt='star-full' />
                                                    <Image src={star} width={16} height={16} alt='star-full' />

                                                </div>
                                                <p className='md:text-sm'>15 May 2015</p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr style={{ margin: "20px 0px 20px", borderTop: "1px solid rgb(230, 230, 234)" }} />
                                    <p className='text-start m-0 text-lg md:text-base' style={{ color: "rgb(43, 43, 89)" }}>
                                        While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun and excitement it provides, others may experience gambling as an addictive.
                                    </p>

                                </div>

                                <div className="w-[400px] flex flex-col overflow-hidden rounded-lg">
                                    <div className='flex gap-4'>
                                        <div className='relative'>
                                            <div className='w-20 md:w-16 overflow-hidden rounded-md'>
                                                <Image src={richard} alt='richard' />
                                            </div>
                                            <div className='absolute w-8 md:w-7 p-1 bg-white rounded-md -bottom-[2px] md:bottom-1 -right-[11px]'>
                                                <Image src={amazon} alt='amazon' />
                                            </div>
                                        </div>
                                        <div className='flex flex-col ml-2 mt-0'>
                                            <h1 className='mb-2 text-lg md:text-base md:mb-1 font-semibold text-black'>
                                                Richard Maxwell
                                            </h1>
                                            <div className='flex flex-start gap-4 md:flex md:flex-col md:gap-2'>
                                                <div className='flex gap-1'>
                                                    <Image src={starfull} width={16} height={16} alt='star-full' />
                                                    <Image src={starfull} width={16} height={16} alt='star-full' />
                                                    <Image src={starfull} width={16} height={16} alt='star-full' />
                                                    <Image src={star} width={16} height={16} alt='star-full' />
                                                    <Image src={star} width={16} height={16} alt='star-full' />

                                                </div>
                                                <p className='md:text-sm'>23 Nov 2023</p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr style={{ margin: "20px 0px 20px", borderTop: "1px solid rgb(230, 230, 234)" }} />
                                    <p className='text-start m-0 text-lg md:text-base' style={{ color: "rgb(43, 43, 89)" }}>
                                        In recent years people have realized the importance of proper diet and exercise, and recent surveys show that over the last 20 years people are eating better and working,</p>

                                </div>
                                {/* Slider controls */}
                                <button
                                    type="button"
                                    className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                                    onClick={handlePrev}
                                    data-carousel-prev=""
                                >

                                </button>
                                <button
                                    type="button"
                                    className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                                    onClick={handleNext}
                                    data-carousel-next=""
                                >

                                </button>
                            </div>
                        </div>
                        <div
                            className={`${activeTab === 'Carousel' ? 'block' : 'hidden'
                                } p-4 rounded-lg bg-white border-2 md:p-0`}
                            id="Carousel"
                            role="tabpanel"
                            aria-labelledby="Carousel-tab"
                        >
                            <div className='w-full mb-12 flex items-center justify-center gap-4 py-16 px-6'>
                                <div className='w-[400px] flex flex-col items-center justify-center gap-4'>
                                    <div className='flex gap-1'>
                                        <Image src={starfull} width={16} height={16} alt='star-full' />
                                        <Image src={starfull} width={16} height={16} alt='star-full' />
                                        <Image src={starfull} width={16} height={16} alt='star-full' />
                                        <Image src={star} width={16} height={16} alt='star-full' />
                                        <Image src={star} width={16} height={16} alt='star-full' />
                                    </div>
                                    <p className='text-center m-0 text-lg md:text-base' style={{ color: "rgb(43, 43, 89)" }}>
                                        In recent years people have realized the importance of proper diet and exercise, and recent surveys show that over the last 20 years people are eating better and working,
                                    </p>
                                    <div className='relative'>
                                        <div className='w-30 md:w-20 overflow-hidden rounded-md'>
                                            <Image src={isabella} alt='isabella' />
                                        </div>
                                        <div className='absolute w-12 md:w-9 p-1 bg-white rounded-md -bottom-[11px] -right-[13px]'>
                                            <Image src={amazon} alt='amazon' />
                                        </div>
                                    </div>
                                    <div>
                                        <h1 className='mb-2 text-xl md:text-xl md:text-center font-bold text-black'>
                                            Isabel Black
                                        </h1>
                                        <p className='md:text-sm md:text-center'>23 Nov 2020</p>
                                    </div>

                                </div>
                                <div className='w-[400px] flex flex-col items-center justify-center gap-4 sm:hidden'>
                                    <div className='flex gap-1'>
                                        <Image src={starfull} width={16} height={16} alt='star-full' />
                                        <Image src={starfull} width={16} height={16} alt='star-full' />
                                        <Image src={starfull} width={16} height={16} alt='star-full' />
                                        <Image src={star} width={16} height={16} alt='star-full' />
                                        <Image src={star} width={16} height={16} alt='star-full' />
                                    </div>
                                    <p className='text-center m-0 text-lg md:text-base' style={{ color: "rgb(43, 43, 89)" }}>
                                        In recent years people have realized the importance of proper diet and exercise, and recent surveys show that over the last 20 years people are eating better and working,
                                    </p>
                                    <div className='relative'>
                                        <div className='w-30 md:w-20 overflow-hidden rounded-md'>
                                            <Image src={richard} alt='richard' />
                                        </div>
                                        <div className='absolute w-12 md:w-9 p-1 bg-white rounded-md -bottom-[11px] -right-[13px]'>
                                            <Image src={amazon} alt='amazon' />
                                        </div>
                                    </div>

                                    <div>
                                        <h1 className='mb-2 text-xl md:text-lg font-bold text-black'>
                                            Isabel Black
                                        </h1>
                                        <p className='md:text-sm md:text-center'>23 Nov 2020</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div
                            className={`${activeTab === 'Grid' ? 'block' : 'hidden'
                                } p-4 md:p-0 rounded-lg bg-white border-2`}
                            id="Grid"
                            role="tabpanel"
                            aria-labelledby="Grid-tab"
                        >
                            <div className='flex flex-col items-center justify-center gap-4 md:gap-2 w-full my-6'>
                                <div className='flex bg-white m-5 p-5 md:m-2 border-2 border-solid rounded-md mx-2' style={{ borderColor: "rgb(230, 230, 234)" }}>
                                    <div className='flex flex-col items-start justify-start'>
                                        <p className='m-0 text-5xl md:text-3xl font-semibold'>4.7</p>
                                        <p className='text-xl md:text-base md:my-2 text-black/75 my-4'>Based on 4070 reviews</p>
                                        <div className='flex gap-1'>
                                            <Image src={starfull} width={16} height={16} alt='star-full' />
                                            <Image src={starfull} width={16} height={16} alt='star-full' />
                                            <Image src={starfull} width={16} height={16} alt='star-full' />
                                            <Image src={star} width={16} height={16} alt='star-full' />
                                            <Image src={star} width={16} height={16} alt='star-full' />
                                        </div>
                                    </div>
                                    <div className='flex gap-2 items-end my-6 justify-end w-[500px] sm:w-[300px] xxs:hidden '>
                                        <Image src={triangle} alt='triangle' className='md:w-12'/>
                                        <Image src={whiteStar} alt='whiteStar' className='md:w-12'/>
                                        <Image src={facebook} alt='facebook' className='md:w-12'/>
                                        <Image src={google} alt='google' className='md:w-12'/>
                                        <Image src={amazon} alt='amazon' className='md:w-12' />
                                    </div>
                                </div>
                                <div className='flex items-center justify-center sm:flex sm:flex-col sm:gap-6 gap-4 mx-2'>
                                    <div className='flex flex-col gap-6 md:gap-4 items-center justify-normal w-[300px]'>
                                        <Image src={isabella} alt='isabel'  className='md:w-24'/>
                                        <p className='text-center m-0 text-lg md:text-base' style={{ color: "rgb(43, 43, 89)" }}>
                                            While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun and excitement it provides, others may experience gambling as an addictive.
                                        </p>
                                        <div className='flex gap-1'>
                                            <Image src={starfull} width={16} height={16} alt='star-full' />
                                            <Image src={starfull} width={16} height={16} alt='star-full' />
                                            <Image src={starfull} width={16} height={16} alt='star-full' />
                                            <Image src={star} width={16} height={16} alt='star-full' />
                                            <Image src={star} width={16} height={16} alt='star-full' />
                                        </div>
                                        <p>15 May 2015</p>
                                        <h1 className='mb-2 text-2xl md:text-xl font-bold text-black'>
                                            Isabel Black
                                        </h1>
                                        <div className='w-10 md:w-8 rounded-full overflow-hidden'>
                                            <Image src={amazon} alt='amazon' />
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-6 md:gap-4 items-center justify-normal w-[300px]'>
                                        <Image src={richard} alt='richard' className='md:w-24'/>
                                        <p className='text-center m-0 text-lg md:text-base' style={{ color: "rgb(43, 43, 89)" }}>
                                            In recent years people have realized the importance of proper diet and exercise, and recent surveys show that over the last 20 years people are eating better and working,
                                        </p>
                                        <div className='flex gap-1'>
                                            <Image src={starfull} width={16} height={16} alt='star-full' />
                                            <Image src={starfull} width={16} height={16} alt='star-full' />
                                            <Image src={starfull} width={16} height={16} alt='star-full' />
                                            <Image src={star} width={16} height={16} alt='star-full' />
                                            <Image src={star} width={16} height={16} alt='star-full' />
                                        </div>
                                        <p>15 May 2015</p>
                                        <h1 className='mb-2 text-2xl md:text-xl font-bold text-black'>
                                            Richard Maxwell
                                        </h1>
                                        <div className='w-10 md:w-8 rounded-full overflow-hidden'>
                                            <Image src={triangle} alt='triangle' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className={`${activeTab === 'Quotes' ? 'block' : 'hidden'
                                } p-4 rounded-lg xxs:p-2 bg-white border-2`}
                            id="Quotes"
                            role="tabpanel"
                            aria-labelledby="Quotes-tab"
                        >
                            <div className='flex flex-col gap-6 my-16 mx-8 xxs:mx-0'>
                                <div className='flex flex-col gap-4 mx-8 mb-14 '>
                                    <Image src={comma} alt='comma' width={70} />
                                    <p className='text-left m-[0.5rem 0px 1.5rem] text-lg text-black/75'>While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun and excitement it provides, others may experience gambling as an addictive.</p>
                                    <div className='flex gap-4'>
                                        <div className='relative'>
                                            <div className='w-20 overflow-hidden rounded-md'>
                                                <Image src={isabella} alt='isabella' />
                                            </div>

                                        </div>
                                        <div className='flex flex-col ml-2 mt-0'>
                                            <div className='flex gap-3'>
                                                <h1 className='mb-2 text-lg font-semibold text-black'>
                                                    Isabel Black
                                                </h1>
                                                <div className='w-6  rounded-md'>
                                                    <Image src={amazon} alt='amazon' />
                                                </div>
                                            </div>
                                            <div className='flex flex-start gap-4 xxs:gap-8'>
                                                <div className='flex gap-1'>
                                                    <Image src={starfull} width={16} height={16} alt='star-full' />
                                                    <Image src={starfull} width={16} height={16} alt='star-full' />
                                                    <Image src={starfull} width={16} height={16} alt='star-full' />
                                                    <Image src={star} width={16} height={16} alt='star-full' />
                                                    <Image src={star} width={16} height={16} alt='star-full' />

                                                </div>
                                                <p>15 May 2015</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-4 mx-8 mb-14'>
                                    <Image src={comma} alt='comma' width={70} />
                                    <p className='text-start m-0 text-lg' style={{ color: "rgb(43, 43, 89)" }}>
                                        In recent years people have realized the importance of proper diet and exercise, and recent surveys show that over the last 20 years people are eating better and working,
                                    </p>
                                    <div className='flex gap-4'>
                                        <div className='relative'>
                                            <div className='w-20 overflow-hidden rounded-md'>
                                                <Image src={richard} alt='richard' />
                                            </div>

                                        </div>
                                        <div className='flex flex-col ml-2 mt-0'>
                                            <div className='flex gap-3'>
                                                <h1 className='mb-2 text-lg font-semibold text-black xxs:text-sm'>
                                                    Richard Maxwell
                                                </h1>
                                                <div className='w-6  rounded-md'>
                                                    <Image src={triangle} alt='triangle' />
                                                </div>
                                            </div>
                                            <div className='flex flex-start gap-4 xxs:gap-8'>
                                                <div className='flex gap-1'>
                                                    <Image src={starfull} width={16} height={16} alt='star-full' />
                                                    <Image src={starfull} width={16} height={16} alt='star-full' />
                                                    <Image src={starfull} width={16} height={16} alt='star-full' />
                                                    <Image src={star} width={16} height={16} alt='star-full' />
                                                    <Image src={star} width={16} height={16} alt='star-full' />

                                                </div>
                                                <p>23 Nov 2022</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className={`${activeTab === 'List' ? 'block' : 'hidden'
                                } p-4 rounded-lg bg-white border-2`}
                            id="List"
                            role="tabpanel"
                            aria-labelledby="List-tab"
                        >
                            <div className='flex flex-col my-16'>
                                <div className='flex flex-col gap-4 mb-14 mx-10'>
                                    <div className='flex gap-4'>
                                        <div className='relative'>
                                            <div className='w-20 overflow-hidden rounded-md'>
                                                <Image src={isabella} alt='isabella' />
                                            </div>
                                            <div className='absolute w-8 p-1 bg-white rounded-md -bottom-[2px] -right-[11px]'>
                                                <Image src={amazon} alt='amazon' />
                                            </div>
                                        </div>
                                        <div className='flex flex-col ml-2 mt-0'>
                                            <h1 className='mb-2 text-lg font-semibold text-black'>
                                                Isabel Black
                                            </h1>
                                            <div className='flex flex-start gap-4 xxs:flex-col'>
                                                <div className='flex gap-1'>
                                                    <Image src={starfull} width={16} height={16} alt='star-full' />
                                                    <Image src={starfull} width={16} height={16} alt='star-full' />
                                                    <Image src={starfull} width={16} height={16} alt='star-full' />
                                                    <Image src={star} width={16} height={16} alt='star-full' />
                                                    <Image src={star} width={16} height={16} alt='star-full' />

                                                </div>
                                                <p>15 May 2015</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className='text-left m-[0.5rem 0px 1.5rem] text-lg text-black/75'>While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun and excitement it provides, others may experience gambling as an addictive.</p>
                                </div>
                                <div className='flex flex-col gap-4 mb-14 mx-10'>
                                    <div className='flex gap-4'>
                                        <div className='relative'>
                                            <div className='w-20 overflow-hidden rounded-md'>
                                                <Image src={richard} alt='richard' />
                                            </div>
                                            <div className='absolute w-8 p-1 bg-white rounded-md -bottom-[2px] xxs:bottom-7 -right-[11px]'>
                                                <Image src={triangle} alt='triangle' />
                                            </div>
                                        </div>
                                        <div className='flex flex-col ml-2 mt-0'>
                                            <h1 className='mb-2 text-lg font-semibold text-black'>
                                                Richard Maxwell
                                            </h1>
                                            <div className='flex flex-start gap-4 xxs:flex-col'>
                                                <div className='flex gap-1'>
                                                    <Image src={starfull} width={16} height={16} alt='star-full' />
                                                    <Image src={starfull} width={16} height={16} alt='star-full' />
                                                    <Image src={starfull} width={16} height={16} alt='star-full' />
                                                    <Image src={star} width={16} height={16} alt='star-full' />
                                                    <Image src={star} width={16} height={16} alt='star-full' />

                                                </div>
                                                <p>23 Nov 2022</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className='text-start m-0 text-lg' style={{ color: "rgb(43, 43, 89)" }}>
                                        In recent years people have realized the importance of proper diet and exercise, and recent surveys show that over the last 20 years people are eating better and working,
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pt-20 flex items-center justify-center sm:hidden'>
                    <Link href="/signup" className='text-2xl md:text-xl font-semibold md:font-medium py-4 md:py-2 px-12 md:px-10 rounded-md border-solid border-2 text-black hover:text-white bg-red-500 '>Try Free</Link>
                </div>
            </div>
        </section>
    )
}

export default Widgets