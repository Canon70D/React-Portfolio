import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
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
