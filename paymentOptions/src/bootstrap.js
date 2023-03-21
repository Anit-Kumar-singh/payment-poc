import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import "./index.css";

const mount = (el) => {
  const root = createRoot(el);
  root.render(<App />);
};

// If we are in development and in isolation ,call mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#payment-option-root");
  if (devRoot) {
    mount(devRoot);
  }
}

// we are running through container and we should export the mount function

export { mount };
