import "./App.css";
import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home/Home"
import { Product } from "./pages/Product-Listing/Product"
import { MockAPI } from "./components/index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/mockman" element={ <MockAPI /> } />
        <Route path="/product-listing" element={ <Product /> } />
      </Routes>
    </div>
  );
}

export default App;
