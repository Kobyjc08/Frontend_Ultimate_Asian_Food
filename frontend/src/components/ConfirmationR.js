import React, { useEffect, useState } from "react";
import { ul, li, Container, Card , Form, Col} from 'react-bootstrap';
import { Link } from "react-router-dom";
import axios from "axios";
import { getImages } from "../images/products/products";



const InformationR = ({data, total, totalItems, price}) => {
  console.log(data)
  
  

  if (data.length < 1) {
    return <p>Loading...</p>
  }
  return (
    <div className="checkout-main-Confirmation">
    <Card className="card-checkout">
      <h4 className="p-d-checkout">Personal Details</h4>
      <div className="personal-checkout-d">Name : {data[0].firstname} {data[0].lastname} </div>
      <div className="personal-checkout-d">Email : {data[0].user_email} </div>
      <div className="personal-checkout-d">DNI/Passaport : {data[0].dni}</div>
      <h4 className="p-d-checkout">Shipping Details</h4>
    <div className="personal-checkout-d">Shipping address: {data[0].address}</div>
    
    </Card>
    <Card className="card-checkout Card-Information"> 
    <h4 className="p-d-checkout">Order Information</h4>
    <div className="personal-checkout-d">Order Number : {data[0].order_reference} </div>
    <div className="personal-checkout-d">Order Date : {data[0].order_date} </div>
    <div className="personal-checkout-d">Order Total amount : € {total} </div>
    <div className="personal-checkout-d">Order Items: {totalItems} </div>
    <button className="btn btn-primary checkout-button">Track your Order</button>

    </Card>
    </div>
  );
};

export default InformationR;

//btn btn-primary checkout-button