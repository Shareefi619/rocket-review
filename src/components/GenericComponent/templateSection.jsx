'use client';
import Image from 'next/image'
import React from 'react'
import { usePathname } from 'next/navigation'
const TemplateSection = ({ title, subtitle, imgSrc }) => {
  const router = usePathname();

  return (
    <>
      <div className='flex items-center justify-center bg-blue-400 p-24 xl:p-12 md:p-8'>
        <div className='grid grid-cols-12'>
          <div className='col-span-6 md:mt-24'>
            <Image src={imgSrc} width={700} height={700} alt='TemplateSection card' />
          </div>
          {
            router === '/market-reviews' ? (
            <div className='col-span-6 m-14 ml-20 mt-40 xl:m-9 xl:mt-20'>
              <h1 className='text-5xl text-black font-bold xl:text-3xl'>{title}</h1>
              <p className='text-3xl text-black/70 font-normal py-6 xl:text-2xl'>{subtitle}</p>
            </div>) : (<div className='col-span-6 m-14 ml-20 md:m-10 md:ml-16'>
              <h1 className='text-5xl text-black font-bold xl:text-4xl md:text-3xl'>{title}</h1>
              <p className='text-3xl text-black/70 font-normal py-6 xl:text-2xl md:text-base'>{subtitle}</p>
            </div>)
          }
        </div>
      </div>
    </>
  )
}

export default TemplateSection;