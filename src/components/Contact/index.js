import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(event) {
    setContactInfo({
      ...contactInfo,
      [event.target.name]: event.target.value,
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(contactInfo);
    setContactInfo({ name: "", email: "", subject: "", message: "" });
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }
  return (
    <div className="flex w-full h-full justify-center items-center">
      <section className="mb-4">
        <h2 className="h1-responsive font-weight-bold text-center my-4">
          Contact me
        </h2>
        <p className="text-center w-responsive mx-auto mb-5">
          Do you have any questions? Please do not hesitate to contact me
          directly.
        </p>
        <div className="flex row  w-full justify-center">
          <div className="col-md-9 mb-md-0 mb-5 flex justify-center w-full">
            <form id="contact-form" name="contact-form">
              <h2 className="email">chrisphailey@gmail.com</h2>
              <h2 className="number">901-573-1374</h2>
              {/* <div className="row">
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      onChange={handleChange}
                      value={contactInfo.name}
                    />
                    <label for="name" class="">
                      Your name
                    </label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      onChange={handleChange}
                      value={contactInfo.email}
                    />
                    <label for="email" class="">
                      Your email
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control"
                      onChange={handleChange}
                      value={contactInfo.subject}
                    />
                    <label for="subject" class="">
                      Subject
                    </label>
                  </div>
                </div>
              </div>
              <div className="row block">
                <div className="col-md-12">
                  <div className="md-form">
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      rows="2"
                      className="md-textarea form-control"
                      onChange={handleChange}
                      value={contactInfo.message}
                    ></textarea>
                    <label for="message">Your message</label>
                  </div>
                </div>
              </div>
              <div className="text-center text-md-left flex justify-start">
                <button className="btn btn-primary" type="button">
                  Send
                </button>
              </div>
              <div className="status"></div> */}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
