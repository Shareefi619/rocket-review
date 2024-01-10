import Image from 'next/image';
import React from 'react'
import BannerArrow1 from "../../../public/svg/bannerArrow1.svg";
import BannerArrow2 from "../../../public/svg/bannerArrow2.svg";
const PricingBanner = () => {
    return (
        <>
            <section className='pt-16 pb-28 md:py-16 bg-black/90'>
                <div className='max-w-[1170px] w-full my-0 mx-auto py-0 px-8 md:px-6'>
                    <div className='relative'>
                        <Image src={BannerArrow2} alt='arrow1' className='absolute top-0 w-[100px] h-[120px] md:w-[80px] md:h-[80px] sm:w-[50px] xs:top-[-3rem]' />
                        <div className='relative'>
                            <Image src={BannerArrow1} alt='arrow2' className='absolute top-0 right-8 w-[100px] h-[120px] md:w-[80px] md:h-[80px] md:hidden' />
                            <div>
                                <h1 className='mb-3 text-6xl md:text-4xl text-white text-center font-bold'>Transparent pricing</h1>
                                <p className='text-2xl md:text-lg text-white text-center'>Simple plans that grow with your business. No contracts. No setup fees.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PricingBanner;