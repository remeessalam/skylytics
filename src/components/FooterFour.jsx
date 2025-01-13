import React from "react";
import { Link } from "react-router-dom";
import { companyDetails } from "../constant";
import { BsTwitterX } from "react-icons/bs";

const FooterFour = () => {
  return (
    <section className="bg-dark">
      <footer
        className="footer-wrapper footer-layout4"
        style={{ backgroundColor: "#b4b4b4" }}
        // style={{ backgroundImage: "url(assets/img/bg/footer-bg4-1.png)" }}
      >
        <div className="container">
          <div className="widget-area">
            <div className="row justify-content-between">
              <div className="col-md-6 col-xl-3">
                <div className="widget footer-widget widget-about">
                  <div className="about-logo">
                    <Link to="/">
                      <img
                        src="assets/img/logo.png"
                        alt="Bizmaster"
                        style={{ height: "5rem" }}
                      />
                    </Link>
                  </div>
                  <p
                    className="footer-text mb-30 mt-30 "
                    style={{ color: "black" }}
                  >
                    It is a long established fact that a reader will be
                    distracted
                  </p>
                  <div className="social-btn" style={{ color: "black" }}>
                    <Link to="#" tabIndex={-1}>
                      <i
                        className="fab fa-facebook-f"
                        style={{ color: "black" }}
                      />
                    </Link>
                    <Link to={companyDetails.x} tabIndex={-1}>
                      <BsTwitterX
                        className="fab fa-x"
                        style={{ color: "black" }}
                      />

                      {/* <i classNasme="fab fa-x" style={{ color: "black" }} /> */}
                    </Link>
                    <Link to={companyDetails.instagram} tabIndex={-1}>
                      <i
                        className="fab fa-instagram"
                        style={{ color: "black" }}
                      />
                    </Link>
                    <Link to="#" tabIndex={-1}>
                      <i
                        className="fab fa-linkedin-in"
                        style={{ color: "black" }}
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-auto">
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title" style={{ color: "black" }}>
                    Quick Link
                  </h3>
                  <div className="menu-all-pages-container">
                    <ul className="menu">
                      <li>
                        <Link to="/" style={{ color: "black" }}>
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link to="/contact" style={{ color: "black" }}>
                          Contact
                        </Link>
                      </li>
                      <li>
                        <Link to="/service" style={{ color: "black" }}>
                          Service
                        </Link>
                      </li>
                      <li>
                        <Link to="/about" style={{ color: "black" }}>
                          About Us
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <div className="col-md-6 col-xl-auto">
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title">Services</h3>
                  <div className="menu-all-pages-container">
                    <ul className="menu">
                      <li>
                        <Link to="/service">Reliable Rentals</Link>
                      </li>
                      <li>
                        <Link to="/service">Golden Key Properties</Link>
                      </li>
                      <li>
                        <Link to="/service">Swift Home Sales</Link>
                      </li>
                      <li>
                        <Link to="/service">Elite Realty Services</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div> */}
              <div className="col-md-6 col-xl-3">
                <div className="widget footer-widget">
                  <h3 className="widget_title" style={{ color: "black" }}>
                    Our Office
                  </h3>
                  <div className="widget-contact2">
                    <div className="widget-contact-grid">
                      <i className="fas fa-phone-alt text-white" />
                      <div className="contact-grid-details">
                        <h6>
                          <Link to="#" style={{ color: "black" }}>
                            {companyDetails.phone}
                          </Link>
                          <p />
                        </h6>
                      </div>
                    </div>
                    <div className="widget-contact-grid">
                      <i className="fas fa-envelope text-white" />
                      <div className="contact-grid-details">
                        <h6>
                          <Link to="#" style={{ color: "black" }}>
                            {companyDetails.email}
                          </Link>
                          <p />
                        </h6>
                      </div>
                    </div>
                    <div className="widget-contact-grid">
                      <i className="fas fa-map-marker-alt text-white" />
                      <div className="contact-grid-details">
                        <h6 style={{ color: "black" }}>
                          {companyDetails.address}
                          <p />
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container">
          <div className="copyright-wrap">
            <div className="row gy-3 justify-content-lg-between justify-content-center">
              <div className="col-auto align-self-center">
                <p className="copyright-text text-center">
                  © <Link to="#">Bizmaster </Link> 2024 | All Rights Reserved
                </p>
              </div>
              <div className="col-auto">
                <div className="footer-links">
                  <Link to="/contact">Trams &amp; Condition</Link>
                  <Link to="/contact">Privacy Policy</Link>
                  <Link to="/contact">Contact Us</Link>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </footer>
    </section>
  );
};

export default FooterFour;
