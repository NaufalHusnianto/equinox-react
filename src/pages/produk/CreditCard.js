import { Container, Row, Col, Image, Carousel } from "react-bootstrap";

function CreditCard() {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center user-select-none">
            <Carousel interval={3000} pause={false} fade className="w-100">
                <Carousel.Item className="w-100">
                    <Image
                        className="d-block w-100"
                        src="/image/quarty-bg.jpg"
                        alt="ORI"
                        style={{ maxHeight: '300px', objectFit: 'cover', filter: 'brightness(30%)' }}
                    />
                    <Carousel.Caption className="d-flex flex-column justify-content-center align-items-center" >
                        <h1 className="text-center">Kartu Kredit Equinox</h1>
                        <p className="text-center">
                            Miliki Kartu Kredit Equinox dan dapatkan kemudahan, kenyamanan serta keamanan dalam bertransaksi di dalam maupun luar negeri dan bertransaksi online.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="w-100">
                    <Image
                        className="d-block w-100"
                        src="/image/tertiary-bg.jpg"
                        alt="ORI"
                        style={{ maxHeight: '300px', objectFit: 'cover', filter: 'brightness(30%)' }}
                    />
                    <Carousel.Caption className="d-flex flex-column justify-content-center align-items-center" >
                        <h1 className="text-center">Kartu Kredit Equinox</h1>
                        <p className="text-center">
                            Miliki Kartu Kredit Equinox dan dapatkan kemudahan, kenyamanan serta keamanan dalam bertransaksi di dalam maupun luar negeri dan bertransaksi online.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="w-100">
                    <Image
                        className="d-block w-100"
                        src="/image/secondary-bg.jpg"
                        alt="ORI"
                        style={{ maxHeight: '300px', objectFit: 'cover', filter: 'brightness(30%)' }}
                    />
                    <Carousel.Caption className="d-flex flex-column justify-content-center align-items-center" >
                        <h1 className="text-center">Kartu Kredit Equinox</h1>
                        <p className="text-center">
                            Miliki Kartu Kredit Equinox dan dapatkan kemudahan, kenyamanan serta keamanan dalam bertransaksi di dalam maupun luar negeri dan bertransaksi online.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Container fluid className="text-white mt-5 mb-5">
            </Container>
            <Container fluid className="text-white mt-5 mb-5">
                <Row className="mt-5 mb-5">
                    <h1 className="text-center">Produk Pilihan</h1>
                    <h1 className="text-center fs-4 mt-3">Equinox Credit Card</h1>
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
        </div>
    );
}

export default CreditCard;