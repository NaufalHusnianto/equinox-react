import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Bantuan() {
    return(
        <div className="user-select-none">
            <Container fluid className="text-white">
                <Row className="justify-content-center mt-5">
                    <Col md={8} className="text-center">
                        <h1 className="mt-4 mb-4" style={{ fontSize: '3rem' }}>Bantuan</h1>
                        <p className="mb-4">
                            Melalui perjalanan panjang sejarah yang telah diukir, senantiasa selalu berkomitmen untuk memberikan kontribusi terbaik
                        </p>
                    </Col>
                </Row>
                <Row className="justify-content-center mt-5">
                    <Col md={6}>
                        <h2 className="text-center mb-4">Hubungi Kami</h2>
                        <Form>
                            <Form.Group controlId="formName">
                                <Form.Label>Nama</Form.Label>
                                <Form.Control type="text" placeholder="Masukkan nama Anda" />
                            </Form.Group>
                            <Form.Group controlId="formEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Masukkan email Anda" />
                            </Form.Group>
                            <Form.Group controlId="formQuestion">
                                <Form.Label>Pertanyaan</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Masukkan pertanyaan Anda" />
                            </Form.Group>
                            <Button variant="primary" type="submit" className="mt-3">
                                Kirim Pertanyaan
                            </Button>
                        </Form>
                    </Col>
                </Row>
                <Row className="justify-content-center mt-5">
                    <Col md={6}>
                        <h2 className="text-center mb-4">Kontak Kami</h2>
                        <p className="mb-2">Telepon: +123456789</p>
                        <p className="mb-2">Email: info@equinox.com</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Bantuan;