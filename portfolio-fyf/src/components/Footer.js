import React from "react";
import footerImg from "../assets/footer.jpg";

function Footer() {
  return (
    <div
      className="footer d_flex align_items_center justify_content_space_between pz-10"
      style={{ padding: "10px 20px", zIndex: "100" }}
    >
      <a
        className="git_link"
        href="https://github.com/Canon70D"
        target="_blank"
        rel="noreferrer"
      >
        <img src={footerImg} alt="" className="footer_img pointer" />
      </a>
      <span
        className="writing"
        style={{ color: "#c6c9d8", fontSize: "14px", opacity: "0.75" }}
      >
        Made by FYF
      </span>
    </div>
  );
}

export default Footer;
