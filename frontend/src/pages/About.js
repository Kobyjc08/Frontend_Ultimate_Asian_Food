import React from "react";
import { Layout } from "../layout/Layout";
import { Container, Breadcrumb } from "react-bootstrap";
import aboutImage from "../images/about_us.jpg";

const About = () => {
  return (
    <Layout>
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>About</Breadcrumb.Item>
        </Breadcrumb>
        <h2 className="red-letters">About Us</h2>
        <h4>
          We are A professional e-shop for Asian food articles in Spain.
          Established in 2020, this idea was born beacuse the community of
          people from Pakistan, India and Bangladesh is growing steadily and
          will be interested in buying ingredients that they cannot easily find
          in the Spanish shops, in an e-shop. In addition, Spanish people will
          be interested in buying these products to cook this type of food.
        </h4>
        <h4>
          That is the reason why we want to have all the secrets flavors of
          India in one place, Welcome to Ultimate Asian Food!{" "}
        </h4>
        <img src={aboutImage} alt="aboutImage" />
      </Container>
    </Layout>
  );
};

export default About;
