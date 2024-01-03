// import NavBar from "@/components/Home/Navbar/NavBar"
import NavBar from "@/components/Home/Navbar/NavBar";
import HeroBanner from "@/components/GenericComponent/HeroBanner"
import VideoSection from "@/components/Home/VideoSection/videoSection"
import GenericSection from "@/components/GenericComponent/genericComponent"
import GenericSocialSection from "@/components/GenericComponent/socialComponent";
import reviewSection from "@/assets/images/banner/reviewSection.webp"
import mike from '@/assets/images/logo/mike.webp';
import review from '../../public/svg/review.svg';
import avatar from "@/assets/images/logo/avatar.webp";
import progress from "@/assets/images/banner/progress.webp";
import brad from "@/assets/images/banner/brad.webp";
import widget from '@/assets/images/banner/widget.webp';
import VideoReview from "@/components/Home/VideoSection/videoReview";
import Banner from "@/components/Home/Banner/banner";
import Footer from "@/components/Footer/footer";
export default function Home() {
  const reviewData = {
    title: 'Stay on top of your reviews',
    imageSrc: reviewSection,
    altText: "of consumers say they're more likely to visit a business if it responds to negative reviews",
    avatarSrc: mike,
    reviewerName: 'Mike C',
    reviewerOccupation: 'Software Developer, Small Business',
    reviewText: '"I like how it monitors for new reviews that come in and sends me an email"',
    reviewDate: 'Review Date',
    influencePercentage: '45%',
    findOutMoreLink: '/generate-reviews',
    review: review
  };

  const progressData = {
    title: 'Track your progress',
    imageSrc: progress,
    altText: "increase in review interactions compared to pre-pandemic levels",
    avatarSrc: avatar,
    reviewerName: 'Goran M',
    reviewerOccupation: 'General Manager, SMB',
    reviewText: '"Feature we use and appreciate is reports. You can make client, team meetings and show the reports in a visual way, dynamically changing the date range."',
    reviewDate: 'Review Date',
    influencePercentage: '15%',
    findOutMoreLink: '/generate-reviews',
    review: review
  };

  const socialData = {
    title: 'Build social proof',
    reviewImg: review,
    altText: 'increase in review interactions compared to pre-pandemic levels',
    avatarSrc: brad,
    reviewerName: 'Brad C',
    reviewerOccupation: 'Director, Small Business',
    reviewText: "It's a very easy to use platform, we can access all our customer feedback in one place, we can easily show off our good reviews on our website and across socials.'",
    reviewDate: 'Review Date',
    influencePercentage: '50%',
    findOutMoreLink: '/generate-reviews',
    imageSrcRight: widget,
    altTextRight: 'review section',
  };

  const socialData2 = {
    title: 'Communicate with your customers',
    reviewImg: review,
    altText: 'of consumers expect a brand to answer their questions and respond to their negative posts.',
    avatarSrc: brad,
    reviewerName: 'Brad C',
    reviewerOccupation: 'Director, Small Business',
    reviewText: '"We are getting honest feedback from clients about their experience with us. It&apos;s not always positive feedback, but it&apos;s provided an opportunity for us to recognise ways we can provide a better service."',
    reviewDate: 'Review Date',
    influencePercentage: '94%',
    findOutMoreLink: '/generate-reviews',
    imageSrcRight: widget,
    altTextRight: 'review section',
  };

  const heroData = {
    title: "The new standard in",
    titleRemain: "review management",
    subtitle: "The all-in-one tool to generate reviews, boost your and and keep up-to-date with your reputation."
  };

  return (
    <div>
      <NavBar />
      <main>
        <HeroBanner {...heroData} />
        <VideoSection />
        <GenericSection {...reviewData} />
        <GenericSocialSection {...socialData} />
        <GenericSection {...progressData} />
        <GenericSocialSection {...socialData2} />
        <VideoReview />
        <Banner />
        <Footer />
      </main>
    </div>
  )
}
