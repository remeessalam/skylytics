import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import LandingHeader from "../components/LandingHeader";
import HelmetReact from "../elements/HelmetReact";
import LandingHero from "../components/HeroTwo";
import LandingAbout from "../components/LandingAbout";
import LandingServices from "../components/LandingServices";
import Industries from "../components/FeatureOne";
import TestimonialThree from "../components/TestimonialThree";
import AppointmentTwo from "../components/AppointmentTwo";
import LandingLeadform from "../components/LandingLeadform";
import LandingFooter from "../components/LandingFooter";

const LandingPage = ({ page }) => {
  let [active, setActive] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setActive(false);
    }, 500);
  }, []);
  return (
    <div>
      {active === true && <Preloader />}
      <HelmetReact title={"Landing-Page"} />
      <LandingHeader />
      <LandingHero page={page} />

      <LandingAbout page={page} />
      <LandingServices page={page} />
      <Industries />
      <TestimonialThree />
      <LandingLeadform />
      <LandingFooter />
    </div>
  );
};

export default LandingPage;
