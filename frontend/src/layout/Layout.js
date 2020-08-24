import React from "react";
import { Header } from "../shared/Header";

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
