import React from "react";
import { Link } from "react-router-dom";
import { services } from "../constant";

const ServiceFour = () => {
  return (
    <section className="bg-dark">
      <div className="service-area-3 space-bottom overflow-hidden">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="title-area text-center">
                <span className="sub-title text-white">
                  <img src="assets/img/icon/title_left.svg" alt="shape" />
                  Latest Service
                </span>
                <h2 className="sec-title style2 text-white">
                  Maximizing Through the Strategic{" "}
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row gx-30 gy-30 justify-content-center">
            {services.map((obj) => (
              <div key={obj.service} className="col-xl-4 col-md-6">
                <div className="service-card-3">
                  <div className="service-card-icon">
                    {/* {obj.image} */}
                    <img
                      src={obj.image}
                      alt="img"
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                        borderRadius: "100%",
                      }}
                    />
                  </div>
                  <div className="service-card_content">
                    <h4 className="service-card_title">
                      {/* /service-details */}
                      <Link to="#">{obj.service}</Link>
                    </h4>
                    <p className="service-card_text">{obj.description}</p>
                    {/* <Link to="/service-details" className="link-btn">
                      Learn More <i className="fas fa-arrow-right" />
                    </Link> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceFour;
