import React from "react";
import "./content.scss";
import Demo from "../../assets/img/anh_demo.jpg";
import react from "../../assets/react.svg";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import { TypeAnimation } from "react-type-animation";
function Content() {
  return (
    <div className="wrapper-content">
      <div className="intro">
        <h2>
          <TypeAnimation
            sequence={[
              "",
              1000,
              "👋 Hi, I’m Dũng",
              3000, // Waits 1s
              "I’m 2️⃣2️⃣", // Deletes 'One' and types 'Two'
              2000, // Waits 2s
              "I’m from Bắc Ninh 🏠",
              2000,
              "I’m sin... ❤️❓",
              500,
              "......  🤫🤫🤫", // Types 'One'
              2000, // Types 'Three' without deleting 'Two'
              "Welcome to my page 💕",
              3000,
            ]}
            className="text"
            wrapper="div"
            cursor={false}
            repeat={Infinity}
            speed={1}
            omitDeletionAnimation={false}
            deletionSpeed={1}
          />
          <div className="typing">|</div>
        </h2>
        <div className="intro-content">
          I currently work full-time as a <span> Software Engineer</span> with a
          passion. I build open-source projects for fun. I taught myself how to
          make websites first as a hobby and later as a professional programmer.
        </div>
        <div className="some-infor">
          <div className="infor-top">
            I’m looking for new opportunities <br></br>
            I’m working at
            <span> Hà Nội</span>
          </div>
          <div className="infor-bottom">
            Bắc Ninh <br></br>
            <span> dungbn2000@gmail.com</span>
          </div>
        </div>
        <div className="checked">👇Check some projects</div>
      </div>
      <div className="demo">
        <div className="main">
          <div className="img-main">
            <img alt="" src={Demo} />
            <div className="tech">FrontEnd</div>
          </div>
          <div className="main-script">
            <div className="text-main">Đinh Dũng</div>
            <div className="subtext-main">D__</div>
          </div>
          <div className="box box-react">
            <img src={react} alt="" />
          </div>
          <div className="box box-html">
            <img src={html} alt="" />
          </div>
          <div className="box box-css">
            <img src={css} alt="" />
          </div>
          <div className="box box-js">
            <img src={js} alt="" />
          </div>
          <div className="box-item item-icon">🔔 Icons</div>
          <div className="box-item item-kit">🎨 UI</div>
          <div className="box-item item-research">🔍 Research</div>
          <div className="box-item item-flow">💻 DEV</div>
          <div className="box-item item-font">💖</div>
        </div>
      </div>
    </div>
  );
}

export default Content;
