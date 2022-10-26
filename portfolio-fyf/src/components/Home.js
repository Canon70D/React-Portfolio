import React, { useState } from "react";
import "./Home.css";

function Home() {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });

  // Toogle Menu
  const [show, setShow] = useState(true);

  return (
    <div className="home" id="Home">
      <div className="home_bg">
        <div className="header d_flex align_items_center pxy_30">
          <div className="navigation pxy_30">
            <ul className="navbar d_flex">
              <a href="#Home">
                <li className="nav_items mx_15 ">Home</li>
              </a>
              <a href="#About">
                <li className="nav_items mx_15 ">About</li>
              </a>
              <a href="#Portfolio">
                <li className="nav_items mx_15 ">Portfolio</li>
              </a>
              <a href="#Contact">
                <li className="nav_items mx_15 ">Contact</li>
              </a>
              <a href="#Resume">
                <li className="nav_items mx_15 ">Resume</li>
              </a>
            </ul>
          </div>
          {/* Toogle Menu */}
          <div className="toggle_menu">
            <svg
              onClick={() => setShow(!show)}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-justify white pointer"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
          {show ? (
            <div className="sideNavbar">
              <ul className="sidebar d_flex">
                <li className="sideNavbar">
                  <a href="#Home">Home</a>
                </li>
                <li className="sideNavbar">
                  <a href="#About">About</a>
                </li>
                <li className="sideNavbar">
                  <a href="#Portfolio">Portfolio</a>
                </li>
                <li className="sideNavbar">
                  <a href="#Contact">Contact</a>
                </li>
                <li className="sideNavbar">
                  <a href="#Resume">Resume</a>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
        <div className="container">
          <div className="home_contect">
            <div className="home_meta">
              <h1 className="home_text pz_10">Hello, my name is</h1>
              <h2 className="home_text pz_10">Feiyu Yin</h2>
              <h3 className="home_text pz_10">
                I am studying to become a Full Stack Developer
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
