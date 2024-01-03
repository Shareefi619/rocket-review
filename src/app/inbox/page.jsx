import HeroBannerTwo from '@/components/GenericComponent/HeroBannerTwo'
import NavBar from '@/components/Home/Navbar/NavBar'
import brad from "@/assets/images/banner/brad.webp";
import inbox from "../../../public/svg/inbox-hero.svg"
import CustomerLoyalty from '@/components/inbox/customerLoyalty';
import Feedback from '@/components/inbox/feedback';
import CampaignSection from '@/components/GenericComponent/campaignSection';
import number from "../../../public/svg/dedicated-number.svg"
import Banner from '@/components/Home/Banner/banner';
import Footer from '@/components/Footer/footer';
const page = () => {
    const bannerData = {
        title: "Build customer relationships with Inbox",
        subtitle: "Using our new Inbox feature, you can see all the communications between you and your customers: review request, private feedback and SMS replies in a neat timeline. Stay on top of each customer interaction and engage rapidly with them.",
        imgtitle: `"We are getting honest feedback from clients about their experience with us. It's not always positive feedback, but it's provided an opportunity for us to recognise ways we can provide a better service."`,
        imgSrc: brad,
        imgPosition: "Director, Small Business",
        person: "Brad C",
        heroImg: inbox
    }

    const reportData = {
        imgSrc: number,
        title: 'Get a dedicated number for Rocket Review Tool only',
        subtitle: "Activating the Inbox means that you will have your dedicated phone number. All review requests and outgoing SMS will be sent from this number."
    }
    return (
        <main>
            <NavBar />
            <HeroBannerTwo {...bannerData} />
            <CustomerLoyalty />
            <Feedback />
            <CampaignSection {...reportData} />
            <Banner />
            <Footer />
        </main>
    )
}

export default page