import React from "react";
import PaymentApp from "paymentApp/PaymentOptionApp";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <PaymentApp />
      </BrowserRouter>
    </>
  );
};

export default App;
