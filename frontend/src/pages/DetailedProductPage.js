import React, { useState, useEffect } from "react";
import { Container, Breadcrumb } from "react-bootstrap";
import axios from "axios";
import { Layout } from "../layout/Layout";
import Company from "../components/Company.js";

import DetailedProductRender from '../components/DetailedProductRender'

const DetailedProduct = () => {

  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/productsByID/6").then(function (response) {
      setProduct(response.data);
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
        <DetailedProductRender data={product}/>
        <Company />
      </Container>
    </Layout>
  );
};

export default DetailedProduct;