import Link from 'next/link'
import React from 'react'

const Banner = () => {
    return (
        <div className='bg-gray-900 flex items-center justify-center p-24 xl:p-12 md:p-8 sm:p-6'>
            <div className='flex-col flex items-center justify-center'>
                <h1 className=' text-white font-bold text-6xl py-4 xl:text-5xl md:text-4xl md:text-center sm:text-2xl sm:font-extrabold xxs:text-3xl xxs:w-[300px]'>Ready to see Rocket Review Tool in action?</h1>
                <p className=' w-9/12 text-center text-white/75 py-4 text-2xl md:text-xl sm:text-lg md:text-center sm:w-full xxs:w-[300px]'>A complete toolkit for smart companies that want to make online reviews work for them.</p>
                <Link href="/signup" className='text-black bg-red-500 py-4 px-12 rounded-lg mt-2 text-xl md:text-lg md:py-2 md:px-8 sm:px-40 xxs:px-24 font-bold hover:text-white hover:shadow-md hover:shadow-white/50'>Try Free</Link>
            </div>
        </div>
    )
}

export default Banner