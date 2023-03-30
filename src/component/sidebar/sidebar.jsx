import React from "react";
import Content from "../content/content";
import "./sidebar.scss";
function Sidebar() {
  return (
    <div className="wrapper-slider">
      <div className="header-page">
        <div className="nameHeader">
          Đinh Dũng <span>Gem.SD</span>
        </div>
        <div className="linkingHeader">
          <a
            href="https://www.facebook.com/dinhdung.gemini"
            target="_blank"
            rel="noreferrer"
          >
            <ion-icon className="iconLinking" name="logo-facebook"></ion-icon>
          </a>
          <a
            href="https://www.instagram.com/gemini.ds/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <ion-icon className="iconLinking" name="logo-instagram"></ion-icon>
          </a>
          <a
            href="https://m.me/dinhdung.gemini"
            target="_blank"
            rel="noreferrer"
          >
            <ion-icon
              className="iconLinking"
              name="chatbubble-outline"
            ></ion-icon>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
