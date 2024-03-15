import React, { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({
    email: false,
    name: false,
    subject: false,
    message: false,
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    else if (name === "name") setName(value);
    else if (name === "subject") setSubject(value);
    else if (name === "message") setMessage(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      email: !email,
      name: !name,
      subject: !subject,
      message: !message,
    };
    setErrors(newErrors);

    if (
      !newErrors.email &&
      !newErrors.name &&
      !newErrors.subject &&
      !newErrors.message
    ) {
      const newEntryRef = firebase.firestore().collection("messages");
      newEntryRef
        .add({
          email,
          name,
          subject,
          message,
        })
        .then(() => {
          setSuccessMessage("Your message was sent successfully!");
          setErrorMessage("");
          // Clear form fields
          setEmail("");
          setName("");
          setSubject("");
          setMessage("");
        })
        .catch((error) => {
          setErrorMessage(
            "An error occurred while sending your message. Please try again later."
          );
          setSuccessMessage("");
          console.error("Error sending message:", error);
        });
    } else {
      setErrorMessage("Please fill in all required fields.");
      setSuccessMessage("");
    }
  };

  const iconPath = process.env.PUBLIC_URL;

  return (
    <div className="contact-form" id="contact">
      <div
        className="sub-text-box mb-5"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <h2>Get in touch</h2>
      </div>

      <form
        className="form"
        onSubmit={handleSubmit}
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <div className="title">
          <h6>New Message</h6>
        </div>
        <div className="m-0 separator"></div>
        {/* <div className="separator separator-last"></div> */}
        <div className="item">
          <label htmlFor="email" className="label block">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            placeholder="Enter your email address"
            onChange={handleInputChange}
            className={`input-field mt-1 p-2 ${
              errors.email ? "border-red-500" : ""
            }`}
          />
          {errors.email && (
            <p className="text-red-500 error-text">Email is required</p>
          )}
        </div>
        <div className="separator"></div>
        <div className="item">
          <label htmlFor="name" className="label block">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            placeholder="Enter your name"
            onChange={handleInputChange}
            className={`input-field mt-1 p-2 ${
              errors.name ? "border-red-500" : ""
            }`}
          />
          {errors.name && (
            <p className="text-red-500 error-text">Name is required</p>
          )}
        </div>
        <div className="separator"></div>
        <div className="item">
          <label htmlFor="subject" className="label block">
            Subject:
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={subject}
            placeholder="Enter subject"
            onChange={handleInputChange}
            className={`input-field mt-1 p-2 ${
              errors.subject ? "border-red-500" : ""
            }`}
          />
          {errors.subject && (
            <p className="text-red-500 error-text">Subject is required</p>
          )}
        </div>
        <div className="separator separator-last"></div>
        <div className="item">
          <textarea
            id="message"
            name="message"
            rows="4"
            value={message}
            placeholder="Enter your message"
            onChange={handleInputChange}
            className={` message mt-1 p-2 ${
              errors.message ? "border-red-500" : ""
            }`}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 error-text">Message is required</p>
          )}
        </div>
        <div className="mt-6 flex flex-row items-center mb-2">
          <button type="submit" className="button">
            Send
          </button>
          {successMessage && (
            <p className="text-green-500 ml-5">{successMessage}</p>
          )}

          {errorMessage && <p className="text-red-500 ml-5">{errorMessage}</p>}
        </div>
      </form>
      <div
        className="contact-icons"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <ul className="socials">
          <li>
            <a href="mailto:msafwan@sabanciuniv.edu" target="_blank" rel="noreferrer">
              <img
                src={iconPath + "/nav-bar-icons/contact.svg"}
                className="nav-icon"
                alt="contact"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/safwanyasin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className="fab fa-linkedin fa-lg"
                style={{ color: "#fff" }}
              ></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/safwanyasin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github fa-lg" style={{ color: "#fff" }}></i>
            </a>
          </li>
          <li>
            <a
              href="https://discord.com/users/733394310715801730"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-discord fa-lg" style={{ color: "#fff" }}></i>
            </a>
          </li>
          <li>
            <a
              href="https://behance.net/safwanyasin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-behance fa-lg" style={{ color: "#fff" }}></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.upwork.com/freelancers/~010406e4270587a14a"
              target="_blank"
              rel="noreferrer"
            >
              <img src={iconPath + "/upwork.svg"} className="nav-icon" alt="upwork"/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
