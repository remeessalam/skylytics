import React from "react";

const AboutFour = () => {
  return (
    <section className="bg-dark">
      <div className="about-area-3 space">
        <div className="container">
          <div className="row gy-40 gx-60 align-items-center">
            <div className="col-xl-6">
              <div className="about-thumb4">
                <div className="img1">
                  <img src="assets/img/normal/about_4-1.jpg" alt="img" />
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="title-area mb-40">
                <span className="sub-title text-white">
                  <img src="assets/img/icon/title_left.svg" alt="shape" />
                  About Us
                </span>
                <h2 className="sec-title style2 text-white">
                  Innovative Tech Solutions for Business Growth
                </h2>
                <p className="sec-text mb-35 text-white">
                  we specialize in helping businesses unlock their full
                  potential through advanced AI, custom software development,
                  cloud computing, and emerging technologies. We offer
                  innovative solutions in areas like full-stack web development,
                  mobile app development, robotic process automation,
                  blockchain, data analytics, and business intelligence, all
                  designed to streamline operations, enhance customer
                  experiences, and drive business growth.
                </p>
              </div>
              <div className="row gy-4">
                <div className="col-xxl-6 col-xl-12 col-md-6">
                  <div className="about-grid-wrap">
                    <div className="about-grid-icon">
                      <img src="assets/img/icon/about_icon4-1.svg" alt="img" />
                    </div>
                    <div className="about-grid-details">
                      <h4 className="about-grid-title text-white">
                        Strategic Solution
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-12 col-md-6">
                  <div className="about-grid-wrap">
                    <div className="about-grid-icon">
                      <img src="assets/img/icon/about_icon4-2.svg" alt="img" />
                    </div>
                    <div className="about-grid-details">
                      <h4 className="about-grid-title text-white">
                        Perform Enhance
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="checklist style7 mt-40">
                <ul>
                  <li>
                    <i className="fas fa-check" />
                    We are a passionate team of technology experts, developers,
                    and data scientists committed to delivering transformative
                    solutions. Our expertise spans AI, custom software
                    development, blockchain technology, machine learning, cloud
                    services, and more.
                  </li>
                  <li>
                    <i className="fas fa-check" />
                    We aim to help businesses stay ahead of the competition by
                    leveraging the latest technologies to solve complex
                    challenges and enable long-term success.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFour;
