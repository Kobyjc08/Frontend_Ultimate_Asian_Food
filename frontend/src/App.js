import React from "react";
import Carrousel from './components/Carrousel';
import {Container} from 'react-bootstrap'
import logo from "./logo.svg";
import FavoriteProducts from "./components/FavoriteProducts.js";

import "./App.css";
import { Layout } from "./layout/Layout";

function App() {
  return <Layout>
    <Container fluid className="carrousel_wrap">
    <Carrousel />
    </Container>
    <FavoriteProducts />

  </Layout>;
}

export default App;
