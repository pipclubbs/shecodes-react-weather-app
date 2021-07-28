import React from "react";

export default function Footer() {
  return (
      <div className="footer d-flex gap-2 justify-content-center">
      <span className="footer-text">
        <a
          href="https://github.com/pipclubbs/shecodes-react-weather-app"
          target="_blank" rel="noreferrer"
        >
          open-source code
        </a> {""} by Phillippa Clubbs 
      </span>
      <a href="https://www.linkedin.com/in/phillippaclubbs/" target="_blank" rel="noreferrer">
        <img
          src="/images/linkedin_logo.png"
          alt="LinkedIn logo"
          className="linkedin"
        />
      </a>
    </div>
  );
}
