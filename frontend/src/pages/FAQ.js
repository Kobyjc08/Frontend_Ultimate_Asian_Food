import React from "react";
import { Layout } from "../layout/Layout";
import { Container, Breadcrumb } from "react-bootstrap";
import productsimg from "../images/productsimg.png";
import FaqImage from "../images/faq.jpg";

const FAQ = () => {
  return (
    <Layout>
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>FAQ's</Breadcrumb.Item>
        </Breadcrumb>
        <h2 className="red-letters">Frequently Answered Questions</h2>
        <ul class="list-unstyled">
          <li class="media">
            <img src={productsimg} class="mr-3" alt="IndianIcon" />
            <div class="media-body">
              <h5 class="mt-0 mb-1">How can i track my order?</h5>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin. Cras purus odio, vestibulum in
              vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </div>
          </li>
          <li class="media my-4">
            <img src={productsimg} class="mr-3" alt="IndianIcon" />
            <div class="media-body">
              <h5 class="mt-0 mb-1">Which payments are available?</h5>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin. Cras purus odio, vestibulum in
              vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </div>
          </li>
          <li class="media">
            <img src={productsimg} class="mr-3" alt="IndianIcon" />
            <div class="media-body">
              <h5 class="mt-0 mb-1">Can i pick my order in the place?</h5>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin. Cras purus odio, vestibulum in
              vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </div>
          </li>
        </ul>
        <img src={FaqImage} alt="faqImage" />
      </Container>
    </Layout>
  );
};

export default FAQ;
