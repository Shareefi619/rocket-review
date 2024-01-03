'use client';
import Image from 'next/image'
import React from 'react'
import logo from "@/assets/images/logo/rocketLogo.png";
import rocket from "@/assets/images/logo/logoRocket.png";
import Link from 'next/link';
import link from "../../../public/svg/link.svg";
import { useState } from 'react';

const Footer = () => {
  const [isHovered, setHovered] = useState(false);
  const [isHovered2, setHovered2] = useState(false);
  const [isHovered3, setHovered3] = useState(false);

  return (
    <div className='flex-col items-center justify-center bg-black/90 py-4 pt-24 px-24 xl:px-12 lg:px-9 md:px-6 md:pt-12'>
      <div className='grid grid-cols-12 pb-16'>
        <div className='col-span-2 flex-col px-9'>
          <Link href="/" className=''>
            <Image src={logo} alt='logo'/>
          </Link>
          <div className='flex gap-6 py-12 xl:gap-3 xl:py-5 lg:py-4'>
            <Link href="https://www.linkedin.com/">
              <svg width="60" height="60" viewBox="0 0 46 46" className='xl:w-10 xl:h-10 lg:w-8 lg:h-8 md:w-6 md:h-6' fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="23" cy="23" r="23" fill={isHovered ? "#EF4444" : "#E1E1E1"} style={{ transition: 'fill 0.3s' }}
                onMouseOver={() => setHovered(true)}
                onMouseOut={() => setHovered(false)}></circle>
                <path d="M18.03 31h-3.733V18.983h3.732V31zM16.16 17.343c-1.193 0-2.161-.988-2.161-2.181a2.161 2.161 0 114.322 0c0 1.193-.968 2.181-2.16 2.181zM31.996 31h-3.724v-5.85c0-1.394-.028-3.182-1.94-3.182-1.94 0-2.238 1.515-2.238 3.082V31h-3.727V18.983h3.579v1.639h.052c.498-.944 1.715-1.94 3.53-1.94 3.778 0 4.472 2.486 4.472 5.717V31h-.004z" fill="#2B2B59"></path></svg>
            </Link>
            <Link href="https://www.twitter.com/">
              <svg width="60" height="60" viewBox="0 0 46 46" className='xl:w-10 xl:h-10 lg:w-8 lg:h-8 md:w-6 md:h-6' fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="23" cy="23" r="23" fill={isHovered2 ? "#EF4444" : "#E1E1E1"} style={{ transition: 'fill 0.3s' }}
                onMouseOver={() => setHovered2(true)}
                onMouseOut={() => setHovered2(false)}></circle><path d="M30.944 18.927c.013.177.013.355.013.533 0 5.418-4.125 11.662-11.663 11.662-2.322 0-4.48-.673-6.294-1.84.33.038.647.05.99.05a8.21 8.21 0 005.089-1.75 4.106 4.106 0 01-3.833-2.843c.254.038.508.063.774.063.368 0 .736-.05 1.079-.14a4.1 4.1 0 01-3.287-4.022v-.05c.546.304 1.18.494 1.853.52a4.096 4.096 0 01-1.827-3.414c0-.762.203-1.46.558-2.069a11.651 11.651 0 008.452 4.29 4.623 4.623 0 01-.102-.94 4.097 4.097 0 014.1-4.099c1.18 0 2.245.495 2.994 1.295a8.07 8.07 0 002.602-.99 4.088 4.088 0 01-1.802 2.259 8.218 8.218 0 002.36-.635 8.812 8.812 0 01-2.056 2.12z" fill="#2B2B59"></path></svg>            </Link>
            <Link href="https://www.facebook.com/">
              <svg width="60" height="60" viewBox="0 0 46 46" className='xl:w-10 xl:h-10 lg:w-8 lg:h-8 md:w-6 md:h-6' fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="23" cy="23" r="23" fill={isHovered3 ? "#EF4444" : "#E1E1E1"} style={{ transition: 'fill 0.3s' }}
                onMouseOver={() => setHovered3(true)}
                onMouseOut={() => setHovered3(false)}></circle><g clipPath="url(#clip0_1712_6134)"><path d="M26.581 23.563l.472-3.077h-2.952v-1.997c0-.841.413-1.662 1.735-1.662h1.342v-2.62S25.96 14 24.795 14c-2.43 0-4.02 1.474-4.02 4.141v2.345h-2.702v3.076h2.702V31h3.326v-7.438h2.48z" fill="#2B2B59"></path></g><defs><clipPath id="clip0_1712_6134"><path fill="#fff" transform="translate(17.313 14)" d="M0 0H10.625V17H0z"></path></clipPath></defs></svg>            </Link>
          </div>
        </div>
        <div className='col-span-2 flex-col px-10 text-xl xl:text-lg lg:text-base md:text-sm'>
          <h1 className='text-red-600 font-bold pb-6'>Solutions</h1>
          <div className='mb-8 xl:mb-4'>
            <Link href="/small-business" className=' hover:text-blue-500 text-white'> Small business</Link>
          </div>
        </div>
        <div className='col-span-2 flex-col text-xl xl:text-lg lg:text-base md:text-sm'>
          <h1 className='text-red-600 font-bold pb-6'>Comparison</h1>
          <div className='mb-8 xl:mb-4'>
            <Link href="/gradeus" className=' hover:text-blue-500 text-white'> Grade.us</Link>
          </div>
          <div className='mb-8 xl:mb-4'>
            <Link href="/testimonial" className=' hover:text-blue-500 text-white'> Testimonial </Link>
          </div>
          <div className='mb-8 xl:mb-4'>
            <Link href="/birdeye" className=' hover:text-blue-500 text-white'> BirdEye</Link>
          </div>
          <div className='mb-8 xl:mb-4'>
            <Link href="/podium" className=' hover:text-blue-500 text-white'> Podium </Link>
          </div>
          <div className='mb-8 xl:mb-4'>
            <Link href="/gatherup" className=' hover:text-blue-500 text-white'> GatherUp </Link>
          </div>
          <div className='mb-8 xl:mb-4'>
            <Link href="/localClarity" className=' hover:text-blue-500 text-white'> LocalClarity </Link>
          </div>
          <div className='mb-8 xl:mb-4'>
            <Link href="/repuso" className=' hover:text-blue-500 text-white'> Repuso</Link>
          </div>
          <div className='mb-8 xl:mb-4'>
            <Link href="/proveSource" className=' hover:text-blue-500 text-white'> ProveSource </Link>
          </div>
        </div>
        <div className='col-span-2 flex-col text-xl xl:text-lg lg:text-base md:text-sm'>
          <h1 className='text-red-600 font-bold  pb-6'>Company</h1>
          <div className='mb-8 xl:mb-4'>
            <Link href="/about" className=' hover:text-blue-500 text-white'> About Us </Link>
          </div>
          <div className='mb-8 xl:mb-4 '>
            <Link href="/privacy-policy" className='flex gap-4 md:gap-2  hover:text-blue-500 text-white'> Privcy Policy <Image src={link} className='md:w-5 md:h-5' /> </Link>
          </div>
          <div className='mb-8 xl:mb-4'>
            <Link href="/contact" className=' hover:text-blue-500 text-white'> Contact Us </Link>
          </div>
        </div>
        <div className='col-span-2 flex-col text-xl xl:text-lg lg:text-base md:text-sm'>
          <h1 className='text-red-600 font-bold  pb-6'>Resources</h1>
          <div className='mb-8 xl:mb-4'>
            <Link href="/brand-audit" className=' hover:text-blue-500 text-white'> Free business scan </Link>
          </div>
          <div className='mb-8 xl:mb-4 '>
            <Link href="/roadmap" className='flex gap-4 md:gap-2  hover:text-blue-500 text-white'> Roadmap <Image src={link} /> </Link>
          </div>
          <div className='mb-8 xl:mb-4 '>
            <Link href="/blog" className='flex gap-4 md:gap-2  hover:text-blue-500 text-white'> Blog <Image src={link} /> </Link>
          </div>
        </div>
        <div className='col-span-2 flex-col text-xl xl:text-lg lg:text-base md:text-sm'>
          <h1 className='text-red-600 font-bold pb-6'>Resources</h1>
          <div className='mb-8 xl:mb-4 '>
            <Link href="/help" className='flex gap-4 md:gap-2 hover:text-blue-500 text-white'> Help <Image src={link} /> </Link>
          </div>
          <div className='mb-8 xl:mb-4 '>
            <Link href="/api" className='flex gap-4 md:gap-2 hover:text-blue-500 text-white'> API <Image src={link} /> </Link>
          </div>
          <div className='mb-8 xl:mb-4 '>
            <Link href="/status" className='flex gap-4 md:gap-2 hover:text-blue-500 text-white'> Status <Image src={link} /> </Link>
          </div>
          <div className='mb-8 xl:mb-4 '>
            <Link href="/faq" className='flex gap-4 md:gap-2 hover:text-blue-500 text-white'> FAQ <Image src={link} /> </Link>
          </div>

        </div>
      </div>
      <div className='grid grid-cols-12 text-xl xl:text-lg lg:text-base md:text-sm'>
        <div className='flex gap-2 items-start justify-start col-span-6'>
          <p className=' text-white font-semibold'>© Rocket, a</p>
          <Image src={rocket} className='relative w-24 bottom-6' />
          <p className=' text-white font-semibold'>company</p>
        </div>
        <div className='col-span-6 flex items-end justify-end pr-40 pb-8'>
          <Link href="/privacy-policy" className=' text-white font-medium'>Privacy Policy</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer