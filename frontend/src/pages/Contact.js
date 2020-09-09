import React from "react";
import { Layout } from "../layout/Layout";
import { Container, Breadcrumb } from "react-bootstrap";
import productsimg from "../images/productsimg.png";
import contactimg from "../images/contact_us_icon.png";

const Contact = () => {
  return (
    <Layout>
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item id="breadcrumb_links_vertical" active>
            Contact-Us
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="img-product">
          <img src={contactimg} alt="Contact Us Icon" />
        </div>
        <h2 className="red-letters">Contact Us</h2>
        <iframe
          title="Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1496.7257113413923!2d2.1812495913419974!3d41.38600187916257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2fdd0e1fc7b%3A0xb5044c6bb1c3dfd3!2sCarrer%20del%20Rec%2C%2027%2C%2008003%20Barcelona!5e0!3m2!1ses!2ses!4v1599586036100!5m2!1ses!2ses"
          width="1138"
          height="350"
          frameborder="0"
          style={{ border: 0 }}
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
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
