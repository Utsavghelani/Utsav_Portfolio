import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Main.scss";
import Utsav from "../assets/images/jutsav.jpeg";

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={Utsav} className="zoom" alt="thumbnail" width="100%" />
        </div>
        <div className="content">
          {/* <div className="social_icons">
            <a
              href="https://github.com/trgoti2812"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/tirth-goti-0066432b1"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div> */}
          <h1>Utsav Ghelani</h1>
          <p>Full Stack Developer</p>

          {/* <div className="mobile_social_icons">
            <a
              href="https://github.com/trgoti2812"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/tirth-goti-0066432b1"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Main;
