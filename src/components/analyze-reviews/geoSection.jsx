import React from 'react'
import map from "@/assets/svg/geo-map-reviews.svg"
import Image from 'next/image'
const GeoSection = () => {
    return (
        <>
            <section className='bg-blue-400 py-24 md:py-16'>
                <div className='w-full items-center justify-center my-0 mx-auto py-0 px-8'>
                    <div className='flex flex-col gap-16'>
                        <div className='items-center justify-center'>
                            <p className='mb-6 text-center text-lg tracking-widest font-bold text-red-600'>COMING SOON</p>
                            <h1 className='text-6xl md:text-4xl mb-6 font-bold text-black mx-auto text-center'>Geo-mapping reviews</h1>
                            <p className='max-w-[1000px] text-2xl md:text-lg my-0 mx-auto text-center' style={{ color: "rgb(43, 43, 89)" }}>Our latest functionality will allow you to map your reviews geographically. Understand how you are performing at country, state and county level. Even better, you can have a head-to-head comparison with competing brands.</p>
                        </div>
                        <div className='items-center justify-center'>
                            <Image src={map} width={1500} alt='map'/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default GeoSection