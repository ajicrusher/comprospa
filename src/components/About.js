import React from "react";
import { Container, Row, Col, Accordion, AccordionHeader, AccordionBody } from "react-bootstrap";

function About() {
  return (
    <section id="about" className="about-section scroll-offset">
      <Container fluid className="p-0">
        <Row className="g-0 align-items-center">
          {/* Kiri: Foto pabrik */}
          <Col md={6} className="image-side">
            <div className="about-image">
              <div className="image-overlay"></div>
            </div>
          </Col>

          {/* Kanan: Isi teks */}
          <Col md={6} className="text-side">
            <div className="about-content">
              <h2 className="about-title">Tentang Kami</h2>
              <p className="about-desc">
                <strong>PT. Sarana Packaging Agrapana,</strong>  perusahaan bersertifikat ISO 9001:2015, adalah produsen kotak karton bergelombang yang didirikan di bawah naungan SPS Corporate.
                        Kami merupakan kelompok usaha yang bertanggung jawab dengan pengalaman lebih dari 30 tahun di industri pembuatan kertas dan tisu (PT Sun Paper Supply, PT Supreme Paper Solution).<br></br><br></br>
                        Didirikan pada semester kedua tahun 2018 dan berlokasi di Lamongan, Jawa Timur, kami memproduksi kotak karton terutama untuk kebutuhan komersial, namun juga melayani pesanan kotak karton bergelombang sesuai kebutuhan khusus pelanggan.<br></br><br></br>
                        Sumber bahan kertas kami berasal dari pabrik kertas bersertifikat FSC dan mematuhi standar RoHS, yang mencerminkan komitmen kami terhadap keberlanjutan, dengan produk yang aman dan bebas dari logam berat.
              </p>
              <Accordion className="mt-4">
                {/* <Accordion.Item eventKey="0">
              <div className="timeline">
                <AccordionHeader><h5>Sejarah Singkat</h5></AccordionHeader>
                <AccordionBody>
                <ul>
                  <li><span>2010</span> – Didirikan di Jawa Timur</li>
                  <li><span>2014</span> – Ekspansi fasilitas produksi</li>
                  <li><span>2018</span> – Sertifikasi ISO 9001:2015</li>
                  <li><span>2023</span> – Peningkatan kapasitas produksi dan inovasi desain</li>
                </ul>
                </AccordionBody>
              </div>
              </Accordion.Item> */}

              <Accordion.Item eventKey="1">
              <div className="visi">
               <AccordionHeader><h5>Visi</h5></AccordionHeader> 
                <AccordionBody>
                <p>
                  Menjadi perusahaan kemasan terdepan di Indonesia dengan
                  inovasi berkelanjutan dan layanan unggul.
                </p>
                </AccordionBody>
                </div>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
               <div className="misi">
                <AccordionHeader><h5>Misi</h5></AccordionHeader>
                <AccordionBody>
                <ul>
                  <li>Menyediakan produk kemasan berkualitas tinggi dan ramah lingkungan.</li>
                  <li>Membangun hubungan jangka panjang dengan pelanggan berbasis kepercayaan.</li>
                  <li>Meningkatkan efisiensi produksi melalui teknologi modern.</li>
                </ul>
                </AccordionBody>
              </div>
              </Accordion.Item>
              </Accordion>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default About;
