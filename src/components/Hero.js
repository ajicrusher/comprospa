import React from "react";
import { Container, Button } from "react-bootstrap";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="hero-section " id="home">
      <div className="overlay"></div>
      <Container className="hero-content">
        <h1 className="hero-title shadow-sm">Solusi Kemasan Berkualitas</h1>
        <p className="hero-subtitle lead shadow-sm">Produsen Corrugated Box untuk kebutuhan industri Anda</p>
        <Button variant="primary" href="#contact">Hubungi Kami</Button>
      </Container>
    </div>
  );
}
export default Hero;
