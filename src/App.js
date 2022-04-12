import "./App.css";
import { Routes, Route } from "react-router-dom"
import { Home, Product, Sign, LoginPage, Cart } from "./pages"
import { MockAPI } from "./components";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/mockman" element={ <MockAPI /> } />
        <Route path="/product-listing" element={ <Product /> } />
        <Route path="/signup" element={ <Sign /> } />
        <Route path="/login" element={ <LoginPage /> } />
        <Route path="/cart" element={ <Cart /> } /> 
      </Routes>
    </div>
  );
}

export default App;
