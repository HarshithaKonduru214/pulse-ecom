import "./App.css";
import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home/Home"
import { MockAPI } from "./components/index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/mockman" element={ <MockAPI /> } />
      </Routes>
    </div>
  );
}

export default App;