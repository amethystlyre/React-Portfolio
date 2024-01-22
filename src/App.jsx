import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Resume from "./components/pages/Resume";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="*" element={<About />} />
        <Route path="/About" element={<About />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Resume" element={<Resume />} />
      </Routes>
    </>
  );
}

export default App;
