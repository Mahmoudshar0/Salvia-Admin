import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About-us/About";
import Preview from "./Pages/About-us/Preview";
import Quality from "./Pages/Our-Quality-Commitment/Quality";
import QualityPreview from "./Pages/Our-Quality-Commitment/Preview";
import RnD from "./Pages/R&D/R&D";
import RnDPreview from "./Pages/R&D/Preview";
import Contact from "./Pages/Contact-us/Contact";
import Page9 from "./Pages/Page-9/Page9";
import Page10 from "./Pages/Page-10/Page10";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/preview/:blockId" element={<Preview />} />
          <Route path="/our-quality" element={<Quality />} />
          <Route
            path="/quality-preview/:blockId"
            element={<QualityPreview />}
          />
          <Route path="/r-and-d" element={<RnD />} />
          <Route path="/r-and-d-preview/:blockId" element={<RnDPreview />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/page9" element={<Page9 />} />
          <Route path="/page10" element={<Page10 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
