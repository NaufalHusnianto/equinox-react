import { Container, Row, Col } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import CustomCard from '../components/CustomCard';
 
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
                <CustomCard
                backgroundImage="/image/tabungan-rupiah.jpg"
                title="Tabungan Rupiah"
                description="Kemudahan Menabung Untuk Kenyamanan Hidup"
                />
            </Col>
            <Col md={6} className="mb-4">
                <CustomCard
                backgroundImage="/image/tabungan-multicurrency.jpg"
                title="Tabungan Multicurrency"
                description="Kemudahan dan benefit transaksi dengan berbagai pilihan valuta asing"
                />
            </Col>
            <Col md={6} className="mb-4">
                <CustomCard
                backgroundImage="/image/tabungan-rencana.jpg"
                title="Tabungan Rencana"
                description="Wujudkan rencana hidup di masa depan dengan pengelolaan terencana"
                />
            </Col>
            <Col md={6} className="mb-4">
                <CustomCard
                backgroundImage="/image/tabungan-valas.jpg"
                title="Tabungan Valas"
                description="Keuntungan lebih untuk simpanan valuta asing"
                />
            </Col>
          </Row>
        </Container>
      </div>
    );
 }

 export default SimpananPersonal;