import Image from 'next/image';
import React from 'react'
import reviewShake from "@/assets/images/banner/reviewshake.webp";
const Branding = () => {
    return (
        <>
            <section className='flex flex-col items-center justify-center pt-28 pb-0' style={{ backgroundColor: 'rgb(247, 247, 247)' }}>
                <div className='pb-16 max-w-[1170px] w-full my-0 mx-auto px-8'>
                    <div className='flex flex-col items-center justify-center mx-auto'>
                        <h1 className='mb-8 text-5xl text-black text-center mx-auto font-extrabold'>Boost your brand on Google and Facebook</h1>
                        <p className='text-2xl my-0 mx-auto text-center max-w-[1000px]' style={{ color: 'rgb(43, 43, 89)' }}>Show off your top reviews to the world. Using our social sharing setup, you can automatically post reviews on Google, Facebook, Twitter. This will boost social proof and increase trust in your brand.</p>
                    </div>
                </div>
                <div className='background-img w-full '>
                    <Image src={reviewShake} width={1100} height={947} className='my-0 mx-auto max-w-full h-auto'/>
                </div>
            </section>
        </>
    )
}

export default Branding;