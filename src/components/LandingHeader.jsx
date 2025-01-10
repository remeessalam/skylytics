import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const LandingHeader = () => {
  const [active, setActive] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset < 250) {
        setScroll(false);
      } else if (window.pageYOffset > 250) {
        setScroll(true);
      }
      return () => (window.onscroll = null);
    };
  }, []);

  const mobileMenu = () => {
    setActive(!active);
  };

  return (
    <>
      {/* Mobile Menu */}
      <div className={`mobile-menu-wrapper ${active ? "body-visible" : ""}`}>
        <div className="mobile-menu-area">
          <div className="mobile-logo">
            <RouterLink to="/">
              <img src="assets/img/logo.png" alt="Bizmaster" />
            </RouterLink>
            <button
              className="menu-toggle"
              style={{ borderColor: "black" }}
              onClick={mobileMenu}
            >
              <i className="fa fa-times" style={{ color: "black" }} />
            </button>
          </div>
          <div className="mobile-menu">
            <ul>
              <li>
                <RouterLink to="/">Home</RouterLink>
              </li>
              <li>
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={mobileMenu}
                >
                  About
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="service"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={mobileMenu}
                >
                  Services
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={mobileMenu}
                >
                  Contact
                </ScrollLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Header Area */}
      <header className="nav-header header-layout4">
        <div
          className={`sticky-wrapper ${scroll && "sticky"}`}
          style={{ background: "white", color: "black" }}
        >
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto">
                <div className="header-logo">
                  <RouterLink to="/">
                    <img
                      src="assets/img/logo.png"
                      alt="logo"
                      style={{ height: "5rem" }}
                    />
                  </RouterLink>
                </div>
              </div>
              <div className="col-auto">
                <nav className="main-menu d-none d-lg-inline-block">
                  <ul>
                    <li>
                      <RouterLink to="/" style={{ color: "black" }}>
                        Home
                      </RouterLink>
                    </li>
                    <li>
                      <ScrollLink
                        to="about"
                        smooth={true}
                        duration={500}
                        offset={-70}
                        style={{ color: "black" }}
                      >
                        About
                      </ScrollLink>
                    </li>
                    <li>
                      <ScrollLink
                        to="service"
                        smooth={true}
                        duration={500}
                        offset={-70}
                        style={{ color: "black" }}
                      >
                        Services
                      </ScrollLink>
                    </li>
                    <li>
                      <ScrollLink
                        to="contact"
                        smooth={true}
                        duration={500}
                        offset={-70}
                        style={{ color: "black" }}
                      >
                        Contact
                      </ScrollLink>
                    </li>
                  </ul>
                </nav>
                <div className="navbar-right d-inline-flex d-lg-none">
                  <button
                    type="button"
                    className="menu-toggle icon-btn"
                    onClick={mobileMenu}
                    style={{ borderColor: "black" }}
                  >
                    <i className="fas fa-bars" style={{ color: "black" }} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default LandingHeader;
