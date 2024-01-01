import React from 'react'
import breakdown from "@/assets/svg/breakdown.svg"
import Image from 'next/image';
import Link from 'next/link';
const SentimentSection = () => {
    return (
        <>
            <section className='bg-white py-24 md:py-16'>
                <div className='flex flex-col gap-12 md:gap-6'>
                    <div className='flex flex-col items-center justify-center gap-16'>
                        <div className='items-center justify-center'>
                            <h2 className='text-6xl md:text-4xl mb-5 font-bold text-black mx-auto text-center'>Breakdown by sentiment</h2>
                            <p className='text-2xl md:text-lg my-0 mx-auto text-center' style={{ color: "rgb(43, 43, 89)" }}>Analyze the breakdown of your reviews into positive ones (4-5 stars), neutral (3 stars) and negative (1-2 stars).</p>
                        </div>
                        <div>
                            <Image src={breakdown} alt='breakdown' />
                        </div>
                    </div>
                    <div className='flex items-center justify-center pt-20 md:pt-12'>
                        <Link href="/signup" className='text-2xl md:text-xl font-semibold md:font-medium py-2 px-8 rounded-md border-2 border-solid text-black hover:text-white bg-red-500' >Try Free</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SentimentSection;