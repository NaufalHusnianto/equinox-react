import { Container, Row, Col } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import CustomCard from '../components/CustomCard';
 
 function PinjamanPersonal() {
    return (
        <div className="d-flex justify-content-center align-items-center user-select-none">
        <Container fluid className="text-white">
          <Row className="justify-content-center mb-5 mt-5">
            <Col md={8} className="text-left">
                <h1 className="mt-4 mb-4" style={{ fontSize: '3rem' }}>Pinjaman</h1>
                <p className="mb-4">
                Solusi pinjaman dengan berbagai pilihan yang dapat disesuaikan dengan kebutuhan Anda
                </p>
            </Col>
          </Row>
          <Row className="mb-4 mt-5">
            <Col md={6} className="mb-4">
                <CustomCard
                backgroundImage="/image/kredit-serbaguna.jpg"
                title="Kredit Serbaguna"
                description="Kredit untuk membiayai berbagai kebutuhan anda"
                />
            </Col>
            <Col md={6} className="mb-4">
                <CustomCard
                backgroundImage="/image/kredit-kendaraan.jpg"
                title="Kredit Kendaraan Bermotor"
                description="Wujudkan kendaraan idaman anda dengan mudah"
                />
            </Col>
            <Col md={6} className="mb-4">
                <CustomCard
                backgroundImage="/image/kredit-rumah.jpg"
                title="Kredit Kepemilikan Rumah"
                description="Wujudkan hunian idaman sesuai keinginan anda"
                />
            </Col>
            <Col md={6} className="mb-4">
                <CustomCard
                backgroundImage="/image/kredit-multiguna.jpg"
                title="Kredit Multiguna"
                description="Nikmati fasilitas kredit yang menguntungkan dan dapat memenuhi kebutuhan anda"
                />
            </Col>
            <Col md={6} className="mb-4">
                <CustomCard
                backgroundImage="/image/top-up.jpg"
                title="top up KPR"
                description="Nikmati fasilitas kredit yang menguntungkan dan dapat memenuhi kebutuhan anda"
                />
            </Col>
          </Row>
        </Container>
      </div>
    );
 }

 export default PinjamanPersonal;