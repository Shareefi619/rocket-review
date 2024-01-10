import React from 'react'
const VideoPart = () => {

    return (
        <div className='flex flex-col bg-white p-12 py-6 sm:p-4 xxs:p-4'>
            <div className='grid items-start justify-start grid-cols-12 p-24 xl:p-12 md:p-8 sm:p-8 xxs:p-0 sm:flex sm:flex-col sm:text-center'>
                <div className='col-span-6'>
                    <div className='flex flex-col items-start justify-start sm:items-center sm:justify-center p-16 mt-28 xl:p-10 xl:mt-20 md:p-6 xxs:p-0 md:mt-0'>
                        <h1 className='text-5xl text-black font-bold my-6 md:text-3xl'>Send review invites</h1>
                        <p className='text-3xl text-black/75 xl:text-2xl md:text-base '>Use our automatically generated landing page to request reviews from your current and former customers. You can easily add 85+ review sources. It takes just a few clicks and 30 seconds to leave a review.</p>
                    </div>
                </div>
                <div className='flex col-span-6'>
                    <div className='relative overflow-hidden m-12 rounded-2xl xxs:m-4'>
                        <video src={"/videos/video1.mp4"} autoPlay loop muted />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoPart;
