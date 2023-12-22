import { useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import CustomCard from "../../components/CustomCard";
import 'bootstrap/dist/css/bootstrap.min.css';


function SimpananBisnis() {
    const location = useLocation();

    return (
        <div className="d-flex justify-content-center align-items-center user-select-none">
            <Container fluid className="text-white">
            <Row className="justify-content-center mb-5 mt-5">
                <p style={{ marginBottom: '3rem', width: '75%', color: 'palevioletred'}} className="fs-5">Home<span className="text-white">{location.pathname}</span></p>
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
                    title="Tabungan Bisnis"
                    description="Hadirkan Sarana Pendukung perusahaan"
                    />
                </Col>
                <Col md={6} className="mb-4">
                    <CustomCard
                    backgroundImage="/image/tabungan-multicurrency.jpg"
                    title="Deposito Rupiah"
                    description="Kemudahan dan benefit transaksi rupiah"
                    />
                </Col>
                <Col md={6} className="mb-4">
                    <CustomCard
                    backgroundImage="/image/tabungan-rencana.jpg"
                    title="Giro Rupiah"
                    description="Wujudkan rencana hidup di masa depan dengan pengelolaan terencana"
                    />
                </Col>
                <Col md={6} className="mb-4">
                    <CustomCard
                    backgroundImage="/image/tabungan-valas.jpg"
                    title="Giro Valas"
                    description="Keuntungan lebih untuk simpanan valuta asing"
                    />
                </Col>
            </Row>
            </Container>
        </div>
    );
}

export default SimpananBisnis;