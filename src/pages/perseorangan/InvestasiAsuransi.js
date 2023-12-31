import { Container, Row, Col } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import CustomCard from '../../components/CustomCard';
import { useLocation } from 'react-router-dom';
 
 function InvestasiAsuransi() {
    const location = useLocation();

    return (
        <div className="d-flex justify-content-center align-items-center user-select-none">
        <Container fluid className="text-white">
          <Row className="justify-content-center mb-5 mt-5">
            <p style={{ marginBottom: '3rem', width: '75%', color: 'palevioletred'}} className="fs-5">Home<span className="text-white">{location.pathname}</span></p>
            <Col md={8} className="text-left">
                <h1 className="mt-4 mb-4" style={{ fontSize: '3rem' }}>Investasi & Asuransi</h1>
                <p className="mb-4">
                Percayakan perlindungan diri anda dan keluarga serta investasi dengan berbagai produk investasi & asuransi kami
                </p>
            </Col>
          </Row>
          <Row className="mb-4 mt-5">
            <Col md={6} className="mb-4">
                <CustomCard
                backgroundImage="/image/equinox-insurance.jpg"
                title="Equinox Insurance"
                description="Equinox group memberikan berbagai solusi untuk perlindungan kerugian aset dan layanan asuransi umum bagi nasabah dan mitra bisnis"
                />
            </Col>
            <Col md={6} className="mb-4">
                <CustomCard
                backgroundImage="/image/tabungan-multicurrency.jpg"
                title="Danamadya"
                description="Nikmati Berbagai macam investasi Danamadya kami, sesuai kebutuhan anda"
                />
            </Col>
            <Col md={6} className="mb-4">
                <CustomCard
                backgroundImage="/image/Ori.jpg"
                title="ORI&Sukuk Ritel"
                description="Nikmati berinvestasi dengan obligasi negara"
                />
            </Col>
            <Col md={6} className="mb-4">
                <CustomCard
                backgroundImage="/image/health-insurance.jpg"
                title="Asuransi Kesehatan - Equinox Health"
                description="Nikmati manfaat perlindungan jiwa bagi anda dan keluarga"
                />
            </Col>
          </Row>
        </Container>
      </div>
    );
 }

 export default InvestasiAsuransi;