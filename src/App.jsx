import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Curriculum } from "./pages/curriculum";
import { Portafolio } from "./pages/portafolio";

function App() {
  return (
    <div>
      <Routes>
        <route path="//curterm" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/portafolio" element={<Portafolio />} />
      </Routes>
    </div>
  );
}

export default App;
