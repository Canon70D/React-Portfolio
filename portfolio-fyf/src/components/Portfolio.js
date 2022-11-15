import React from "react";
import "./Portfolio.css";
import Project1 from "../assets/project_1.png";
import Project2 from "../assets/project_2.jpg";
import Project3 from "../assets/project_3.jpg";
import Project4 from "../assets/project_4.jpg";
import Project7 from "../assets/project_7.jpg";
import Project6 from "../assets/project_6.png";

function Portfolio() {
  return (
    <div className="project component_space" id="Portfolio">
      <div className="heading">
        <h1 className="heading">Portfolio</h1>
        <p className="heading p_color">
          Please see my work below or visit my{" "}
          <a
            className="git_link"
            href="https://github.com/Canon70D"
            target="_blank"
            rel="noreferrer"
          >
            Github Page
          </a>
        </p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col_3">
            <div className="project_box pointer relative">
              <div className="project_box_img pointer relative">
                <img src={Project1} alt="" className="project_img" />
              </div>
              <div className="project_meta absolute">
                <h4 className="project_text">Nibbles</h4>
                <h5 className="project_text">
                  Food recipes application <br />
                  <br />
                  HTML, Tailwind CSS, JavaScript,Third Party API
                </h5>
                <a
                  href="https://rouge86.github.io/Nibbles/"
                  target="_blank"
                  rel="noreferrer"
                  className="project_btn"
                >
                  Details
                </a>
                <a
                  href="https://github.com/rouge86/Nibbles"
                  target="_blank"
                  rel="noreferrer"
                  className="project_btn"
                >
                  Github
                </a>
              </div>
            </div>
          </div>

          <div className="col_3">
            <div className="project_box pointer relative">
              <div className="project_box_img pointer relative">
                <img src={Project2} alt="" className="project_img" />
              </div>
              <div className="project_meta absolute">
                <h4 className="project_text">KryptoHack</h4>
                <h5 className="project_text">
                  Crypto view application <br />
                  <br />
                  NodeJS, ExpressJS, MySql, Third Party API
                  <br />
                </h5>
                <a
                  href="https://kryptohack.herokuapp.com/login"
                  target="_blank"
                  rel="noreferrer"
                  className="project_btn"
                >
                  Details
                </a>
                <a
                  href="https://github.com/Canon70D/KryptoHack"
                  target="_blank"
                  rel="noreferrer"
                  className="project_btn"
                >
                  Github
                </a>
              </div>
            </div>
          </div>

          <div className="col_3">
            <div className="project_box pointer relative">
              <div className="project_box_img pointer relative">
                <img src={Project3} alt="" className="project_img" />
              </div>
              <div className="project_meta absolute">
                <h4 className="project_text">Tech-Blog</h4>
                <h5 className="project_text">
                  A CMS-style blog site <br />
                  <br />
                  MySql, Sequelizer, CSS, NodeJS, ExpressJS
                </h5>
                <a
                  href="https://tect-blog-fyf.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="project_btn"
                >
                  Details
                </a>
                <a
                  href="https://github.com/Canon70D/Tech-Blog"
                  target="_blank"
                  rel="noreferrer"
                  className="project_btn"
                >
                  Github
                </a>
              </div>
            </div>
          </div>

          <div className="col_3">
            <div className="project_box pointer relative">
              <div className="project_box_img pointer relative">
                <img src={Project4} alt="" className="project_img" />
              </div>
              <div className="project_meta absolute">
                <h4 className="project_text">Text-Editor</h4>
                <h5 className="project_text">
                  Single-page application that meets the PWA criteria <br />
                  <br />
                  Manifest, Service Worker, Webpack, PWA
                </h5>
                <a
                  href="https://jate-fyf.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="project_btn"
                >
                  Details
                </a>
                <a
                  href="https://github.com/Canon70D/Text-Editor"
                  target="_blank"
                  rel="noreferrer"
                  className="project_btn"
                >
                  Github
                </a>
              </div>
            </div>
          </div>

          <div className="col_3">
            <div className="project_box pointer relative">
              <div className="project_box_img pointer relative">
                <img src={Project7} alt="" className="project_img" />
              </div>
              <div className="project_meta absolute">
                <h4 className="project_text">P.O.S</h4>
                <h5 className="project_text">
                  A customized Point of Sale Application <br />
                  <br />
                  MERN, GraphQL
                </h5>
                <a
                  href="https://guarded-meadow-66403.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="project_btn"
                >
                  Details
                </a>
                <a
                  href="https://github.com/Canon70D/POS"
                  target="_blank"
                  rel="noreferrer"
                  className="project_btn"
                >
                  Github
                </a>
              </div>
            </div>
          </div>

          <div className="col_3">
            <div className="project_box pointer relative">
              <div className="project_box_img pointer relative">
                <img src={Project6} alt="" className="project_img" />
              </div>
              <div className="project_meta absolute">
                <h4 className="project_text">Weather-Dashboard</h4>
                <h5 className="project_text">
                  A simple application for 5-day weather forcast <br />
                  <br />
                  HTML, CSS, JavaScript, Third Party API
                </h5>
                <a
                  href="https://canon70d.github.io/Weather-Dashboard/"
                  target="_blank"
                  rel="noreferrer"
                  className="project_btn"
                >
                  Details
                </a>
                <a
                  href="https://canon70d.github.io/Weather-Dashboard/"
                  target="_blank"
                  rel="noreferrer"
                  className="project_btn"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
