import React from "react";
import Company from "./Components/Company.js";
import FavoriteProducts from "./Components/FavoriteProducts.js";

import "./App.css";
import { Layout } from "./layout/Layout";

function App() {
  return (
    <Layout>
      <FavoriteProducts />
      <Company />
    </Layout>
  );
}

export default App;
