import TemplateSection from '@/components/GenericComponent/templateSection'
import NavBar from '@/components/Home/Navbar/NavBar'
import HeroBannerTwo from '@/components/GenericComponent/HeroBannerTwo'
import React from 'react'
import tempImg from "@/assets/svg/360-degree.svg";
import AnalyticSection from '@/components/GenericComponent/analyticSection';
import StayOnTop from '@/assets/images/banner/stay-on-top.webp';
import insight from '@/assets/images/banner/share-insights.webp';
import CampaignSection from '@/components/GenericComponent/campaignSection';
import reports from '@/assets/svg/reports.svg';
import Banner from '@/components/Home/Banner/banner';
import Footer from '@/components/Footer/footer';
import Mike from "@/assets/images/logo/mike.webp";
import heroImg from '@/assets/svg/hero-image.svg';

const page = () => {
    const tempData = {
        imgSrc: tempImg,
        title: "360 degree view of your reputation",
        subtitle: "Choose from more than 85 review sources, like Google, Facebook, Yelp of Tripadvisor. Once you add a review source, you will see all the reviews in our dashboard in a few minutes."
    }

    const analyticData = {
        title: "Stay on top of your reviews",
        subtitle: "Keep a 100% response rate by getting notified of new reviews and seeing reviews that have not been answered. Respond directly from Reviewshake to Google reviews.",
        imgSrc: StayOnTop
    }
    const teamData = {
        imgSrc: insight,
        title: "Share your insights with your team",
        subtitle: "Give individual access to your employees to track and manage reviews, so that the entire company is on top of their online reputation."
    }

    const reportData = {
        imgSrc: reports,
        title: 'Have a better understanding with personalized reports',
        subtitle: "Use our powerful reporting tool to create your own reports, sent daily, weekly or monthly over email. Share them with your team to inform your marketing and growth strategy"
    }

    const bannerData = {
        title: "Stay on top of your reviews from 85+ review sites",
        subtitle: "Knowing the online perception about your brand, products or services allows you to take the right steps to improve your reputation and get more business.",
        imgtitle: '"I like how it monitors for new reviews that come in and sends me an email"',
        imgSrc: Mike,
        imgPosition: "Software developer, Small Business",
        person: "Mike C",
        heroImg: heroImg
    }
    return (
        <main>
            <NavBar />
            <HeroBannerTwo {...bannerData} />
            <TemplateSection {...tempData} />
            <AnalyticSection {...analyticData} />
            <TemplateSection {...teamData} />
            <CampaignSection {...reportData} />
            <Banner />
            <Footer />
        </main>
    )
}

export default page