import React, { useState, useEffect } from "react";
import Carrousel from './components/Carrousel';
import { Container } from 'react-bootstrap';
import FavoriteProducts from "./components/FavoriteProducts.js";
import Company from "./components/Company.js";
import axios from "axios";

import { Layout } from "./layout/Layout";

function App() {
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/favorites')
    .then(function (response) {
      setFavoriteProducts (response.data)
    });
  }, [])

  return <Layout>
    <Container fluid >
      <Carrousel />
      <FavoriteProducts data={favoriteProducts}/>
      <Company />
    </Container>
  </Layout>;
}

export default App;
