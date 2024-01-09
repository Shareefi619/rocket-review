import Image from 'next/image';
import React from 'react'
import reviewShake from "@/assets/images/banner/reviewShake.png";
const Branding = () => {
    return (
        <>
            <section className='flex flex-col items-center justify-center pt-28 pb-0' style={{ backgroundColor: 'rgb(247, 247, 247)' }}>
                <div className='pb-16 max-w-[1170px] w-full my-0 mx-auto px-8'>
                    <div className='flex flex-col items-center justify-center mx-auto'>
                        <h1 className='mb-8 text-5xl text-black text-center mx-auto sm:text-3xl font-extrabold'>Boost your brand on Google and Facebook</h1>
                        <p className='text-2xl my-0 mx-auto text-center max-w-[1000px] sm:text-lg' style={{ color: 'rgb(43, 43, 89)' }}>Show off your top reviews to the world. Using our social sharing setup, you can automatically post reviews on Google, Facebook, Twitter. This will boost social proof and increase trust in your brand.</p>
                    </div>
                </div>
                <div className='background-img w-full '>
                    <Image src={reviewShake} className='w-[1100px] h-[947px] sm:w-[500px] sm:h-[600px] my-0 mx-auto max-w-full'/>
                </div>
            </section>
        </>
    )
}

export default Branding;