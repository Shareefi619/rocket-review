import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const GenericSocialSection = ({
  title,
  altText,
  reviewImg,
  avatarSrc,
  reviewerName,
  reviewerOccupation,
  reviewText,
  reviewDate,
  influencePercentage,
  findOutMoreLink,
  imageSrcRight,
  altTextRight,
}) => {
  return (
    <div className='flex flex-col bg-blue-400 p-12 md:p-8 py-24'>
      <h1 className='flex flex-col items-center justify-start text-black text-5xl md:text-3xl font-bold mb-4'>{title}</h1>
      <div className='grid items-start justify-start grid-cols-12 p-24 xl:p-12 md:p-10'>
        <div className='col-span-6'>
          <div className='flex items-start justify-start'>
            <Image src={avatarSrc} alt='avatar' width={50}/>
            <div>
              <p className='ml-2 text-lg'>
                <strong>{reviewerName}</strong>
                <br />
                {reviewerOccupation}
              </p>
              <p className='text-black/80 font-serif font-normal text-3xl my-10 xl:text-2xl md:text-xl xl:my-7'>{reviewText}</p>
              <div className='flex gap-4 mb-4'>
                <p className='mt-2'>{`Reviewed on ${reviewDate}`}</p>
                <Image src={reviewImg} alt='review' className='w-10 xl:w-8' />
              </div>
              <div className='flex gap-4 mt-14 xl:mt-10'>
                <p className='text-7xl font-extrabold xl:text-5xl text-red-600'>
                  <strong>{influencePercentage}</strong>{' '}
                </p>
                <p className='text-black/80 text-lg xl:text-base'>
                 {altText}
                </p>
              </div>
              <div className='flex mt-8 px-4'>
                <Link href={findOutMoreLink} className='border-[3px] border-red-500 hover:border-black rounded-lg py-3 px-10 text-2xl xl:py-2 xl:px-8 xl:text-xl text-red-500 hover:text-black'>
                  Find out more &#x2192;
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='col-span-6'>
          <div className='flex items-center justify-center w-auto h-auto pl-12'>
            <Image src={imageSrcRight} alt={altTextRight} width={1500} height={1500} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenericSocialSection;
