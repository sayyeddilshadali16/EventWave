import React from "react";
import LandingPage from "./LandingPage";
import Marquee from "./Marquee";
import Events from "./Events";
import EventCards from "./EventCards";

const Hero = () => {
  return (
    <div>
      <LandingPage />
      <Marquee />
      <Events />
      <EventCards />
    </div>
  );
};

export default Hero;
