import React from "react";
import { Button, Container, Col, Image } from 'react-bootstrap';
import { getImages } from "../images/products/products";



const RenderProduct = ({data}) => {
  if (data.length < 1) {
    return <p>Loading...</p>
  }
  return (
        <Container>   
    <div className="main-detailed-product">
        <div className="image-product-detail">
         <Col className="image-product-detail">
         <Image src={getImages(data.product_pic)} rounded />
         </Col>
         </div>
         <div className="info-product-detailed">
                <h3 className="name-detailed-product">{data.product_name}</h3>
                <div className="description-detailed-product">
                <div>Description: </div>
                <div className="description-detailed-p">{data.description}</div>
                </div>
                <div className="description-detailed-product">
                <div>Categorie   : </div>
                <div className="description-detailed-p">{data.name}</div>
                </div>
                <div className="price-detailed-product">
                <div>Price      :</div>
                <h4 className="cart-price">€{data.unit_price}</h4>
                </div>
                <div className="qty-detailed-product">
                    <select>
                        <option value="1">Qty: 1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        </select>
                </div>
                <div className="add-cart-button">
                <Button variant="primary" type="submit">
                <i className="fa fa-shopping-cart"></i>
            Add to Cart
          </Button>
            </div>
                <p className="social">
              <a href="#" className="facebook external">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="twitter external">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="instagram external">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="gplus external">
                <i className="fab fa-google-plus"></i>
              </a>
              <a href="#" className="email external">
                <i className="fa fa-envelope"></i>
              </a>
            </p>
            
                <p className="social text-lg-right">
              <a href="#" className="Mastercard Credit Card">
                <i className="fab fa-cc-mastercard"></i>
              </a>
              <a href="#" className="Visa Credit Card">
                <i className="fab fa-cc-visa"></i>
              </a>
              <a href="#" className="Paypal Credit Card">
                <i className="fab fa-cc-paypal"></i>
              </a>
              <a href="#" className="Amex Credit Card">
                <i className="fab fa-cc-amex"></i>
              </a>
            </p>
        </div>
    </div>
    </Container>
        )
  };

export default RenderProduct;