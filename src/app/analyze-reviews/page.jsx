import HeroBannerTwo from '@/components/GenericComponent/HeroBannerTwo';
import NavBar from '@/components/Home/Navbar/NavBar';
import React from 'react'
import avatar from "@/assets/images/logo/avatar.webp";
import browser from "../../../public/svg/browser.svg"
import TrackTrends from '@/components/analyze-reviews/trackTrends';
import competition from "@/assets/images/banner/competition.webp";
import Review from '@/components/GenericComponent/review';
import SentimentSection from '@/components/analyze-reviews/sentimentSection';
import reports from '../../../public/svg/reports.svg';
import CampaignSection from '@/components/GenericComponent/campaignSection';
import TemplateSection from '@/components/GenericComponent/templateSection';
import api from "@/assets/images/banner/api.webp";
import AnalyticSection from '@/components/GenericComponent/analyticSection';
import location from "../../../public/svg/location-reports.svg";
import GeoSection from '@/components/analyze-reviews/geoSection';
import BrandLogo from '@/components/GenericComponent/brandLogo';
import Banner from '@/components/Home/Banner/banner';
import Footer from '@/components/Footer/footer';
const page = () => {
    const bannerData = {
        title: "Track your performance",
        subtitle: "You've seen and read the reviews about your business. Now you can go one step further: see trends over time, compare with competitors, see results by platform - all these to inform your next marketing decisions and boost your brand.",
        imgtitle: `"Feature we use and appreciate is reports. You can make client, team meetings and show the reports in a visual way, dynamically changing the date range."`,
        imgSrc: avatar,
        imgPosition: "General manager, SMB",
        person: "Goran M",
        heroImg: browser
    }

    const reviewData = {
        title: "Understand your competition",
        subtitle: "See how your competitors are doing and benchmark your review performance with them across 15 stats.",
        imgSrc: competition
    }

    const reportData = {
        imgSrc: reports,
        title: 'Compare locations and/or competitors with side-by-side reporting',
        subtitle: "Use our powerful reporting tool to create your own reports, sent daily, weekly or monthly over email. Share them with your team to inform your marketing and growth strategy"
    }

    const tempData = {
        imgSrc: api,
        title: "Custom reports using our API",
        subtitle: "Do you want to add new reports? Access review stats via our API and build your own custom reports."
    }

    const analyticData = {
        title: "Zoom in",
        subtitle: "Understand the high-level context from our aggregate reports. Do you want to see what's happening in more detail? We got you covered with per-location reports.",
        imgSrc: location
    }

    return (
        <>
            <main>
                <NavBar />
                <HeroBannerTwo {...bannerData} />
                <TrackTrends />
                <Review {...reviewData} />
                <SentimentSection />
                <CampaignSection {...reportData} />
                <TemplateSection {...tempData} />
                <AnalyticSection {...analyticData} />
                <GeoSection />
                <BrandLogo />
                <Banner />
                <Footer />
            </main>
        </>
    )
}

export default page;