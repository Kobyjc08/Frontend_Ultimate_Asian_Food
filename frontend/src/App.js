import React from "react";
import Carrousel from './components/Carrousel';
import {Container} from 'react-bootstrap'
import logo from "./logo.svg";
import "./App.css";
import { Layout } from "./layout/Layout";

function App() {
  return <Layout>
    <Container fluid className="carrousel_wrap">
    <Carrousel />
    </Container>
   

  </Layout>;
}

export default App;
