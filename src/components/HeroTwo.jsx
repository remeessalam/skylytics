import React, { useState } from "react";
import { Link } from "react-router-dom";

const LandingHero = ({ page }) => {
  const isWeb = page === "web"; // Determine if the type is for 'web'

  return (
    <>
      <div
        className="hero-wrapper hero-2"
        id="hero"
        style={{ backgroundImage: "url(assets/img/hero/hero_bg_4_1.jpg)" }}
      >
        <div className="container">
          <div className="hero-style2">
            <h1 className="hero-title text-white" data-aos="fade-up">
              Welcome to
              <span className="hero-title2"> SKYLYTICS</span> Technologies LLP
            </h1>
            <p className="hero-text text-white" data-aos="fade-up">
              {isWeb
                ? "SKYLYTICS specializes in creating cutting-edge websites that combine innovation, scalability, and user-centric design."
                : "Build seamless and scalable mobile apps tailored to your needs with SKYLYTICS Technologies LLP."}
            </p>
            <div className="btn-group">
              <Link to="/about" className="global-btn" data-aos="fade-up">
                {isWeb
                  ? "Explore Our Web Services"
                  : "Explore Our App Services"}
                <img src="assets/img/icon/right-icon.svg" alt="Bizmaster" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingHero;
