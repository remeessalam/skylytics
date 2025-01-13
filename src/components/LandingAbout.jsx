import React from "react";

const LandingAbout = ({ page }) => {
  const isWeb = page === "web";

  return (
    <section id="about" className="bg-dark">
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
                  {isWeb
                    ? "Innovative Web Solutions for Digital Growth"
                    : "Seamless Mobile App Solutions for Business Success"}
                </h2>
                <p className="sec-text mb-35 text-white">
                  {isWeb
                    ? "We specialize in delivering robust, scalable, and user-friendly web solutions tailored to meet the unique needs of your business. From custom website development to advanced web applications, we provide cutting-edge technology to ensure a strong online presence and drive growth."
                    : "SKYLYTICS excels in designing and developing mobile applications that combine functionality, performance, and user experience. Our solutions range from native apps to cross-platform frameworks, ensuring your business stays connected with its audience anywhere, anytime."}
                </p>
              </div>
              <div className="row gy-4">
                <div className="col-xxl-6 col-xl-12 col-md-6">
                  <div className="about-grid-wrap">
                    <div className="about-grid-icon">
                      <img src="assets/img/icon/about_icon4-1.svg" alt="icon" />
                    </div>
                    <div className="about-grid-details">
                      <h4 className="about-grid-title text-white">
                        {isWeb
                          ? "Strategic Web Solutions"
                          : "Strategic App Development"}
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-12 col-md-6">
                  <div className="about-grid-wrap">
                    <div className="about-grid-icon">
                      <img src="assets/img/icon/about_icon4-2.svg" alt="icon" />
                    </div>
                    <div className="about-grid-details">
                      <h4 className="about-grid-title text-white">
                        {isWeb
                          ? "Performance Optimization"
                          : "Enhanced App Experience"}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="checklist style7 mt-40">
                <ul>
                  <li>
                    <i className="fas fa-check" />
                    {isWeb
                      ? "Our team of web development experts is dedicated to creating websites and applications that are not only visually appealing but also functionally robust and optimized for performance."
                      : "Our team of mobile app specialists ensures your applications are user-friendly, performant, and aligned with your business goals."}
                  </li>
                  <li>
                    <i className="fas fa-check" />
                    {isWeb
                      ? "Leverage the latest web technologies to stay ahead in the competitive digital landscape and achieve your business objectives."
                      : "Stay connected with your customers and grow your business with mobile solutions designed to meet the needs of modern users."}
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

export default LandingAbout;
