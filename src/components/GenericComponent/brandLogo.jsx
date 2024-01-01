'use client'
import React from 'react'
import samsung from "@/assets/images/BrandLogo/samsung.svg";
import crowncaliber from "@/assets/images/BrandLogo/crown&caliber.svg";
import keystone from "@/assets/images/BrandLogo/keystone.webp";
import localclarity from "@/assets/images/BrandLogo/localclarity.svg";
import pwc from "@/assets/images/BrandLogo/pwc.svg";
import Image from 'next/image';
import { usePathname } from 'next/navigation';
const BrandLogo = () => {
    const router = usePathname();
    const brandLogo = [samsung, pwc, localclarity, crowncaliber, keystone];

    return (
        <>
            <div className="bg-white">
                <div className="flex items-center justify-center pt-24 pb-12 md:pt-12 md:pb-8">
                    <div className="text-center w-1/2 md:w-full">
                        <div className="flex items-center justify-center">
                            <div className="flex-1 border-t border-gray-300"></div>
                            <div className="mx-4 text-black text-lg md:text-sm uppercase font-bold">1000+ COMPANIES TRUST REVIEWSHAKE</div>
                            <div className="flex-1 border-t border-gray-300"></div>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center items-center pb-24 md:pb-12'>
                    {brandLogo.map((img, index) => (
                        <Image
                            key={index}
                            src={img} // Use the actual image source from the brandLogo array
                            alt="brand logo"
                            className="mx-2 rounded-md xl:mx-0 md:mx-0 md:w-36"
                        />
                    ))}
                </div>
            </div>

        </>
    )
}

export default BrandLogo