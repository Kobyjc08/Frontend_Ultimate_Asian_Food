import React from "react";
import { Layout } from "../layout/Layout";
import { Container, Breadcrumb } from "react-bootstrap";
import faqImage from "../images/faq_main_xl.jpg";
import faqimg from "../images/faq_icon.png";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const FAQ = () => {
  return (
    <Layout>
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item id="breadcrumb_links_vertical" active>
            FAQ's
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="img-product">
          <img src={faqimg} alt="FAQ Icon" />
        </div>
        <h2 className="red-letters">Frequently Asked Questions</h2>
        <img
          src={faqImage}
          className="col-md-12 col-xs-12 col-sm-12 big-banner"
          alt="aboutImage"
        />
        <Accordion defaultActiveKey="0">
          <Card
            style={{
              backgroundColor: "#8d1a20",
              color: "white",
              marginTop: "30px",
            }}
          >
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                style={{ color: "#faf28e" }}
                variant="link"
                eventKey="0"
              >
                How Can I Order?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                You can order easily using our online platform. When you find a
                product you need, you can add it to cart, login and go through
                the ordering process. After the order is ready, you will receive
                order summary to your email. Order summary will also be stored
                to your account.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card
            style={{
              backgroundColor: "#8d1a20",
              color: "white",
              marginTop: "10px",
            }}
          >
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                style={{ color: "#faf28e" }}
                variant="link"
                eventKey="1"
              >
                Why should I buy online?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                Nowadays by ordering online you're not only speeding up the
                shopping process but also relieving pressure on the traditional
                stores during Covid Times. You will get prices faster and you
                will be able to go through order confirmation and payment
                process much faster. This could save days of your time.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card
            style={{
              backgroundColor: "#8d1a20",
              color: "white",
              marginTop: "10px",
            }}
          >
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                style={{ color: "#faf28e" }}
                variant="link"
                eventKey="1"
              >
                What payment methods can I use?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                You can use all the major credit cards and Pay Pal.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Container>
    </Layout>
  );
};

export default FAQ;
