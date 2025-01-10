import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import Breadcrumb from "../components/Breadcrumb";
import GoalArea from "../components/GoalArea";
import AboutOne from "../components/AboutOne";
import ProcessThree from "../components/ProcessThree";
import TestimonialOne from "../components/TestimonialOne";
import CounterOne from "../components/CounterOne";
import WhyChoose from "../components/WhyChoose";
import FooterOne from "../components/FooterOne";
import Newsletter from "../components/Newsletter";
import HeaderFour from "../components/HeaderFour";
import AboutFour from "../components/AboutFour";
import WhyChooseUs from "../components/WhyChooseUs";
import TestimonialThree from "../components/TestimonialThree";
import Industries from "../components/FeatureOne";
import FooterFour from "../components/FooterFour";

const About = () => {
  let [active, setActive] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setActive(false);
    }, 500);
  }, []);
  return (
    <div style={{ backgroundColor: "black" }}>
      {/* Preloader */}
      {active === true && <Preloader />}

      {/* Helmet */}
      <HelmetReact title={"About"} />

      {/* HeaderFive */}
      <HeaderFour />

      {/* Breadcrumb */}
      <Breadcrumb title="About Us" />

      {/* GoalArea */}
      <AboutFour />
      {/* <GoalArea /> */}
      <WhyChooseUs />
      {/* AboutOne */}
      {/* <AboutOne /> */}

      {/* ProcessThree */}
      {/* <ProcessThree /> */}
      <div className="space">
        <Industries />
      </div>
      {/* TestimonialOne */}
      <div className="">
        <TestimonialThree />
      </div>

      {/* CounterOne */}
      {/* <CounterOne /> */}

      {/* WhyChoose */}
      {/* <div className="space">
        <WhyChoose />
      </div> */}

      {/* Newsletter */}
      {/* <Newsletter /> */}

      {/* FooterOne */}
      <FooterFour />
    </div>
  );
};

export default About;
