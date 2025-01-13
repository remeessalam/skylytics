import React from "react";
import { Link } from "react-router-dom";
import { services } from "../constant";

const ServiceView = () => {
  return (
    <div className="service-area-1 space overflow-hidden">
      <div className="container">
        <div className="col-xl-12 text-black">
          <div className="title-area mb-40">
            <span className="sub-title text-black">
              <img src="assets/img/icon/title_left.svg" alt="shape" />
              Our Services
            </span>
            <h2 className="sec-title style2 text-black">
              Empowering Your Business with Cutting-Edge Solutions
            </h2>
            <p className="sec-text mb-35 text-black">
              At SKYLYTICS Technologies LLP, we specialize in providing
              innovative tech solutions that help businesses stay ahead of the
              curve. Our services include custom software development,
              AI-powered solutions, full-stack web development, and cloud
              computing, all designed to optimize your operations and drive
              business growth. Whether you need mobile app development, robotic
              process automation, blockchain implementation, or advanced data
              analytics, we have the expertise to create tailored solutions that
              elevate your business.
            </p>
          </div>
        </div>
        <div className="row gx-30 gy-30 justify-content-center">
          {services.map((obj) => (
            <div className="col-md-6">
              <div className="service-card">
                <div className="service-card_img">
                  <img src={obj.image} alt="img" />
                </div>
                <div className="service-card_content">
                  <h4 className="service-card_title">
                    <Link to="/service-details">{obj.service}</Link>
                  </h4>
                  <p className="service-card_text">{obj.description}</p>
                  {/* <Link to="/service-details" className="link-btn">
                    Read More <i className="fas fa-arrow-right" />
                  </Link> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceView;
