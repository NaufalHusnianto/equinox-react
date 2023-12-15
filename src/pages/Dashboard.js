import { Container, Row, Col, Card } from 'react-bootstrap';
 
 function Dashboard() {
    return (
        <Container fluid>
            <Row>
                <Col>
                <h1 className="text-center mt-4 mb-5">Selamat Datang di Bank Equinox Finance</h1>
                <p className="text-center mb-5">
                    Bank Equinox Finance menyediakan layanan keuangan yang inovatif dan terpercaya.
                    Kami berkomitmen untuk memberikan solusi finansial terbaik untuk Anda dan bisnis Anda.
                    Dengan fokus pada kualitas dan keamanan, kami siap melayani kebutuhan finansial Anda.
                </p>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col xs={12} md={6} lg={4}>
                <Card className="shadow-sm">
                    <Card.Body>
                    {/* Isi Card 1 */}
                    </Card.Body>
                </Card>
                </Col>
                {/* Tambahkan Card atau informasi lainnya di sini */}
            </Row>
        </Container>
    )
 }

 export default Dashboard;