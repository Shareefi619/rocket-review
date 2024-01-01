const menuData = [
  {
    id: 1,
    title: "Solutions",
    link: "#",
    has_dropdown: true,
    sub_menus: [
      { link: "/smallBusiness", title: " Small business", subTitle: 'Generate, manage, market and analyze online reviews.' },

    ],
  },
  {
    id: 2,
    title: "Benefits",
    link: "#",
    has_dropdown: true,
    sub_menus: [
      { link: "/generate-reviews", title: " Generate Reviews", subTitle: "Generate, manage, market and analyze online reviews on 85+ review sites." },
      { link: "/manage-reviews", title: " Manage Reviews", subTitle: "Stay on top of your reviews from 85+ review sites" },
      { link: "/market-reviews", title: " Market Reviews", subTitle: "Build social proof to close more deals" },
      { link: "/analyze-reviews", title: " Analyze Reviews", subTitle: "Track your performance" },
      { link: "/inbox", title: " Inbox", subTitle: "Build customer relationships with Inbox" },

    ],
  },
  {
    id: 3,
    title: "Pricing",
    link: "/pricing",
    has_dropdown: false,
  },


];

export default menuData;