import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";

const products = [
  // { title: "E Flute", desc: "E Flute memiliki ketebalan sekitar 1 mm hingga 1,5 mm, menghasilkan alur yang sangat halus. Hal ini tidak hanya menawarkan kekuatan kompresi dan ketahanan terhadap benturan yang sangat baik, tetapi juga memastikan permukaan berkualitas tinggi untuk pencetakan.", img: "/product/E-Flute.jpg" },
  { title: "B Flute", desc: "B Flute adalah salah satu jenis karton yang paling umum digunakan untuk aplikasi pengemasan. Dengan ketebalan 3 mm, karton ini sangat serbaguna dan dapat digunakan dalam proses die-cutting maupun pembuatan kotak biasa.", img: "/product/B-Flute.jpg" },
  { title: "C Flute", desc: "C Flute memiliki ketebalan antara 3,5 mm dan 4 mm, flute C menawarkan kekuatan kompresi yang lebih tinggi daripada flute B. Ini berarti flute C memberikan kekuatan susun yang lebih baik saat digunakan untuk produk ringan.", img: "/product/C-Flute.jpg" },
  { title: "BC Flute", desc: "Dengan ketebalan 6 mm hingga 7 mm, material berdinding ganda ini menggabungkan alur B dan C. Hal ini menghasilkan kinerja yang baik secara menyeluruh, sehingga umum digunakan untuk memproduksi kotak dengan tingkat perlindungan pengiriman yang lebih tinggi", img: "/product/BC-Flute.jpg" },
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
            <Card className="justify-content-center">
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
