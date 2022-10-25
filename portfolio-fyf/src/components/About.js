import React from "react";
import "./About.css";
import aboutImg from "../assets/about.jpg";

function About() {
  return (
    <div className="about component_space">
      <div className="container">
        <div className="row">
          <div className="col_2">
            <img src={aboutImg} alt="" className="about_img" />
          </div>
          <div className="col_2">
            <h1 className="about_heading">About Me</h1>
            <div className="about_mate">
              <p className="about_text p_color">
                this text is for space taking only, more details will be updated
                later this text is for space taking only, more details will be
                updated later this text is for space taking only, more details
                will be updated later this text is for space taking only, more
                details will be updated later this text is for space taking
                only, more details will be updated later.
              </p>
              <p className="about_text p_color">
                this text is for space taking only, more details will be updated
                later this text is for space taking only, more details will be
                updated later this text is for space taking only, more details
                will be updated later this text is for space taking only, more
                details will be updated later this text is for space taking
                only, more details will be updated later.
              </p>
              <p className="about_text p_color">
                this text is for space taking only, more details will be updated
                later this text is for space taking only, more details will be
                updated later this text is for space taking only, more details
                will be updated later this text is for space taking only, more
                details will be updated later this text is for space taking
                only, more details will be updated later.
              </p>
              <p className="about_text p_color">
                this text is for space taking only, more details will be updated
                later this text is for space taking only, more details will be
                updated later this text is for space taking only, more details
                will be updated later this text is for space taking only, more
                details will be updated later this text is for space taking
                only, more details will be updated later.
              </p>
              <p className="about_text p_color">
                this text is for space taking only, more details will be updated
                later this text is for space taking only, more details will be
                updated later this text is for space taking only, more details
                will be updated later this text is for space taking only, more
                details will be updated later this text is for space taking
                only, more details will be updated later.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
