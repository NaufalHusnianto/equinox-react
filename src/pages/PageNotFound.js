import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

function PageNotFound() {
    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <Row>
                <Col className="text-center">
                    <h1>404 - Halaman Tidak Ditemukan</h1>
                    <p>Maaf, halaman yang Anda cari tidak ditemukan.</p>
                </Col>
            </Row>
        </Container>
    );
}

export default PageNotFound;