import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <section id="about" className="about-section">
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
                <strong>PT. Sarana Packaging Agrapana</strong> adalah produsen
                kemasan <em>corrugated box</em> yang berdiri sejak tahun 2010.
                Kami berkomitmen untuk menyediakan solusi kemasan berkualitas
                tinggi yang mendukung kebutuhan industri nasional.
              </p>

              <div className="timeline">
                <h5>Sejarah Singkat</h5>
                <ul>
                  <li><span>2010</span> – Didirikan di Jawa Timur</li>
                  <li><span>2014</span> – Ekspansi fasilitas produksi</li>
                  <li><span>2018</span> – Sertifikasi ISO 9001:2015</li>
                  <li><span>2023</span> – Peningkatan kapasitas produksi dan inovasi desain</li>
                </ul>
              </div>

              <div className="visi-misi">
                <h5>Visi</h5>
                <p>
                  Menjadi perusahaan kemasan terdepan di Indonesia dengan
                  inovasi berkelanjutan dan layanan unggul.
                </p>

                <h5>Misi</h5>
                <ul>
                  <li>Menyediakan produk kemasan berkualitas tinggi dan ramah lingkungan.</li>
                  <li>Membangun hubungan jangka panjang dengan pelanggan berbasis kepercayaan.</li>
                  <li>Meningkatkan efisiensi produksi melalui teknologi modern.</li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default About;
