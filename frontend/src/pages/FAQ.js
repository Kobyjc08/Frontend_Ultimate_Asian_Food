import React from "react";
import { Layout } from "../layout/Layout";
import { Container, Breadcrumb } from "react-bootstrap";
import faqImage from "../images/faq_main_xl.jpg";
import faqimg from "../images/faq_icon.png";

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
        <ul class="list-unstyled blockquote2">
          <li class="media">
            <img src={faqimg} class="mr-3" alt="FAQ Icon" />
            <div class="media-body">
              <h4 class="mt-0 mb-1 new-titles">How Can I Track My Order?</h4>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin. Cras purus odio, vestibulum in
              vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </div>
          </li>
          <li class="media my-4">
            <img src={faqimg} class="mr-3" alt="FAQ Icon" />
            <div class="media-body">
              <h4 class="mt-0 mb-1 new-titles">
                Which Payments Are Available?
              </h4>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin. Cras purus odio, vestibulum in
              vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </div>
          </li>
          <li class="media">
            <img src={faqimg} class="mr-3" alt="FAQ Icon" />
            <div class="media-body">
              <h4 class="mt-0 mb-1 new-titles">
                Can I Pick My Order At Your Company?
              </h4>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin. Cras purus odio, vestibulum in
              vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </div>
          </li>
        </ul>
      </Container>
    </Layout>
  );
};

export default FAQ;
