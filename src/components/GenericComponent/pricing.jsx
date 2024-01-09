'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import check from "../../../public/svg/check.svg";
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const Pricing = ({ title, imgSrc, imgPosition, person }) => {
    const [toggle, setToggle] = useState(false);

    const router = usePathname();
    const toggleHandler = () => {
        setToggle(prevToggle =>
            !prevToggle
        );
    }
    return (
        <>
            <section className={`pb-12  px-24 md:px-16 sm:px-10 ${router === "/pricing" ? "bg-black/90" : "bg-blue-400 "}`}>
                <div className='relative grid grid-cols-12 py-12 col-start-4 mb-4'>
                    <div className='flex items-center justify-center gap-6 col-span-4 col-start-5 xl:col-span-6 lg:col-span-8 lg:col-start-3 xl:col-start-4 bg-red-500/90 p-12 xl:p-8 md:p-4 rounded-lg'>
                        <p className='text-xl font-medium text-white sm:text-sm'>Billed monthly</p>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" defaultValue="" className="sr-only peer w-12 h-12" checked={toggle} onChange={toggleHandler} />
                            <div className="w-20 h-11 bg-black peer-focus:outline-none   rounded-full peer  dark:bg-black peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-black after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-blue-500 after:border-blue-500 after:border after:rounded-full after:h-9 after:w-9 after:transition-all dark:border-gray-600 peer-checked:bg-blue-400" />
                        </label>
                        <p className='text-xl font-medium text-white sm:text-sm'>Billed yearly</p>
                        <div className='absolute right-[33rem] mt-24 xl:right-72 lg:right-52 md:right-32 sm:right-12 sm:bottom-7'>
                            <p className='bg-white  transform-tag px-5 py-3 rounded-lg text-black text-base sm:text-sm font-bold '>Save up to 20%</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='container'>
                        <div className='flex items-center justify-center'>
                            <div className='w-1/2 bg-white rounded-lg flex flex-col p-10 border border-gray-300 md:p-2 md:w-3/4 md:py-12 sm:w-[65%]'>
                                <h1 className='flex justify-center text-4xl text-black font-bold py-6'>Large</h1>
                                <p className='flex justify-center text-blue-600 text-base bg-blue-50 mx-16 py-2 rounded-lg font-bold lg:mx-6 lg:px-4 md:px-2 md:mx-24 sm:mx-12'>IDEAL FOR LARGER TEAMS</p>
                                <div className='flex justify-center py-12 sm:py-8'>
                                    <p className='text-black/90 text-6xl font-bold sm:text-3xl'>${toggle ? '79' : '99'}</p>
                                    <p className='text-black/75 text-xl font-bold sm:text-base'>/month</p>
                                </div>
                                <p className='flex justify-center text-lg text-black/75 mb-6'>{toggle ? '$950 billed annually' : 'Billed monthly'}</p>
                                <Link href='/signup' className="flex justify-center text-black text-xl font-bold bg-red-500 py-3 px-28 md:px-12 md:mx-24 sm:mx-8 hover:text-white rounded-lg" >Try Free</Link>
                                <p className=' flex justify-center text-lg py-4'>or see <Link href="/smallBusiness" className='pl-2 text-blue-400 hover:text-black'>more features</Link></p>
                                <ul className='flex flex-col mt-5 space-y-2 md:mx-24 sm:mx-2'>
                                    <li className='flex items-center text-lg leading-9 font-medium'>
                                        <Image src={check} className='w-4 h-4 mr-2' alt='Check Icon' />
                                        Unlimited review profiles
                                    </li>
                                    <li className='flex items-center text-lg leading-9 font-medium'>
                                        <Image src={check} className='w-4 h-4 mr-2' alt='Check Icon' />
                                        5 business locations
                                    </li>
                                    <li className='flex items-center text-lg leading-9 font-medium'>
                                        <Image src={check} className='w-4 h-4 mr-2' alt='Check Icon' />
                                        5,000 email & SMS invites
                                    </li>
                                    <li className='flex items-center text-lg leading-9 font-medium'>
                                        <Image src={check} className='w-4 h-4 mr-2' alt='Check Icon' />
                                        5 users
                                    </li>
                                    <li className='flex items-center text-lg leading-9 font-medium'>
                                        <Image src={check} className='w-4 h-4 mr-2' alt='Check Icon' />
                                        20 video reviews
                                    </li>
                                </ul>
                            </div>
                        </div>


                    </div>
                    <div className="py-5 mt-10 mb-16 mx-20 px-6 lg:mx-auto lg:px-2 xl:mx-auto xl:py-2 bg-gray-200 rounded-lg sm:hidden">
                        <div className="flex flex-col items-start justify-start p-4">
                            <h1 className="text-black text-2xl font-bold lg:text-xl">Risk Free</h1>
                            <p className="text-black/75 text-xl my-4 lg:text-lg lg:my-2">At the end of your trial, you may downgrade to our basic<strong> Free Plan</strong></p>
                            <p className="text-black/75 text-base my-4 lg:my-2">2 review profiles, 100 email invites, 1 user, 2 video reviews.</p>
                        </div>
                    </div>

                </div>

            </section>

        </>
    )
}

export default Pricing