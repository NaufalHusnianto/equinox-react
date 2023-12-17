import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
 
 function Dashboard() {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <Container fluid className="text-white">
                <Row className="justify-content-center">
                    <Col md={8} className="text-left">
                        <h1 className="mt-4 mb-4" style={{ fontSize: '3rem' }}>
                        Inovasi <span style={{ color: 'palevioletred' }}>Finansial</span><br/> Untuk Masa Depan<br/> yang Lebih <span style={{ color: 'palevioletred' }}>Cerah</span>
                        </h1>
                        <p className="mb-4">
                        Sebuah Bank yang menyediakan layanan keuangan yang inovatif dan terpercaya.
                        Kami berkomitmen untuk memberikan solusi finansial terbaik untuk Anda dan bisnis Anda.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
 }

 export default Dashboard;