import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const GenericSection = ({
  title,
  imageSrc,
  altText,
  avatarSrc,
  reviewerName,
  reviewerOccupation,
  reviewText,
  reviewDate,
  review,
  influencePercentage,
  findOutMoreLink,
}) => {
  return (
    <div className='flex flex-col bg-white p-12 md:p-8 py-24 xs:p-0 xs:py-12'>
      <h1 className='flex flex-col items-center justify-start text-black text-5xl md:text-3xl xxs:text-center font-bold mb-4 sm:mb-0'>{title}</h1>
      <div className='grid items-start justify-start grid-cols-12 p-24 xl:p-12 xxs:p-2 sm:flex sm:flex-col sm:gap-8'>
        <div className='col-span-6 sm:hidden'>
          <div className='flex items-center justify-center w-auto h-auto pr-12'>
            <Image src={imageSrc} alt={altText} width={1500} height={1500} />
          </div>
        </div>
        <div className='col-span-6'>
          <div className='flex items-start justify-start'>
            <Image src={avatarSrc} alt='avatar' className='w-12 rounded-3xl' />
            <div>
              <p className='ml-2 text-lg xxs:text-sm'>
                <strong>{reviewerName}</strong>
                <br />
                {reviewerOccupation}
              </p>
              <p className='text-black/80 font-serif font-normal text-3xl my-10 xxs:my-2 xl:text-2xl md:text-xl xxs:text-base xl:my-7'>{reviewText}</p>
              <div className='flex gap-4 mb-4 sm:mb-2'>
                <p className='mt-2'>{`Reviewed on ${reviewDate}`}</p>
                <Image src={review} alt='review' className='w-10 xl:w-8' />
              </div>
              <div className='flex gap-4 mt-14 xl:mt-10'>
                <p className='text-7xl text-red-600 font-extrabold xl:text-5xl sm:text-4xl'>
                  <strong>{influencePercentage}</strong>{' '}
                </p>
                <p className='text-black/80 text-lg xl:text-base sm:text-sm'>
                  {altText}
                </p>
              </div>
              <div className='flex mt-8 px-4 sm:px-0 sm:mt-4'>
                <Link href={findOutMoreLink} className='border-[3px] border-red-500 hover:border-black rounded-lg py-3 px-10 text-2xl font-bold xl:py-2 xl:px-7 xl:text-xl text-red-500 hover:text-black'>
                  Find out more &#x2192;
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='col-span-6 sm:block hidden'>
          <div className='flex items-center justify-center w-auto h-auto pr-12 xs:pr-0'>
            <Image src={imageSrc} alt={altText} width={1500} height={1500} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenericSection;
