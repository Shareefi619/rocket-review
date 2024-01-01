import React from 'react'
import NavBar from '@/components/Home/Navbar/NavBar'
import HeroBanner from '@/components/GenericComponent/HeroBanner'
import Invitation from '@/components/GenericComponent/invitation';
import invite from "@/assets/images/banner/invitation.webp"
import Review from '@/components/GenericComponent/review';
import allReview from "@/assets/images/banner/all-reviews.webp";
import sentiment from "@/assets/images/banner/sentiment.webp";
import scale from "@/assets/images/banner/scale.webp"
import Pricing from '@/components/GenericComponent/pricing';
import ReviewSection from '@/components/SmallBusiness/reviewSection';
import VideoReview from '@/components/Home/VideoSection/videoReview';
import Faq from '@/components/GenericComponent/faq';
import Banner from '@/components/Home/Banner/banner';
import Footer from '@/components/Footer/footer';
const SmallBusiness = () => {
  const heroData = {
    title: "Your customers aren't waiting around to leave you a review",
    titleRemain: "",
    subtitle: "One tool to generate, manage, market and analyze online reviews."
  };

  const inviteData = {
    title: "Invite your customers to review",
    subtitle: "Send email and SMS invitations to your customers and segment for positive and negative sentiment with funnel optimized landing pages.",
    imgSrc: invite
  }

  const reviewData = {
    title: "Quickly see all your reviews",
    subtitle: "One home for all your reviews - get notified for new reviews, discuss with your team and respond from one place.",
    imgSrc: allReview
  }

  const visualData = {
    title: "Get visual insights",
    subtitle: "See what potential customers see - your performance over time and compared with your competitors. You are what you measure.",
    imgSrc: sentiment
  }

  const visitorData = {
    title:"Show your reviews to your website visitors",
    subtitle:"Drive sales and trust by showing your latest and greatest reviews on your website, social media and search engine results.",
    imgSrc: sentiment
  }

  const scaleData = {
    title:"Scale your business with more reviews.",
    subtitle: "The cycle is complete - get more reviews, be found online and attract new customers, and grow your business.",
    imgSrc: scale
  }
  return (
    <main>
      <NavBar />
      <HeroBanner {...heroData} />
      <Invitation {...inviteData} />
      <Review {...reviewData} />
      <Invitation {...visualData} />
      <Review {...visitorData} />
      <Invitation {...scaleData} />
      <Pricing/>
      <ReviewSection/>
      <VideoReview/>
      <Faq/>
      <Banner/>
      <Footer/>
    </main>
  )
}

export default SmallBusiness