import "./App.css";
import Home from "./pages/home.jsx";
import Contact from "./pages/contact.jsx";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/xAkademicAMPA-GN">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
