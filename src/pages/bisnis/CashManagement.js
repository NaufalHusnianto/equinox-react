import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";

import CustomCard from "../../components/CustomCard";
import 'bootstrap/dist/css/bootstrap.min.css';

function CashManagement() {
        const location = useLocation();

        return (
            <div className="d-flex justify-content-center align-items-center user-select-none">
            <Container fluid className="text-white">
              <Row className="justify-content-center mb-5 mt-5">
                <p style={{ marginBottom: '3rem', width: '75%', color: 'palevioletred'}} className="fs-5">Home<span className="text-white">{location.pathname}</span></p>
                <Col md={8} className="text-left">
                    <h1 className="mt-4 mb-4" style={{ fontSize: '3rem' }}>Cash Management</h1>
                    <p className="mb-4">
                    Kelola keuangan bisnis Anda dengan berbagai fasilitas dari kami, agar bisnis Anda semakin baik
                    </p>
                </Col>
              </Row>
              <Row className="mb-4 mt-5">
                <Col md={6} className="mb-4">
                    <CustomCard
                    backgroundImage="/image/kredit-multiguna.jpg"
                    title="Equinox Cash Management"
                    description="Kredit untuk membiayai berbagai kebutuhan anda"
                    />
                </Col>
                <Col md={6} className="mb-4">
                    <CustomCard
                    backgroundImage="/image/kredit-serbaguna.jpg"
                    title="Equinox Bill Collection"
                    description="Wujudkan kendaraan idaman anda dengan mudah"
                    />
                </Col>
                <Col md={6} className="mb-4">
                    <CustomCard
                    backgroundImage="/image/tabungan-rencana.jpg"
                    title="Equinox Auto Debit"
                    description="Wujudkan hunian idaman sesuai keinginan anda"
                    />
                </Col>
              </Row>
            </Container>
          </div>
    );
}

export default CashManagement;