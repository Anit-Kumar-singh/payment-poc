import React, { useRef, useEffect } from "react";
import { mount } from "paymentApp/PaymentOptionApp";

const PaymentApp = () => {
  const ref = useRef(null);
  useEffect(() => {
    mount(ref.current);
  }, []);
  return <div ref={ref}></div>;
};

export default PaymentApp;
