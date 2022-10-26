import React from "react";
import "./Contact.css";
import contactImg from "../assets/contact.jpg";
function Contact() {
  return (
    <div className="contact component_space" id="Contact">
      <div className="row">
        <div className="col_2">
          <div className="contact_box">
            <div className="contact_meta">
              <h1 className="contact_text">Contact Me</h1>
              <p className="contact_text white">Connect with me via Email:</p>
              <p className="contact_text white">
                <strong>admin@example.com</strong>
              </p>
            </div>
            <div className="input_box">
              <input
                type="text"
                className="contact name"
                placeholder="Your name *"
              />
              <input
                type="text"
                className="contact email"
                placeholder="Your Email *"
              />
              <textarea
                name="message"
                id="message"
                placeholder="Write Your message"
              ></textarea>
              <button className="btn contact pointer" type="submit">
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="col_2">
          <img src={contactImg} alt="" className="contact_img" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
