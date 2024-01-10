import Link from 'next/link'
import React from 'react'
import sms from "../../../public/svg/2-way-sms.svg"
import Image from 'next/image'

const CustomerLoyalty = () => {
    return (
        <>
            <section className='py-24 md:py-16'>
                <div className='w-full my-0 py-0 px-8 lg:px-6 md:px-4 xxs:px-0'>
                    <div className='grid grid-cols-11 sm:flex sm:flex-col sm:items-center sm:justify-center sm:gap-8'>
                        <div className='col-span-6 items-start sm:items-center px-24 md:px-14 xxs:px-6 justify-start sm:justify-center flex flex-col gap-4 md:gap-2'>
                            <h2 className='text-5xl md:text-2xl font-bold text-left mb-3 text-black mx-auto lg:text-3xl sm:text-center'>Increase customer loyalty with 2-way SMS</h2>
                            <p className='text-2xl text-left my-0 text-black/75 lg:text-xl md:text-base sm:text-center'>SMS campaigns for review invitations is one of the most used Rocket Review Tool features. Now we are taking this a step forward: you will be able to see all the customer replies to SMS and reply back. Engaging customers in 1-on-1 conversations will result in increased customer loyalty and reputation.</p>
                            <Link href="/signup" className='mt-9 bg-red-500 md:mt-6 flex justify-center text-xl md:text-base font-semibold py-3 px-8 sm:px-32 xxs:px-16 rounded-md border-2 border-solid text-black hover:text-white'>Try Free</Link>
                        </div>
                        <div className='col-span-5 items-center justify-center'>
                            <Image src={sms} alt='2-way-sms' width={600} height={500}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CustomerLoyalty;