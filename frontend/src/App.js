import React from "react";
import Carrousel from './components/Carrousel';
import { Container } from 'react-bootstrap';
import FavoriteProducts from "./components/FavoriteProducts.js";
import Company from "./components/Company.js";

import { Layout } from "./layout/Layout";

function App() {
  return <Layout>
    <Container fluid >
      <Carrousel />
      <FavoriteProducts />
      <Company />
    </Container>
  </Layout>;
}

export default App;
