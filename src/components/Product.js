import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";

const products = [
  { title: "Box Standard", desc: "Cocok untuk kebutuhan umum pengiriman barang.", img: "/product/images1.jpg" },
  { title: "Box Custom", desc: "Cetak logo & desain sesuai kebutuhan bisnis Anda.", img: "/product/images2.jpg" },
  { title: "Box Heavy Duty", desc: "Untuk kebutuhan pengiriman barang berat.", img: "/product/images3.jpg" },
];

function Products() {
  return (
    <Container className="scroll-offset py-5" id="products"><motion.section
    id="home"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.5, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.5 }}
    >
      <h2 className="text-center mb-4">Produk Kami</h2>    
    </motion.section>
      <Row>
        {products.map((p, i) => (
          <Col md={4} key={i} className="mb-4">
            <Card>
              <Card.Img variant="top" src={p.img} />
              <Card.Body>
                <Card.Title>{p.title}</Card.Title>
                <Card.Text>{p.desc}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
export default Products;
