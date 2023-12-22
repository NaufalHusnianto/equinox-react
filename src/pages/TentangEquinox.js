import { Container, Row, Col, Image } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; 


function TentangEquinox() {
    const location = useLocation();

    return(
        <div className="d-flex flex-column justify-content-center align-items-center user-select-none">
            <Container fluid className="text-white">
                <Row className="justify-content-center mb-3 mt-2p-5">
                    <p style={{ marginBottom: '3rem', width: '75%', color: 'palevioletred' }} className="fs-5">Home<span className="text-white">{location.pathname}</span></p>
                    <Col md={8} className="text-left">
                        <h1 className="mt-4 mb-4 text-center" style={{ fontSize: '3rem' }}>Tentang Equinox</h1>
                        <p className="mb-4 text-center">
                            Melalui perjalanan panjang sejarah yang telah diukir, senantiasa selalu berkomitmen untuk memberikan kontribusi terbaik
                        </p>
                        
                        <Row className="justify-content-center">
                            <Col md={8} className="text-center">
                                <h2 className="mt-5 mb-4">Perusahaan Bank Internasional</h2>
                                <p>Equinox Bank Internasional adalah salah satu bank terkemuka di dunia dengan fokus pada layanan perbankan global. Sebagai lembaga keuangan internasional, Equinox mempersembahkan solusi perbankan yang inovatif dan terpercaya kepada pelanggan di berbagai negara. Dengan komitmen yang kuat terhadap keunggulan dan pelayanan berkualitas, Equinox terus berkembang sebagai pionir dalam industri perbankan global.</p>
                            </Col>
                        </Row>

                        <h2 className="mt-5 mb-4">Founder</h2>
                        <Row className="justify-content-center">
                            <Col md={8} className="text-center">
                                <h3>Naufal Husnianto</h3>
                                <p>Founder, Equinox Bank Internasional</p>
                                <p>Naufal Husnianto adalah pendiri Equinox Bank Internasional yang telah memimpin perusahaan sejak awal pendiriannya. Beliau memiliki pengalaman yang luas di industri perbankan internasional.</p>
                            </Col>
                        </Row>

                        <h2 className="mt-5 mb-4">Visi & Misi</h2>
                        <Row className="justify-content-center">
                            <Col md={8} className="text-center">
                                <h3>Visi</h3>
                                <p>Menginspirasi perubahan positif dalam kehidupan melalui solusi keuangan inovatif dan layanan yang terbaik.</p>
                            </Col>
                            <Col md={8} className="text-center mt-5">
                                <h3>Misi</h3>
                                <p>Menyediakan layanan keuangan yang dapat dipercaya dan inovatif untuk membantu masyarakat dan bisnis mencapai potensi keuangan mereka.</p>
                            </Col>
                        </Row>

                        <h2 className="mt-5 mb-4">Kontak</h2>
                        <Row className="justify-content-center">
                            <Col md={8} className="text-center">
                                <h3>Equinox Bank Internasional</h3>
                                <p>Alamat: Jl. Contoh No. 123, Kota, Negara</p>
                                <p>Email: info@equinoxbank.com</p>
                                <p>Telepon: +123456789</p>
                            </Col>
                        </Row>

                        <h2 className="mt-5 mb-4">Social Media</h2>
                        <Row className="justify-content-center">
                            {/* Gunakan komponen dari react-icons */}
                            <Col xs={3} md={2} className="text-center">
                                <FaFacebook size={30} color="white" />
                            </Col>
                            <Col xs={3} md={2} className="text-center">
                                <FaTwitter size={30} color="white" />
                            </Col>
                            <Col xs={3} md={2} className="text-center">
                                <FaInstagram size={30} color="white" />
                            </Col>
                            {/* Tambahkan icon lainnya sesuai kebutuhan */}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default TentangEquinox;