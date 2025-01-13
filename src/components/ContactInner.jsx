import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { companyDetails } from "../constant";
import { BsTwitterX } from "react-icons/bs";

const ContactInner = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Handle form submission here
    console.log(data);
    // You can also send the data to a backend or API here
  };

  return (
    <>
      <div className="map-sec" data-aos="fade-up">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7795.494697764477!2d77.70408739088752!3d12.955951070004169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1be55c0eac91%3A0x8db971f49d27627d!2sSBB%20Diamond%2C%20Hoodi%20Main%20Road%2C%20Ayyappa%20Nagar%2C%20Krpuram.%20Bangalore%20%23560036%20Karnataka!5e0!3m2!1sen!2sin!4v1673257108130!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          title="Bizmaster"
        />
      </div>
      <div className="contact-area space" data-aos="fade-up">
        <div className="container">
          <div className="contact-page-wrap bg-theme">
            <div className="row gy-40 align-items-center">
              <div className="col-lg-4 col-md-6">
                <div className="contact-info">
                  <div className="contact-info_icon">
                    <i className="fas fa-phone-alt" />
                  </div>
                  <div className="contact-info_details">
                    <h6 className="contact-info_title">Phone</h6>
                    <p className="contact-info_text">
                      <span>{companyDetails.phone}</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="contact-info">
                  <div className="contact-info_icon">
                    <i className="fas fa-map-marker-alt" />
                  </div>
                  <div className="contact-info_details">
                    <h6 className="contact-info_title">Location</h6>
                    <p className="contact-info_text">
                      {companyDetails.address}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="contact-info">
                  <div className="contact-info_icon">
                    <i className="fas fa-envelope" />
                  </div>
                  <div className="contact-info_details">
                    <h6 className="contact-info_title">Email</h6>
                    <p className="contact-info_text">
                      <span>{companyDetails.email}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space-bottom">
        <div className="container">
          <div className="row gy-40 justify-content-between">
            <div className="col-lg-4">
              <div className="title-area mb-0">
                <span className="sub-title" data-aos="fade-right">
                  <img src="assets/img/icon/title_left.svg" alt="shape" />
                  Contact Us
                </span>
                <h2 className="sec-title style2" data-aos="fade-right">
                  Get In Touch
                </h2>
                <p className="mb-40" data-aos="fade-right">
                  Design is this a broad category encompasses various
                  technological solutions
                </p>
                <div className="social-btn style4" data-aos="fade-right">
                  <Link to="#" tabIndex={-1}>
                    <i className="fab fa-facebook-f" />
                  </Link>
                  <Link to="#" tabIndex={-1}>
                    <i className="fab fa-linkedin-in" />
                  </Link>
                  <Link to={companyDetails.x} tabIndex={-1}>
                    {/* <i className="fab fa-twitter" /> */}
                    <BsTwitterX
                      className="fab fa-x"
                      style={{ color: "black" }}
                    />
                  </Link>
                  <Link to={companyDetails.instagram} tabIndex={-1}>
                    <i className="fab fa-instagram" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-8" data-aos="fade-left">
              <div className="contact-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="form-control style-border"
                        {...register("name", {
                          required: "Your name is required",
                        })}
                      />
                      {errors.name && (
                        <p className="error">{errors.name.message}</p>
                      )}
                    </div>
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        placeholder="Your Email"
                        className="form-control style-border"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value:
                              /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                            message: "Enter a valid email address",
                          },
                        })}
                      />
                      {errors.email && (
                        <p className="error">{errors.email.message}</p>
                      )}
                    </div>
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        placeholder="Phone Number"
                        className="form-control style-border"
                        {...register("phone", {
                          required: "Phone number is required",
                        })}
                      />
                      {errors.phone && (
                        <p className="error">{errors.phone.message}</p>
                      )}
                    </div>
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        placeholder="Subject"
                        className="form-control style-border"
                        {...register("subject", {
                          required: "Subject is required",
                        })}
                      />
                      {errors.subject && (
                        <p className="error">{errors.subject.message}</p>
                      )}
                    </div>
                    <div className="col-12 form-group">
                      <textarea
                        placeholder="Message here.."
                        className="form-control style-border"
                        {...register("message", {
                          required: "Message is required",
                        })}
                      />
                      {errors.message && (
                        <p className="error">{errors.message.message}</p>
                      )}
                    </div>
                    <div className="col-12 form-group mb-0">
                      <button type="submit" className="global-btn w-100">
                        Send Now
                        <img
                          src="assets/img/icon/right-icon.svg"
                          alt="Bizmaster"
                        />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInner;
