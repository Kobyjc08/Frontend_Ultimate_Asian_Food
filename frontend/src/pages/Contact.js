import React from "react";
import { Layout } from "../layout/Layout";
import { Container, Breadcrumb } from "react-bootstrap";
import productsimg from "../images/productsimg.png";

const Contact = () => {
  return (
    <Layout>
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Contact-Us</Breadcrumb.Item>
        </Breadcrumb>
        <h2 className="red-letters">Customer Service - Contact us!</h2>
        <ul class="list-unstyled">
          <li class="media">
            <img src={productsimg} class="mr-3" alt="IndianIcon" />
            <div class="media-body">
              <h5 class="mt-0 mb-1">Localization</h5>
              <div>Carrer Puig i Fabra 456, Barcelona. Spain.</div>
              Mon - Fri 8:00 to 16:00
            </div>
          </li>

          <li class="media my-4">
            <img src={productsimg} class="mr-3" alt="IndianIcon" />
            <div class="media-body">
              <h5 class="mt-0 mb-1">Call Us!</h5>
              +34 933 596 485
            </div>
          </li>
          <li class="media">
            <img src={productsimg} class="mr-3" alt="IndianIcon" />
            <div class="media-body">
              <h5 class="mt-0 mb-1">Social Hub</h5>
              <div>Facebook: @Ultimate.Asian.Food</div>
              Instagram: @Ultimate.Asian.Food
            </div>
          </li>
        </ul>
      </Container>
    </Layout>
  );
};

export default Contact;
