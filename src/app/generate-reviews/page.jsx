'use client';
import NavBar from '@/components/Home/Navbar/NavBar';
import HeroBanner from '@/components/generate-reviews/HeroBanner';
import TemplateSection from '@/components/GenericComponent/templateSection';
import VideoPart from '@/components/generate-reviews/videoPart';
import React from 'react'
import templateImg from "../../../public/svg/templates.svg";
import CampaignSection from '@/components/GenericComponent/campaignSection';
import campaign from "../../../public/svg/campaigns.svg";
import customer from "../../../public/svg/add-customers.svg";
import AnalyticSection from '@/components/GenericComponent/analyticSection';
import funnel from "../../../public/svg/funnel.svg";
import form from "../../../public/svg/form.svg";
import VideoReview from '@/components/Home/VideoSection/videoReview';
import Banner from '@/components/Home/Banner/banner';
import Footer from '@/components/Footer/footer';
const GenerateReviews = () => {
  const template = {
    imgSrc: templateImg,
    title: "Create templates without a hitch",
    subtitle: "Our easy to use tools allow you to make your own beautiful email and SMS templates. You can add customer info (like name, email), and make it visually appealing by adding visuals or changing colors. You can even choose to send the invites from your own email address"
  }

  const campaignData = {
    imgSrc : campaign,
    title: 'Run your own campaigns',
    subtitle: "Our powerful drip campaigns enable you to send review requests on email and SMS. Add automated reminds for customers that haven’t left a review to make sure that no one misses your requests."
  }

  const inviteData = {
    title: "Seamlessly add customers to campaigns",
    subtitle: "Do you want to send campaigns to your existing customers? We make it easy with CSV imports, API access or Zapier integrations.",
    imgSrc: customer
  }

  const analyticData = {
    title: "Funnel analytics",
    subtitle: "Understand how your campaigns are performing with our funnel analytics. Use these metrics to measure efficiency and optimize your campaigns.",
    imgSrc: funnel
  }

  const formData = {
    title: "Invite your users with an opt-in form",
    subtitle: "Do you want an even easier way to send review requests to customers? Use our opt-in form on a tablet at your establishment to sign them up to campaigns.",
    imgSrc: form
  }

  return (
    <main>
    <NavBar/>
    <HeroBanner/>
    <VideoPart/>
    <TemplateSection {...template}/>
    <CampaignSection {...campaignData}/>
    <TemplateSection {...inviteData}/>
    <AnalyticSection {...analyticData}/>
    <TemplateSection {...formData}/>
    <VideoReview />
    <Banner/>
    <Footer/>
\    </main>
  )
}

export default GenerateReviews;