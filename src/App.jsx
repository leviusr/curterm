import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Curriculum } from "./pages/curriculum";
import { Portafolio } from "./pages/portafolio";
import { Menumovil } from "./components/menumovil";

function App() {
  return (
    <div>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/portafolio" element={<Portafolio />} />
        <Route path="/menumovil" element={<Menumovil />} />
      </Routes>
    </div>
  );
}
export default App;
