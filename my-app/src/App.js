import "./App.css";
import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home/Home"
import MockAPI from "./components/Mockman"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/mockman" element={ <MockAPI /> } />
        <Route path="/products" element={ <MockAPI /> } />
      </Routes>
    </div>
  );
}

export default App;
