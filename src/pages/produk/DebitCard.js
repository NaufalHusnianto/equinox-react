import { Container, Row, Col, Image } from "react-bootstrap";
import { useLocation } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

function DebitCard() {
    const location = useLocation();

    return (
        <div className="d-flex flex-column justify-content-center align-items-center user-select-none">
            <Container fluid className="text-white" style={{background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/image/secondary-bg.jpg)'}}>
                <Row className="justify-content-center mb-3 mt-2p-5">
                    <p style={{ marginBottom: '3rem', width: '75%', color: 'palevioletred'}} className="fs-5">Home<span className="text-white">{location.pathname}</span></p>
                    <Col md={8} className="text-left">
                        <h1 className="mt-4 mb-4 text-center" style={{ fontSize: '3rem' }}>Kartu Debit Equinox</h1>
                        <p className="mb-4 text-center">
                         Miliki Kartu Equinox Debit dan dapatkan kemudahan, kenyamanan serta keamanan dalam bertransaksi di dalam maupun luar negeri dan bertransaksi online.
                        </p>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="text-white mt-5 mb-5">
                <Row className="mt-5 mb-5">
                    <h1 className="text-center">Produk Pilihan</h1>
                    <h1 className="text-center fs-4 mt-3">Equinox Debit Visa</h1>
                </Row>
                <Row className="mt-5">
                    <Col className="text-center">
                        <Image src="/image/equinox debit card/debit-gold.png" style={{width: '300px'}} />
                        <h1 className="fs-5">Gold</h1>
                    </Col>
                    <Col className="text-center">
                        <Image src="/image/equinox debit card/debit-red.png" style={{width: '300px'}} />
                        <h1 className="fs-5">Platinum</h1>
                    </Col>
                    <Col className="text-center">
                        <Image src="/image/equinox debit card/debit-silver.png" style={{width: '300px'}} />
                        <h1 className="fs-5">Silver</h1>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="text-white mt-5 mb-5">
                <Row className="mt-5 mb-5">
                    <h1 className="text-center fs-4 mt-3">Equinox Debit Bisnis</h1>
                </Row>
                <Row className="mt-5">
                    <Col className="text-center">
                        <Image src="/image/equinox debit card/debit-blue1.png" style={{width: '300px'}} />
                        <h1 className="fs-5">Gold</h1>
                    </Col>
                    <Col className="text-center">
                        <Image src="/image/equinox debit card/debit-blue2.png" style={{width: '300px'}} />
                        <h1 className="fs-5">Platinum</h1>
                    </Col>
                    <Col className="text-center">
                        <Image src="/image/equinox debit card/debit-blue3.png" style={{width: '300px'}} />
                        <h1 className="fs-5">Silver</h1>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="mt-5 mb-5 bg-light">
                <Row className="mt-2 mb-5">
                    <h1 className="text-center fs-3 mt-3">Equinox Debit Spesial</h1>
                </Row>
                <Row className="mt-5 mb-5 text-center">
                    <Col className="text-center">
                        <Image src="/image/equinox debit card/debit-black.png" style={{width: '300px'}} />
                        <h1 className="fs-5">Black Card</h1>
                    </Col>
                    <Col className="text-center">
                        <Image src="/image/equinox debit card/debit-white.png" style={{width: '300px'}} />
                        <h1 className="fs-5">White Card</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default DebitCard;