import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import HeaderOne from "../components/HeaderOne";
import Breadcrumb from "../components/Breadcrumb";
import FooterOne from "../components/FooterOne";
import Newsletter from "../components/Newsletter";
import ServiceView from "../components/ServiceView";
import AppointmentTwo from "../components/AppointmentTwo";
import HeaderFour from "../components/HeaderFour";
import FooterFour from "../components/FooterFour";

const Service = () => {
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
      <HelmetReact title={"Service"} />

      {/* HeaderFive */}
      <HeaderFour />

      {/* Breadcrumb */}
      <Breadcrumb title="Service" />

      {/* ServiceOne */}
      <ServiceView />

      {/* AppointmentTwo */}
      <AppointmentTwo />

      {/* Newsletter */}
      {/* <Newsletter /> */}

      {/* FooterOne */}
      <FooterFour />
    </>
  );
};

export default Service;
