import "./App.css";
import { Routes, Route } from "react-router-dom"
import { Home, Product, ProductPage } from "./pages"
import { MockAPI } from "./components";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/mockman" element={ <MockAPI /> } />
        <Route path="/product-listing" element={ <Product /> } />
        <Route path="/product-page" element={ <ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
