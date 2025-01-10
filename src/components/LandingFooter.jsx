import React from "react";
import { Link } from "react-router-dom";
import { companyDetails } from "../constant";
import { Link as ScrollLink } from "react-scroll";

const LandingFooter = () => {
  return (
    <section className="bg-dark">
      <footer
        className="footer-wrapper footer-layout4"
        style={{ backgroundImage: "url(assets/img/bg/footer-bg4-1.png)" }}
      >
        <div className="container">
          <div className="widget-area">
            <div className="row justify-content-between">
              <div className="col-md-6 col-xl-3">
                <div className="widget footer-widget widget-about">
                  <div className="about-logo">
                    <Link to="/">
                      <img src="assets/img/logo-white.svg" alt="Bizmaster" />
                    </Link>
                  </div>
                  <p className="footer-text mb-30 mt-30">
                    It is a long established fact that a reader will be
                    distracted
                  </p>
                  <div className="social-btn">
                    <Link to="#" tabIndex={-1}>
                      <i className="fab fa-facebook-f" />
                    </Link>
                    <Link to="#" tabIndex={-1}>
                      <i className="fab fa-twitter" />
                    </Link>
                    <Link to="#" tabIndex={-1}>
                      <i className="fab fa-instagram" />
                    </Link>
                    <Link to="#" tabIndex={-1}>
                      <i className="fab fa-linkedin-in" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-auto">
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title">Quick Link</h3>
                  <div className="menu-all-pages-container">
                    <ul className="menu">
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <ScrollLink
                          to="contact"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                        >
                          Contact
                        </ScrollLink>
                      </li>
                      <li>
                        <ScrollLink
                          to="service"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                        >
                          Service
                        </ScrollLink>
                      </li>
                      <li>
                        <ScrollLink
                          to="about"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                        >
                          About Us
                        </ScrollLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-3">
                <div className="widget footer-widget">
                  <h3 className="widget_title">Our Office</h3>
                  <div className="widget-contact2">
                    <div className="widget-contact-grid">
                      <i className="fas fa-phone-alt text-white" />
                      <div className="contact-grid-details">
                        <h6>
                          <Link to="#">{companyDetails.phone}</Link>
                          <p />
                        </h6>
                      </div>
                    </div>
                    <div className="widget-contact-grid">
                      <i className="fas fa-envelope text-white" />
                      <div className="contact-grid-details">
                        <h6>
                          <Link to="#">{companyDetails.email}</Link>
                          <p />
                        </h6>
                      </div>
                    </div>
                    <div className="widget-contact-grid">
                      <i className="fas fa-map-marker-alt text-white" />
                      <div className="contact-grid-details">
                        <h6>
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
      </footer>
    </section>
  );
};

export default LandingFooter;
