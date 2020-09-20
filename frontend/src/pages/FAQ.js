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
        <div id="accordion" className="panel-group">
          <div className="panel panel-warning">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a
                  href="#panelBodyOne"
                  data-toggle="collapse"
                  data-parent="#accordion"
                >
                  How Can I Track My Order?
                </a>
              </h4>
            </div>
            <div id="panelBodyOne" className="panel-collapse collapse">
              <div className="panel-body">
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                  vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                  nisi vulputate fringilla. Donec lacinia congue felis in
                  faucibus.
                </p>
              </div>
            </div>
          </div>
          <div className="panel panel-warning">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a
                  href="#panelBodyTwo"
                  data-toggle="collapse"
                  data-parent="#accordion"
                >
                  Which Payments Are Available?
                </a>
              </h4>
            </div>
            <div id="panelBodyTwo" className="panel-collapse collapse">
              <div className="panel-body">
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                  vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                  nisi vulputate fringilla. Donec lacinia congue felis in
                  faucibus.
                </p>
              </div>
            </div>
          </div>
          <div className="panel panel-warning">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a
                  href="#panelBodyThree"
                  data-toggle="collapse"
                  data-parent="#accordion"
                >
                  Can I Pick My Order At Your Company?
                </a>
              </h4>
            </div>
            <div id="panelBodyThree" className="panel-collapse collapse">
              <div className="panel-body">
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                  vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                  nisi vulputate fringilla. Donec lacinia congue felis in
                  faucibus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default FAQ;
