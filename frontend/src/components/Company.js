import React from "react";
import picAbout from "../images/about_us.jpg";
import picFaq from "../images/faq.jpg";
import productsimg from "../images/about_us_icon.png";

const Company = () => {
  return (
    <div className="company-main">
      <div className='img-product'>
          <img src={productsimg} alt='About Us Icon' />
        </div>
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

          <div className="centered-about-company"></div>
        </div>

        <div className="container-faq-company">
          <img
            className="img-container-faq-company"
            src={picFaq}
            alt="about"
          ></img>

          <div className="centered-faq-company"></div>
        </div>
      </div>
    </div>
  );
};

export default Company;
