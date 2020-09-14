import React, { useState, useEffect } from "react";
import { Container, Breadcrumb } from "react-bootstrap";
import axios from "axios";
import { Layout } from "../layout/Layout";
import Company from "../components/Company.js";
import productsimg from "../images/productsimg.png";
import FavoriteProducts from "../components/FavoriteProducts.js";
import DetailedProductRender from '../components/DetailedProductRender';

const DetailedProduct = () => {

  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/productsByID/6").then(function (response) {
      setProduct(response.data);
    });
  }, []);

  const [favoriteProducts, setFavoriteProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/favorites").then(function (response) {
      setFavoriteProducts(response.data);
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
        <div className="img-product">
          <img src={productsimg} alt="product"></img>
        </div>
        <h2 className="red-letters">PRODUCTS</h2>
        <FavoriteProducts data={favoriteProducts}/>
        <Company />
      </Container>
    </Layout>
  );
};

export default DetailedProduct;