import React from "react";
import { useForm } from "react-hook-form";

const LandingLeadform = () => {
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
    <div
      id="contact"
      className="appointment-area-2 space-bottom space-top overflow-hidden"
      style={{ background: "black" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="appointment-thumb-2">
              <img
                src="assets/img/normal/appointment-thumb-2-1.jpg"
                alt="img"
              />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="appointment-form-wrap">
              <div className="title-area mb-30 ">
                <span className="sub-title text-white">
                  <img src="assets/img/icon/title_left.svg" alt="shape" />
                  Talk to Us
                </span>
                <h2 className="sec-title style2 text-white">
                  Strategic Solutions
                </h2>
              </div>
              <form
                className="appointment-form"
                onSubmit={handleSubmit(onSubmit)} // On form submit
              >
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control style-border2"
                        name="name"
                        id="name"
                        placeholder="Full name"
                        {...register("name", {
                          required: "Full name is required",
                        })}
                      />
                      {errors.name && (
                        <p className="error">{errors.name.message}</p>
                      )}
                      <i className="fas fa-user" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control style-border2"
                        name="email"
                        id="email"
                        placeholder="Your mail"
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
                      <i className="fas fa-envelope" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        className="form-control style-border2"
                        placeholder="Enter Subject"
                        {...register("subject", {
                          required: "Subject is required",
                        })}
                      />
                      {errors.subject && (
                        <p className="error">{errors.subject.message}</p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="form-group col-12">
                  <textarea
                    placeholder="Write your message"
                    id="contactForm"
                    className="form-control style-border2"
                    {...register("message", {
                      required: "Message is required",
                    })}
                  />
                  {errors.message && (
                    <p className="error">{errors.message.message}</p>
                  )}
                </div>
                <div className="form-btn col-12">
                  <button
                    type="submit"
                    className="global-btn style-border text-white"
                  >
                    Send Now
                    <i className="fas fa-arrow-right ms-2" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingLeadform;
