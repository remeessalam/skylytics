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
            <h1 className="hero-title text-white">
              Welcome to
              <span className="hero-title2"> Skylytics</span> Technologies LLP
            </h1>
            <p className="hero-text text-white">
              {isWeb
                ? "Skylytics specializes in creating cutting-edge websites that combine innovation, scalability, and user-centric design."
                : "Build seamless and scalable mobile apps tailored to your needs with Skylytics Technologies LLP."}
            </p>
            <div className="btn-group">
              <Link to="/about" className="global-btn">
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
