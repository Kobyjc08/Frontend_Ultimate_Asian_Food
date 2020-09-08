import React, { useState, useEffect } from "react";
import { Container, Breadcrumb } from "react-bootstrap";
import axios from "axios";
import { Layout } from "../layout/Layout";
import Company from "../components/Company.js";
import FavoriteProducts from "../components/FavoriteProducts"

const LentilsRicesFlour = () => {

  const [lentilsRiceCategorie, setlentilsRiceCategorie] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/productsByCategory/Lentils").then(function (response) {
      setlentilsRiceCategorie(response.data);
      console.group(response.data);
    });
  }, []);

  return (
    <Layout>
      <Container>
      <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Lentils/Rices/Flour</Breadcrumb.Item>
        </Breadcrumb>
        <h3 className="red-letters">
        - Try our delicious products that will add a delicious flavor to your meals! -</h3>
        <FavoriteProducts data={lentilsRiceCategorie}/>
        <Company />
      </Container>
    </Layout>
  );
};

export default LentilsRicesFlour;
