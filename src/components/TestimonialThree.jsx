import React from "react";
import Slider from "react-slick";
import { testimonials } from "../constant";
import testimonial from "../assets/images/human-brain-detailed-structure.jpg";
import { FaUser } from "react-icons/fa";
const TestimonialThree = () => {
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className="TestimonialThree-icon-box-next">
        <button onClick={onClick} className="slick-arrow default">
          <img src="assets/img/icon/arrow-long-right.svg" alt="img" />
        </button>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div className="TestimonialThree-icon-box-prev">
        <button onClick={onClick} className="slick-arrow default">
          <img src="assets/img/icon/arrow-long-left.svg" alt="img" />
        </button>
      </div>
    );
  }

  let settings = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {},
      },
      {
        breakpoint: 992,
        settings: {},
      },
      {
        breakpoint: 768,
        settings: {},
      },
    ],
  };
  return (
    <section className="bg-dark">
      <div className="testimonial-area-4 space-bottom overflow-hidden">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6">
              <div className="title-area text-center">
                <span className="sub-title text-white" data-aos="fade-up">
                  <img src="assets/img/icon/title_left.svg" alt="shape" />
                  Clients Testimonial
                </span>
                <h2 className="sec-title style2 text-white" data-aos="fade-up">
                  Innovation Moves You Forward{" "}
                </h2>
              </div>
            </div>
          </div>
          <div className="row g-0 align-items-center">
            <div className="col-lg-5">
              <div className="testi-area-slider4">
                <div className="row global-carousel testi-slider-4">
                  <Slider {...settings}>
                    {testimonials.map((obj) => (
                      <div
                        key={obj.name}
                        className="px-2"
                        data-aos="fade-right"
                      >
                        <div className="testi-card style2">
                          <div className="testi-card_content">
                            <div className="testi-card-profile">
                              <div className="testi-profile_thumb">
                                <FaUser />

                                {/* <img
                                  src="assets/img/testimonial/testi-thumb_1.png"
                                  alt="img"
                                /> */}
                              </div>
                              <div className="testi-card-profile-details">
                                <h4 className="testi-profile-title">
                                  {obj.name}
                                </h4>
                                <span className="testi-profile-desig">
                                  {obj.role}
                                </span>
                              </div>
                            </div>
                            <p className="testi-card_text">{obj.testimonial}</p>
                            <div className="rating">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </div>
                          </div>
                          <div className="quote-icon">
                            <img src="assets/img/icon/quote1-1.svg" alt="img" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="testimonial-thumb1" data-aos="fade-left">
                <img
                  src={testimonial}
                  alt="img"
                  style={{ maxHeight: "60vh", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialThree;
