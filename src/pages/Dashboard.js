import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

 
 function Dashboard() {
    return (
        <Container fluid className="d-flex justify-content-center align-items-center">
            <Row>
                <Col xs={12} className="text-center text-white">
                    <h1 className="mt-4 mb-4" style={{fontSize: '2.5rem'}}>Inovasi <span style={{color: 'palevioletred'}}>Finansial</span> Untuk Masa Depan yang Lebih <span style={{color: 'palevioletred'}}>Cerah</span></h1>
                    <p className="mb-4">
                        Sebuah Bank yang menyediakan layanan keuangan yang inovatif dan terpercaya.
                        Kami berkomitmen untuk memberikan solusi finansial terbaik untuk Anda dan bisnis Anda.
                    </p>
                </Col>
            </Row>
        </Container>
    )
 }

 export default Dashboard;