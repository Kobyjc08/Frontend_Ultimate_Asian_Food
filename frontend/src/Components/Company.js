import React from "react";
import picAbout from "../images/about_us.jpg";
import picFaq from "../images/faq.jpg";

const Company = () => {
  return (
    <div className="company-main">
      <div className="heading-company">
        <h1 className="red-letters">COMPANY</h1>
      </div>

      <div className="container-company">
        <div className="container-about-company">
          <img
            className="img-container-about-company"
            src={picAbout}
            alt="about"
          ></img>

          <div className="centered-about-company">
            <h1>About Us</h1>
            <h3>A professional e shop for asian food articles in Spain</h3>
            <a href="https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_image_text">
              Read More!
            </a>
          </div>
        </div>

        <div className="container-faq-company">
          <img
            className="img-container-faq-company"
            src={picFaq}
            alt="about"
          ></img>

          <div className="centered-faq-company">
            <h1>FAQ</h1>
            <h3>
              Answers on a particular topic.The format is often used online.
            </h3>
            <a href="https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_image_text">
              Read More!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
