import React from "react";
import { Link } from "react-router-dom";

const HeroFour = () => {
  return (
    <div
      className="hero-wrapper hero-4"
      id="hero"
      style={{
        backgroundImage: "url(assets/img/hero/hero_bg_4_1.jpg)",
        objectFit: "contain",
      }}
    >
      {/* <div className="hero-thumb4-1">
        <img src="assets/img/hero/hero_thumb_4_1.png" alt="img" />
      </div> */}
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="hero-style4">
              <h1 className="hero-title text-white">
                Welcome to
                <span className="text-theme2"> SKYLYTICS Technologies LLP</span>
              </h1>
              <p className="hero-text">
                Leading Innovation with AI, Technology, and Tailored Solutions
              </p>
              <div className="btn-wrap">
                <Link to="/about" className="global-btn style-border3">
                  Learn More <i className="fas fa-arrow-right ms-2" />
                </Link>
                <div className="hero-tag">
                  <div className="about-experience-tag">
                    <span className="circle-title-anime">
                      <span className="char1">s</span>
                      <span className="char2">k</span>
                      <span className="char3">y</span>
                      <span className="char4">l</span>
                      <span className="char5">y</span>
                      <span className="char6">t</span>
                      <span className="char7">i</span>
                      <span className="char8">c</span>
                      <span className="char9">s</span>
                      <span className="char10"></span>
                      <span className="char11">T</span>
                      <span className="char12">e</span>
                      <span className="char13">c</span>
                      <span className="char14">h</span>
                      <span className="char15">n</span>
                      <span className="char16">o</span>
                      <span className="char17">l</span>
                      <span className="char18">o</span>
                      <span className="char19">g</span>
                      <span className="char20">i</span>
                      <span className="char21">e</span>
                      <span className="char22">s</span>
                      {/* <span className="char18"></span>*/}
                      {/* <span className="char23"> </span> */}
                      {/* <span className="char24">l</span> */}
                      {/* <span className="char25">l</span> */}
                      {/* <span className="char26">p</span> */}
                      {/* <span className="char23"></span> */}
                    </span>
                  </div>
                  <div className="hero-tag_icon">
                    <i className="fas fa-arrow-right" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroFour;
