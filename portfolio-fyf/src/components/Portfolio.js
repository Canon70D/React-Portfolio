import React from "react";
import "./Portfolio.css";
import Project1 from "../assets/project_1.png";
import Project2 from "../assets/project_2.jpg";
import Project3 from "../assets/project_3.jpg";
import Project4 from "../assets/project_4.jpg";
import Project5 from "../assets/project_5.png";
import Project6 from "../assets/project_6.png";

function Portfolio() {
  return (
    <div className="portfolio component_space">
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
            <div className="portfolio_box pointer">
              <div className="portfolio_meta">
                <h1 className="portfolio_text">Nibbles</h1>
                <p className="portfolio_text p_color">
                  Food recipes application <br />
                  <a
                    className="git_link"
                    href="https://github.com/rouge86/Nibbles"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Go to Github
                  </a>
                </p>
              </div>
            </div>
            <div className="img_box pointer relative">
              <div className="portfolio_box_img">
                <div className="portfolio_img_box">
                  <img src={Project1} alt="" className="project_img" />
                </div>
                <div className="mask_effect"></div>
              </div>
              <div className="project_meta absolute">
                <h4 className="project_text">Nibbles</h4>
                <h5 className="project_text">
                  HTML, Tailwind CSS, JavaScript,Third Party API
                </h5>
                <a
                  href="https://rouge86.github.io/Nibbles/"
                  target="_blank"
                  rel="noreferrer"
                  className="project_btn"
                >
                  view details
                </a>
              </div>
            </div>
          </div>

          <div className="col_3">
            <div className="portfolio_box pointer">
              <div className="portfolio_meta">
                <h1 className="portfolio_text">KryptoHack</h1>
                <p className="portfolio_text p_color">
                  Crypto view application <br />
                  <a
                    className="git_link"
                    href="https://github.com/Canon70D/KryptoHack"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Go to Github
                  </a>
                </p>
              </div>
            </div>
            <div className="img_box pointer relative">
              <div className="portfolio_box_img">
                <div className="portfolio_img_box">
                  <img src={Project2} alt="" className="project_img" />
                </div>
                <div className="mask_effect"></div>
              </div>
              <div className="project_meta absolute">
                <h4 className="project_text">KryptoHack</h4>
                <h5 className="project_text">
                  JavaScript, HTML, CSS, Bootstrap <br />
                  NodeJS, ExpressJS, MySql, Third Party API
                  <br />
                </h5>
                <a
                  href="https://kryptohack.herokuapp.com/login"
                  target="_blank"
                  rel="noreferrer"
                  className="project_btn"
                >
                  view details
                </a>
              </div>
            </div>
          </div>

          <div className="col_3">
            <div className="portfolio_box pointer">
              <div className="portfolio_meta">
                <h1 className="portfolio_text">Tech-Blog</h1>
                <p className="portfolio_text p_color">
                  A CMS-style blog site <br />
                  <a
                    className="git_link"
                    href="https://github.com/Canon70D/Tech-Blog"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Go to Github
                  </a>
                </p>
              </div>
            </div>
            <div className="img_box pointer relative">
              <div className="portfolio_box_img">
                <div className="portfolio_img_box">
                  <img src={Project3} alt="" className="project_img" />
                </div>
                <div className="mask_effect"></div>
              </div>
              <div className="project_meta absolute">
                <h4 className="project_text">Tech-Blog</h4>
                <h5 className="project_text">
                  MySql, Sequelizer, CSS, NodeJS, ExpressJS
                </h5>
                <a
                  href="https://tect-blog-fyf.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="project_btn"
                >
                  view details
                </a>
              </div>
            </div>
          </div>

          <div className="col_3">
            <div className="portfolio_box pointer">
              <div className="portfolio_meta">
                <h1 className="portfolio_text">Text-Editor</h1>
                <p className="portfolio_text p_color">
                  A single-page application that meets the PWA criteria <br />
                  <a
                    className="git_link"
                    href="https://github.com/Canon70D/Text-Editor"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Go to Github
                  </a>
                </p>
              </div>
            </div>
            <div className="img_box pointer relative">
              <div className="portfolio_box_img">
                <div className="portfolio_img_box">
                  <img src={Project4} alt="" className="project_img" />
                </div>
                <div className="mask_effect"></div>
              </div>
              <div className="project_meta absolute">
                <h4 className="project_text">Text-Editor</h4>
                <h5 className="project_text">
                  Manifest, Service Worker, Webpack, PWA
                </h5>
                <a
                  href="https://jate-fyf.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="project_btn"
                >
                  view details
                </a>
              </div>
            </div>
          </div>

          <div className="col_3">
            <div className="portfolio_box pointer">
              <div className="portfolio_meta">
                <h1 className="portfolio_text">Note-Taker</h1>
                <p className="portfolio_text p_color">
                  A simple note taking application <br />
                  <a
                    className="git_link"
                    href="https://github.com/Canon70D/Note-Taker"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Go to Github
                  </a>
                </p>
              </div>
            </div>
            <div className="img_box pointer relative">
              <div className="portfolio_box_img">
                <div className="portfolio_img_box">
                  <img src={Project5} alt="" className="project_img" />
                </div>
                <div className="mask_effect"></div>
              </div>
              <div className="project_meta absolute">
                <h4 className="project_text">Note-Taker</h4>
                <h5 className="project_text">NodeJS, ExpressJS</h5>
                <a
                  href="https://note-taker-allenyin.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="project_btn"
                >
                  view details
                </a>
              </div>
            </div>
          </div>

          <div className="col_3">
            <div className="portfolio_box pointer">
              <div className="portfolio_meta">
                <h1 className="portfolio_text">Weather-Dashboard</h1>
                <p className="portfolio_text p_color">
                  A simple application for 5-day weather forcast <br />
                  <a
                    className="git_link"
                    href="https://github.com/Canon70D/Weather-Dashboard"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Go to Github
                  </a>
                </p>
              </div>
            </div>
            <div className="img_box pointer relative">
              <div className="portfolio_box_img">
                <div className="portfolio_img_box">
                  <img src={Project6} alt="" className="project_img" />
                </div>
                <div className="mask_effect"></div>
              </div>
              <div className="project_meta absolute">
                <h4 className="project_text">Weather-Dashboard</h4>
                <h5 className="project_text">
                  HTML, CSS, JavaScript, Third Party API
                </h5>
                <a
                  href="https://canon70d.github.io/Weather-Dashboard/"
                  target="_blank"
                  rel="noreferrer"
                  className="project_btn"
                >
                  view details
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
