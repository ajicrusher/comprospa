import React from "react";
import { Container,Col, Row } from "react-bootstrap";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-dark text-light py-3 mt-5">
      <Container className="text-center mb-2">
        <Row>
        <Col md={4} className="mb-4">
            <h5 className="fw-bold">PT. Sarana Packaging Agrapana</h5>
            <p>
              <FaMapMarkerAlt className="me-2" />
              Jl. Raya Lamongan - Mantup.KM 16.4, Kedungsari, Moronyamplung, Kec. Kembangbahu, Kabupaten Lamongan, Jawa Timur 62282
            </p>
            <p>
              <FaPhoneAlt className="me-2" />
              0859-3225-6038
            </p>
            <p>
              <FaEnvelope className="me-2" />
              salesmarketing.spa@gmail.com
            </p>
          </Col>

          {/* Kolom 2 - Quick Links */}
          <Col md={4} className="mb-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled footer-links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#products">Produk</a>
              </li>
              <li>
                <a href="#about">Tentang Kami</a>
              </li>
              <li>
                <a href="#contact">Kontak</a>
              </li>
            </ul>
          </Col>

          {/* Kolom 3 - Sosial Media */}
          <Col md={4}>
            <h5 className="fw-bold">Ikuti Kami</h5>
            <div className="d-flex gap-3 social-icons justify-content-center">
              <a
                href="https://www.linkedin.com/company/pt-sarana-packaging-agrapana"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://www.instagram.com/saranaagrapana/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="text-center">
        <small>© 2025 PT. Sarana Packaging Agrapana. All rights reserved.</small>
      </Container>
    </div>
  );
}
export default Footer;
