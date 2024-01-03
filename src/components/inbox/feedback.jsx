import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import feedback from "../../../public/svg/private-feedback.svg"
const Feedback = () => {
    return (
        <section className='py-24 bg-blue-400 md:py-16'>
            <div className='w-full my-0 py-0 px-8 md:px-4'>
                <div className='grid grid-cols-11'>
                    <div className='col-span-5 items-center pl-14 justify-center lg:pl-4 md:pl-2'>
                        <Image src={feedback} alt='2-way-sms'/>
                    </div>
                    <div className='col-span-6 items-start px-36 justify-start flex flex-col gap-4 md:px-6 md:gap-2'>
                        <h2 className='text-5xl font-bold text-left mb-3 text-black mx-auto lg:text-3xl md:text-2xl'>Improve your Reputation with Private Feedback</h2>
                        <p className='text-2xl text-left my-0 text-black/75 lg:text-xl md:text-base'>Did your customers leave you private feedback instead of a public review? Engage with them from the Inbox. Make sure that they are heard and turn their feedback into valuable insights.</p>
                        <Link href="/signup" className='mt-9 flex justify-center text-xl font-semibold py-3 px-8 rounded-md border-2 border-solid text-black hover:text-white' style={{ backgroundColor: "rgb(37, 232, 95)", borderColor: "rgb(37, 232, 95)" }}>Try Free</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Feedback