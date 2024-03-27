import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import SubFooter from "./components/SubFooter/SubFooter";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <SubFooter />
    </div>
  );
};

export default App;
