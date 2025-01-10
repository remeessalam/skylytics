import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import HeaderOne from "../components/HeaderOne";
import Breadcrumb from "../components/Breadcrumb";
import FooterOne from "../components/FooterOne";
import Newsletter from "../components/Newsletter";
import ContactInner from "../components/ContactInner";
import HeaderFour from "../components/HeaderFour";
import FooterFour from "../components/FooterFour";

const Contact = () => {
  let [active, setActive] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setActive(false);
    }, 500);
  }, []);
  return (
    <>
      {/* Preloader */}
      {active === true && <Preloader />}

      {/* Helmet */}
      <HelmetReact title={"Contact"} />

      {/* HeaderFive */}
      <HeaderFour />

      {/* Breadcrumb */}
      <Breadcrumb title="Contact" />

      {/* ContactInner */}
      <ContactInner />

      {/* Newsletter */}
      {/* <Newsletter /> */}

      {/* FooterOne */}
      <FooterFour />
    </>
  );
};

export default Contact;
