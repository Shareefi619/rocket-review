import Pricing from '@/components/GenericComponent/pricing'
import NavBar from '@/components/Home/Navbar/NavBar'
import PricingBanner from '@/components/pricing/pricingBanner'
import React from 'react'
import mike from "@/assets/images/logo/mike.webp"
import Faq from '@/components/GenericComponent/faq'
import Banner from '@/components/Home/Banner/banner'
import Footer from '@/components/Footer/footer'
const page = () => {

    const pricingData = {
        title: '"I like how it monitors for new reviews that come in and sends me an email"',
        imgSrc: mike,
        imgPosition: "Software developer, Small Business",
        person: "Mike C"
    }
    return (
        <>
            <main>
                <NavBar />
                <PricingBanner />
                <Pricing {...pricingData} />
                <Faq />
                <Banner/>
                <Footer/>
            </main>
        </>
    )
}

export default page