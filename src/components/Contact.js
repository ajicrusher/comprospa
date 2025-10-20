import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="scroll-offset py-5"
    >
      <Container>
        <h2 className="text-center mb-5">Contact Us</h2>
        <Row className="g-4 align-items-center">
          
          {/* FORM KONTAK */}
          <Col md={6}>
            <Card className="shadow-lg border-0 rounded-4">
              <Card.Body>
                <h5 className="mb-4 text-secondary fw-semibold">Send us a message</h5>
                <Form>
                  <Form.Group controlId="formName" className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                  </Form.Group>

                  <Form.Group controlId="formEmail" className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                  </Form.Group>

                  <Form.Group controlId="formMessage" className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={4} placeholder="Your message" />
                  </Form.Group>

                  <div className="d-grid">
                    <Button variant="primary" type="submit" className="py-2 fw-semibold shadow-sm">
                      Send Message
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* GOOGLE MAPS */}
          <Col md={6}>
            <div className="shadow-lg rounded-4 overflow-hidden">
              <iframe
                title="Lokasi PT Sarana Packaging Agrapana"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.972765385252!2d112.36427657499952!3d-7.243938792762459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e781db2f1a91097%3A0x6b117923a9ce2990!2sPT.Sarana%20Packaging%20Agrapana!5e0!3m2!1sid!2sid!4v1760683717791!5m2!1sid!2sid"
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </motion.section>
  );
}

export default Contact;
