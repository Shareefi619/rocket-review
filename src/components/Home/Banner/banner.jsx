import Link from 'next/link'
import React from 'react'

const Banner = () => {
    return (
        <div className='bg-gray-900 flex items-center justify-center p-24 xl:p-12 md:p-8 sm:p-6'>
            <div className='flex-col flex items-center justify-center gap-10'>
                <h1 className=' text-white font-bold text-6xl py-4 xl:text-5xl md:text-4xl md:text-center sm:text-2xl sm:font-extrabold xxs:text-3xl w-3/4 text-center xxs:w-[300px]'>Start today and make reviews work for you!</h1>
                {/* <p className=' w-9/12 text-center text-white/75 py-4 text-2xl md:text-xl sm:text-lg md:text-center sm:w-full xxs:w-[300px]'>A complete toolkit for smart companies that want to make online reviews work for them.</p> */}
                <Link href="/signup" className='text-white bg-red-600 py-4 px-12 rounded-lg mt-2 text-xl md:text-lg md:py-2 md:px-8 sm:px-40 xxs:px-20 font-bold hover:text-black hover:shadow-md hover:shadow-white/50'>Try for free today</Link>
            </div>
        </div>
    )
}

export default Banner