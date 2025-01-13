import React from "react";
import { industries } from "../constant";

const Industries = () => {
  return (
    <section className="bg-dark">
      <div className="feature-area-4 space-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="title-area text-center">
                <span className="sub-title text-white" data-aos="fade-up">
                  <img src="assets/img/icon/title_left.svg" alt="shape" />
                  Industries We Serve
                </span>
                <h2 className="sec-title style1 text-white" data-aos="fade-up">
                  Our technology solutions are designed to make a meaningful
                  impact across a variety of industries:
                </h2>
              </div>
            </div>
          </div>
          <div className="feature-wrap4">
            <div className="feature-bg-line">
              <img
                src="assets/img/feature/feature_line.png"
                alt="img"
                data-aos="fade-up"
              />
            </div>
            <div className="row gy-80 justify-content-center justify-content-lg-between align-items-center">
              {industries.map((industry, index) => (
                <>
                  {
                    <>
                      <div className="col-lg-5 order-lg-2">
                        {/* <div className="feature-thumb4-1">
                          <img
                            src="assets/img/feature/feature-4-1.png"
                            alt="img"
                          />
                        </div> */}
                      </div>
                      <div
                        className="col-xl-5 col-lg-6 order-lg-1"
                        data-aos="fade-up"
                      >
                        <div className="feature-content">
                          <h4 className="feature-content-title text-white mb-20">
                            {industry.title}
                          </h4>
                          <p className="feature-content-text mb-30 text-white">
                            {industry.description}
                          </p>
                          {/* <div className="row">
                            <div className="col-lg-6">
                              <div className="checklist style-white2">
                                <ul>
                                  <li>
                                    <i className="fas fa-check" /> Mistakes To
                                    Avoid
                                  </li>
                                  <li>
                                    <i className="fas fa-check" /> Your Startup
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="checklist style-white2">
                                <ul>
                                  <li>
                                    <i className="fas fa-check" /> Mistakes To
                                    Avoid
                                  </li>
                                  <li>
                                    <i className="fas fa-check" /> Your Startup
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div> */}
                        </div>
                      </div>
                      {/* <div className="col-lg-6 order-3">
                        <div className="feature-thumb4-1">
                          <img
                            src="assets/img/feature/feature-4-2.png"
                            alt="img"
                          />
                        </div>
                      </div> */}
                    </>
                  }
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
