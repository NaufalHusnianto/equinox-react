import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";

import CustomCard from "../../components/CustomCard";
import 'bootstrap/dist/css/bootstrap.min.css';

function TradeFinance() {
        const location = useLocation();

        return (
            <div className="d-flex justify-content-center align-items-center user-select-none">
            <Container fluid className="text-white">
              <Row className="justify-content-center mb-5 mt-5">
                <p style={{ marginBottom: '3rem', width: '75%', color: 'palevioletred'}} className="fs-5">Home<span className="text-white">{location.pathname}</span></p>
                <Col md={8} className="text-left">
                    <h1 className="mt-4 mb-4" style={{ fontSize: '3rem' }}>Trade Finance</h1>
                    <p className="mb-4">
                    Nikmati berbagai fasilitas serta kemudahan transaksi perbankan untuk mendukung bisnis dan usaha Anda sampai ke mancanegara. Equinox Call 99999 atau +62XX XXXXXXXX (Luar Negeri), pilih bahasa, tekan 4.
                    </p>
                </Col>
              </Row>
              <Row className="mb-4 mt-5">
                <Col md={6} className="mb-4">
                    <CustomCard
                    backgroundImage="/image/kredit-multiguna.jpg"
                    title="Ekspor"
                    description="Kredit untuk membiayai berbagai kebutuhan anda"
                    />
                </Col>
                <Col md={6} className="mb-4">
                    <CustomCard
                    backgroundImage="/image/tabungan-valas.jpg"
                    title="Impor"
                    description="Wujudkan kendaraan idaman anda dengan mudah"
                    />
                </Col>
                <Col md={6} className="mb-4">
                    <CustomCard
                    backgroundImage="/image/tabungan-rencana.jpg"
                    title="Value Chain"
                    description="Wujudkan hunian idaman sesuai keinginan anda"
                    />
                </Col>
              </Row>
            </Container>
          </div>
    );
}

export default TradeFinance;