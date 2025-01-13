import React, { useState } from "react";
import { Link } from "react-router-dom";

const MainHero = ({ page }) => {
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
              At SKYLYTICS Technologies LLP, we deliver innovative solutions
              like custom software, AI, mobile apps, and cloud computing to
              optimize operations and drive growth. Partner with us to stay
              ahead in today's dynamic business landscape.
            </p>
            <div className="btn-group">
              <Link to="/about" className="global-btn" data-aos="fade-up">
                Explore Our Services
                <img src="assets/img/icon/right-icon.svg" alt="Bizmaster" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHero;
