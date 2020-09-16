import React, { useState, useEffect } from "react";
import { Container, Breadcrumb } from "react-bootstrap";
import axios from "axios";
import { Layout } from "../layout/Layout";
import Company from "../components/Company.js";

import CartRender from '../components/Cart'

const ShoppingCart = () => {

  const [Cart, setCart] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/productsByCategory/Desserts").then(function (response) {
      setCart(response.data);
      console.group(response.data);
    });
  }, []);

  return (
    <Layout>
      <Container>
      <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>ShoopingCart</Breadcrumb.Item>
        </Breadcrumb>
        <h3 className="red-letters">
        - Your Cart -</h3>
        <CartRender data={Cart}/>
        <Company />
      </Container>
    </Layout>
  );
};

export default ShoppingCart;
