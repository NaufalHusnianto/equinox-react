import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
 
 function SimpananPersonal() {
    return (
        <div className="d-flex justify-content-center align-items-center user-select-none">
        <Container fluid className="text-white">
          <Row className="justify-content-center mb-5 mt-5">
            <Col md={8} className="text-left">
              <h1 className="mt-4 mb-4" style={{ fontSize: '3rem' }}>Simpanan</h1>
              <p className="mb-4">
                Dapatkan keuntungan dan kenyamanan yang lebih baik dengan berbagai solusi simpanan dari Bank Equinox untuk Anda.
              </p>
            </Col>
          </Row>
          <Row className="mb-4 mt-5">
            <Col md={6} className="mb-4">
              <Card className="bg-dark text-white">
                <div style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/image/tabungan-rupiah.jpg")', backgroundSize: 'cover', minHeight: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                  <Card.Body>
                    <Card.Title>Tabungan Rupiah</Card.Title>
                    <Card.Text>Kemudahan Menabung Untuk Kenyamanan Hidup</Card.Text>
                  </Card.Body>
                </div>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="bg-dark text-white">
                <div style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/image/tabungan-multicurrency.jpg")', backgroundSize: 'cover', minHeight: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                  <Card.Body>
                    <Card.Title>Tabungan Multicurrency</Card.Title>
                    <Card.Text>Kemudahan dan benefit transaksi dengan berbagai pilihan valuta asing</Card.Text>
                  </Card.Body>
                </div>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="bg-dark text-white">
                <div style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/image/tabungan-rencana.jpg")', backgroundSize: 'cover', minHeight: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                  <Card.Body>
                    <Card.Title>Tabungan Rencana</Card.Title>
                    <Card.Text>Wujudkan rencana hidup di masa depan dengan pengelolaan terencana</Card.Text>
                  </Card.Body>
                </div>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="bg-dark text-white">
                <div style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/image/tabungan-valas.jpg")', backgroundSize: 'cover', minHeight: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                  <Card.Body>
                    <Card.Title>Tabungan Valas</Card.Title>
                    <Card.Text>Keuntungan lebih untuk simpanan valuta asing</Card.Text>
                  </Card.Body>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
 }

 export default SimpananPersonal;