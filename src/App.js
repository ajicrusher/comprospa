import React from "react";
import NavbarComp from "./components/NavbarComp";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Product from "./components/Product";
import About from "./components/About";
import Contact from "./components/Contact";
import Partner from "./components/Partner";


function App() { 
  return (
    <div>
      <NavbarComp />
      <Hero />
      <Product />
      <About />
      <Partner />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;