import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ title }) => {
  return (
    <div
      className="breadcumb-wrapper"
      style={{
        backgroundImage: "url(assets/img/normal/bannerimage.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          background: "black",
          width: "100%",
          height: "100%",
          opacity: ".3",
        }}
      ></div>
      {/* bg animated image/ */}
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="breadcumb-content">
              <h1 className="breadcumb-title text-white" data-aos="fade-up">
                {title}
              </h1>
              <ul className="breadcumb-menu" data-aos="fade-up">
                <li style={{ color: "white" }}>
                  <Link to="/" style={{ color: "white" }}>
                    Home
                  </Link>
                </li>
                <li className="active text-white">{title}</li>
              </ul>
            </div>
          </div>
          {/* <div className="col-lg-6 d-lg-block d-none">
                        <div className="breadcumb-thumb">
                            <img src="assets/img/normal/breadcrumb-thumb.png" alt="img" />
                        </div>
                    </div> */}
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
