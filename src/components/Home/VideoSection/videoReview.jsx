'use client';
import Link from 'next/link'
import { useState } from 'react';
import videoImg from "@/assets/images/banner/video-bg.webp";
import Image from 'next/image';
import { usePathname } from 'next/navigation';
const VideoReview = () => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const playVideo = () => {
        setIsVideoPlaying(true);
    };

    const router = usePathname();

    return (
        <div className={`grid items-start justify-start grid-cols-12 md:flex md:flex-col md:items-center md:justify-center md:text-center p-24 xl:p-12 md:p-8 xs:p-0 xs:py-12 xxs:py-4 bg-white ${router === '/smallBusiness' ? 'bg-gray-100' : ''}`}  >
            <div className='flex-col col-span-6 p-16 xl:p-8 xxs:p-2'>
                <h1 className='font-bold text-black text-5xl p-6 xl:p-2 xl:text-4xl md:text-3xl'>Boost social proof with Video Reviews</h1>
                <p className='text-2xl xl:text-xl md:text-lg text-black/70 p-6 xl:p-3 mb-12'>Check out our latest feature: video reviews. You can easily embed them on the landing page, and you can receive video testimonials from your customers. The recorded videos can be used for a variety of purposes: widgets, social media posts, and even ads.</p>
                <Link href="/signup" className='bg-red-600 px-12 py-4 text-white hover:text-black font-bold rounded-lg text-xl m-8'> Get Started</Link>
            </div>
            <div className="col-span-6">
                <div className="relative mt-40 xl:mt-20">
                    <div>
                        <div >
                            {!isVideoPlaying && (
                                <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" onClick={playVideo}>
                                    <svg width="120" height="80" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="49" cy="49" r="49" fill="#EF4444"></circle>
                                        <path d="M65.5 46.402c2 1.155 2 4.041 0 5.196L43 64.588c-2 1.155-4.5-.288-4.5-2.598V36.01c0-2.31 2.5-3.753 4.5-2.599l22.5 12.99z" fill="#000009"></path>
                                    </svg>
                                </button>
                            )}
                            {!isVideoPlaying && (
                                <Image
                                    className="w-full h-auto rounded-lg"
                                    src={videoImg}
                                    alt="Woman in front of the computer"
                                />
                            )}
                        </div>
                        {isVideoPlaying && (
                            <div className="absolute rounded-lg top-0 left-0 w-full h-full">
                                <iframe
                                    width="800"
                                    height="400"
                                    className='rounded-lg'
                                    src="https://www.youtube.com/embed/wxNdMs4OhL8?rel=0&modestbranding=1&autoplay=1"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoReview