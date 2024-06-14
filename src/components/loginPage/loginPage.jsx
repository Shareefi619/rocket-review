import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import logo from "@/assets/images/logo/rocketLogo.png";
const LoginPage = () => {
    return (
        <>
            <section className='text-black font-sans text-base'>
                <div className='flex items-center justify-center'>
                    <div className='absolute flex items-center justify-center w-full h-20 z-10'>
                        <Link href="/" className='fixed'>
                            <Image src={logo} className='max-w-[140px] max-h-12 ml-6' />
                        </Link>
                        <div className='flex items-center ml-auto'>
                            <span className='text-black/60 text-xs font-semibold'>
                                Don't have an account ?
                            </span>
                            <Link href="/signup" className='my-4 mx-6'>Sign Up</Link>
                        </div>
                    </div>
                    <div className='w-2/4 h-screen bg-gray-300 fixed -z-10 bg-cover brightness-50' ></div>
                </div>
            </section>
        </>
    )
}

export default LoginPage;