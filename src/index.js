import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { ProductContext } from "./Context/ProductContext";
import { AuthProvider } from "./Context/AuthContext";
import App from "./App";
import { makeServer } from "./server";
import { CartProvider } from "./Context/Cart";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
      <ProductContext>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductContext>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
