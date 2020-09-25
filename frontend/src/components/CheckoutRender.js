import React, { useEffect } from "react";
import { ul, li, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import axios from "axios";
import { getImages } from "../images/products/products";



const CheckoutR = ({data, total, totalItems, price}) => {
  console.log(data)

  if (data.length < 1) {
    return <p>Loading...</p>
  }
  return (
    <div className="checkout-main">
        
        <Container>
        <h4 className="title-price">Price</h4>
        {data.map ((product, index) => {
            return (
    <div key={index}>
        <ul className="list-unstyled">
          <li className="media">
            <img src={getImages(product.product_pic)} className="mr-3 Cart-pic" alt="CartProducts"/>
            <div className="media-body">
                <h4 className="mt-0 mb-1">{product.product_name}</h4>
                <div className="description-cart">{product.description}</div>
            <h5 className="unit-price-cart">Qty:{product.quantity}</h5>
            <h5 className="unit-price-cart">Price :€{product.unit_price}</h5>
              </div>
            <h3 className="cart-price">€{product.unit_price * product.quantity}</h3>
          </li>
        </ul>
    </div>
        )
        }
        )}
        
        </Container>
        <div className="cart-action">
            <h4>Subtotal ({totalItems} items): € {total} </h4>
            <div className=" d-flex justify-content-end">
              <Link to="#" className="btn btn-primary checkout-button">
                <Link to="/checkout">Place and Order!!</Link>
              </Link>
            </div>
        </div>
    </div>
  );
};

export default CheckoutR;