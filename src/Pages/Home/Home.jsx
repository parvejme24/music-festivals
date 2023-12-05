import React from "react";
import { Helmet } from "react-helmet";
import Banner from "./Banner";
import CallToAction from "./CallToAction";
import EventSchedule from "./EventSchedule";
import EventsCampaign from "./EventsCampaign";
import FeaturedFestival from "./FeaturedFastival";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Music Festival | Home</title>
      </Helmet>
      <Banner></Banner>
      <Services></Services>
      <EventSchedule></EventSchedule>
      <CallToAction></CallToAction>
      <EventsCampaign></EventsCampaign>
      <FeaturedFestival></FeaturedFestival>
    </div>
  );
};

export default Home;
