import React from "react";
import Carrousel from './components/Carrousel';
import {Container} from 'react-bootstrap'
import FavoriteProducts from "./components/FavoriteProducts.js";
import Company from "./components/Company.js";

import "./App.css";
import { Layout } from "./layout/Layout";

function App() {
  return <Layout>
    <Container fluid className="carrousel_wrap">
    <Carrousel />
    </Container>
    <FavoriteProducts />
    <Company />
  </Layout>;
}

export default App;
