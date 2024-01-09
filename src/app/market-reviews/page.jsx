import HeroBannerTwo from '@/components/GenericComponent/HeroBannerTwo'
import NavBar from '@/components/Home/Navbar/NavBar'
import brad from "@/assets/images/banner/brad.webp";
import React from 'react'
import Widgets from '@/components/market-reviews/widgets';
import TemplateSection from '@/components/GenericComponent/templateSection';
import snippet from "@/assets/images/banner/snippet.webp";
import AnalyticSection from '@/components/GenericComponent/analyticSection';
import email from "@/assets/images/banner/email.jpg";
import Branding from '@/components/market-reviews/branding';
import BrandLogo from '@/components/GenericComponent/brandLogo';
import Banner from '@/components/Home/Banner/banner';
import Footer from '@/components/Footer/footer';
import heroImg from '../../../public/svg/hero-image.svg';

const page = () => {
    const bannerData = {
        title: "Build social proof to close more deals",
        subtitle: "Boost your brand perception by showing off online reviews to your prospective customers. Widgets, social sharing, video reviews - we have everything you need.",
        imgtitle: `"It's a very easy to use platform, we can access all our customer feedback in one place, we can easily "show off" our good reviews on our website and across socials."`,
        imgSrc: brad,
        imgPosition: "Director, Small Business",
        person: "Brad C",
        heroImg: heroImg
    }

    const tempData = {
        imgSrc: snippet,
        title: "Rich snippets",
        subtitle: "Show star rating for Google search results using our rich snippet markup."
    }

    const analyticData = {
        title: "Personalize your email widget",
        subtitle: "Use our email widgets to add the review generation snippet for email signatures.",
        imgSrc: email
    }
    return (
        <main>
            <NavBar />
            <HeroBannerTwo {...bannerData} />
            <Widgets />
            <TemplateSection {...tempData} />
            <AnalyticSection {...analyticData} />
            <Branding />
            <BrandLogo />
            <Banner/>
            <Footer/>
        </main>
    )
}

export default page