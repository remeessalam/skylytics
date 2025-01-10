import React from "react";
import { Link } from "react-router-dom";
import {
  FaShoppingCart,
  FaMobileAlt,
  FaUsers,
  FaDesktop,
  FaApple,
  FaAndroid,
  FaReact,
} from "react-icons/fa";

const webServices = [
  {
    service: "E-commerce Websites",
    description:
      "Robust and scalable e-commerce solutions to boost online sales.",
    icon: <FaShoppingCart size={40} className="text-theme" />,
  },
  {
    service: "Social Media Websites",
    description: "Engaging social platforms tailored for community building.",
    icon: <FaUsers size={40} className="text-theme" />,
  },
  {
    service: "Landing Websites",
    description: "High-converting landing pages to capture leads effectively.",
    icon: <FaDesktop size={40} className="text-theme" />,
  },
  {
    service: "Custom Websites",
    description:
      "Fully customized web solutions for your unique business needs.",
    icon: <FaReact size={40} className="text-theme" />,
  },
];

const appServices = [
  {
    service: "iOS App Development",
    description: "Seamless and high-quality iOS apps for Apple devices.",
    icon: <FaApple size={40} className="text-theme" />,
  },
  {
    service: "Android App Development",
    description: "Feature-rich Android apps for a global user base.",
    icon: <FaAndroid size={40} className="text-theme" />,
  },
  {
    service: "Flutter App Development",
    description: "Cross-platform apps built with Google’s Flutter framework.",
    icon: <FaReact size={40} className="text-theme" />,
  },
  {
    service: "Hybrid App Development",
    description: "Cost-effective hybrid apps with native-like performance.",
    icon: <FaMobileAlt size={40} className="text-theme" />,
  },
];

const LandingServices = ({ page }) => {
  const services = page === "web" ? webServices : appServices;

  return (
    <section id="service" className="bg-dark">
      <div className="service-area-3 space-bottom overflow-hidden">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="title-area text-center">
                <span className="sub-title text-white">
                  <img src="assets/img/icon/title_left.svg" alt="shape" />
                  Latest Service
                </span>
                <h2 className="sec-title style2 text-white">
                  {page === "web"
                    ? "Web Development Services"
                    : "App Development Services"}
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row gx-30 gy-30 justify-content-center">
            {services.map((obj) => (
              <div key={obj.service} className="col-xl-6 col-md-6">
                <div className="service-card-3">
                  <div
                    className="service-card-icon"
                    style={{ background: "white" }}
                  >
                    {obj.icon}
                  </div>
                  <div className="service-card_content">
                    <h4 className="service-card_title">
                      <Link to="#">{obj.service}</Link>
                    </h4>
                    <p className="service-card_text">{obj.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingServices;
