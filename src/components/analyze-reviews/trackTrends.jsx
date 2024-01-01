import Image from 'next/image'
import React from 'react'
import trends from "@/assets/images/banner/track-trends.webp";
const TrackTrends = () => {
    return (
        <>
            <section className='bg-white py-24 md:py-16 overflow-hidden'>
                <div className='max-w-[1200px] w-full my-0 mx-auto py-0 px-8'>
                    <div className='flex flex-col gap-16'>
                        <div className='flex flex-col items-center justify-center'>
                            <h1 className='text-6xl md:text-4xl font-extrabold text-black mx-auto text-center mb-4'>Track trends over time</h1>
                            <p className='max-w-[1000px] text-2xl md:text-lg my-0 mx-auto text-center' style={{ color: "rgb(43, 43, 89)" }}>See not only how you are doing today, but how your number of reviews and rating evolved over time. Being able to look at historic trends gives you a better understanding of how your activities impact your brand perception.</p>
                        </div>
                        <div className='flex items-center justify-center max-w-[1200px] max-h-[900px]'>
                            <Image src={trends} alt='track trends'/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TrackTrends