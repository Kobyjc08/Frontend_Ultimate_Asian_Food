import React, { useEffect, useState } from "react";
import { ul, li, Container, Card , Form, Col} from 'react-bootstrap';
import { Link } from "react-router-dom";
import axios from "axios";
import { getImages } from "../images/products/products";



const CheckoutR = ({data, total, totalItems, price}) => {
  console.log(data)
  let customers_id = localStorage.getItem("id"); // get id from logged-user
  const [inputs, setInputs] = useState({
    card_number: "",
    card_holder_name: "",
    card_expiry_date: "",
    cvv_code : ""
  });

  const { card_number, card_holder_name, card_expiry_date, cvv_code } = inputs;

  const onChange = (e) =>
    setInputs({ ...inputs, [e.target.card_number]: e.target.value });

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { card_number, card_holder_name, card_expiry_date, cvv_code, customers_id };
      const response = await fetch(
        "http://localhost:5000/authentication/register",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(body),
        }
      )} catch (err) {
      console.error(err.message);
       } 
    } ;

  if (data.length < 1) {
    return <p>Loading...</p>
  }
  return (
    <div className="checkout-main">
    <Card className="card-checkout">
      <h3 className="p-d-checkout">Personal Details</h3>
      <div className="personal-checkout-d">Name : {data[0].firstname} {data[0].lastname} </div>
      <div className="personal-checkout-d">Email : {data[0].user_email} </div>
      <div className="personal-checkout-d">DNI/Passaport : {data[0].dni}</div>
      <h3 className="p-d-checkout">Shipping Details</h3>
    <div className="personal-checkout-d">Shipping address: {data[0].address}</div>

    <Form onSubmit={onSubmitForm}>
           
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Card Number</Form.Label>
                <Form.Control
                  type="text"
                  name="card_number"
                  value={card_number}
                  placeholder="Card Number"
                  onChange={(e) => onChange(e)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Card Holder Name</Form.Label>
                <Form.Control
                  type="text"
                  name="card_holder_name"
                  value={card_holder_name}
                  placeholder="Card Holder Name"
                  onChange={(e) => onChange(e)}
                />
              </Form.Group>
            
             <Form.Row>
            <Form.Group as={Col}> 
              <Form.Label>Security Code CCV</Form.Label>
              <Form.Control
                type="text"
                name="ccv_code"
                value={cvv_code}
                placeholder="CCV"
                onChange={(e) => onChange(e)}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Expire date</Form.Label>
              <Form.Control
                type="text"
                name="card_expire_date"
                value={card_expiry_date}
                placeholder="Expire Date"
                onChange={(e) => onChange(e)}
              />
            </Form.Group>
            </Form.Row>
    </Form>
    </Card>
    
     <Container>
        <h4 className="title-price">Price</h4>
        {data.map ((product, index) => {
            return (
        <div key={index}>
        <ul className="list-unstyled">
          <li className="media">
              <img src={getImages(product.product_pic)} className="mr-3 Cart-pic" alt="CartProducts"/>
              <div className="media-body display-checkout-cart">
              <h4 className="mt-0 mb-1 name-p-cart">{product.product_name}</h4>
              <h5 className="unit-price-cart ">Qty:{product.quantity}</h5>
              <h5 className="unit-price-cart">Price :€{product.unit_price}</h5>
              </div>
              <h3 className="cart-price">€{product.unit_price * product.quantity}</h3>
            </li>
          </ul>
        </div>
        )
        }
        )}
        <div className="cart-action">
            <h4>Subtotal ({totalItems} items): € {total} </h4>
            <div className=" d-flex justify-content-end">
              <Link to="#" className="btn btn-primary checkout-button chk-button">
                <Link to="/checkout">Place and Order!!</Link>
              </Link>
            </div>
        </div>
        </Container>
       
    </div>
  );
};

export default CheckoutR;