import { Container, Row, Col, Image, Nav, Navbar } from "react-bootstrap";
import { useState, useEffect } from "react";
import CustomCard from "../../components/CustomCard";

function CorporateCard() {
    const [selectedContent, setSelectedContent] = useState('CorporateCard');

    const handleNavClick = (content) => {
        setSelectedContent(content);
    };

    const renderContent = () => {
        switch (selectedContent) {
            case 'SpecialBenefit':
                return (
                    <Container className="w-100 d-flex flex-column align-items-center bg-dark" >
                        <div className="w-100 ms-5 me-5 mt-5">
                            <h1 className="text-center" style={{ color: 'palevioletred' }}>Special Benefit</h1>
                        </div>
                        <div>
                            <Row className="mb-4 mt-5">
                                <Col md={4} className="mb-4">
                                    <CustomCard
                                    backgroundImage="/image/graphic/1.png"
                                    title="Expense Management"
                                    description="Sebagai alat kontrol untuk memisahkan transaksi bisnis dengan transaksi pribadi, Equinox Corporate Card menyediakan kemudahan bagi Perusahaan untuk mengontrol pengeluaran pegawai."
                                    />
                                </Col>
                                <Col md={4} className="mb-4">
                                    <CustomCard
                                    backgroundImage="/image/graphic/2.png"
                                    title="Dual Billing Statement"
                                    description="Tersedia lembar tagihan untuk pemegang kartu maupun PIC Perusahaan untuk memudahkan kontrol dan pengawasan penggunaan"
                                    />
                                </Col>
                                <Col md={4} className="mb-4">
                                    <CustomCard
                                    backgroundImage="/image/graphic/3.png"
                                    title="Cashflow Management"
                                    description="Dengan grace period 20 s/d 50 hari, Perusahaan dapat lebih leluasa mengatur cash flow."
                                    />
                                </Col>
                                <Col md={4} className="mb-4">
                                    <CustomCard
                                    backgroundImage="/image/graphic/4.png"
                                    title="Payments"
                                    description="Kemudahan pembayaran tagihan menggunakan Equinox Cash Management yang dapat diakses langsung dari kantor."
                                    />
                                </Col>
                                <Col md={4} className="mb-4">
                                    <CustomCard
                                    backgroundImage="/image/graphic/5.png"
                                    title="Power Bills"
                                    description="Kemudahan melakukan berbagai jenis pembayaran rutin bulanan dalam satu tagihan saja di Equinox Corporate Card Anda. Daftar sekarang."
                                    />
                                </Col>
                                <Col md={4} className="mb-4">
                                    <CustomCard
                                    backgroundImage="/image/graphic/6.png"
                                    title="Visa Spends Clarity"
                                    description="Monitoring penggunaan kartu oleh PIC perusahaan."
                                    />
                                </Col>
                            </Row>
                        </div>
                    </Container>
                );
            case 'MoreFeatures':
                return (
                    <Container className="w-100 d-flex flex-column align-items-center bg-dark" >
                        <div className="w-100 ms-5 me-5 mt-5">
                            <h1 className="text-center" style={{ color: 'palevioletred' }}>More Features</h1>
                        </div>
                        <div>
                            <Row className="mb-4 mt-5">
                                <Col md={4} className="mb-4">
                                    <CustomCard
                                    backgroundImage="/image/graphic/1.png"
                                    title="Expense Management"
                                    description="Sebagai alat kontrol untuk memisahkan transaksi bisnis dengan transaksi pribadi, Equinox Corporate Card menyediakan kemudahan bagi Perusahaan untuk mengontrol pengeluaran pegawai."
                                    />
                                </Col>
                                <Col md={4} className="mb-4">
                                    <CustomCard
                                    backgroundImage="/image/graphic/2.png"
                                    title="Dual Billing Statement"
                                    description="Tersedia lembar tagihan untuk pemegang kartu maupun PIC Perusahaan untuk memudahkan kontrol dan pengawasan penggunaan"
                                    />
                                </Col>
                                <Col md={4} className="mb-4">
                                    <CustomCard
                                    backgroundImage="/image/graphic/3.png"
                                    title="Cashflow Management"
                                    description="Dengan grace period 20 s/d 50 hari, Perusahaan dapat lebih leluasa mengatur cash flow."
                                    />
                                </Col>
                                <Col md={4} className="mb-4">
                                    <CustomCard
                                    backgroundImage="/image/graphic/4.png"
                                    title="Payments"
                                    description="Kemudahan pembayaran tagihan menggunakan Equinox Cash Management yang dapat diakses langsung dari kantor."
                                    />
                                </Col>
                                <Col md={4} className="mb-4">
                                    <CustomCard
                                    backgroundImage="/image/graphic/5.png"
                                    title="Power Bills"
                                    description="Kemudahan melakukan berbagai jenis pembayaran rutin bulanan dalam satu tagihan saja di Equinox Corporate Card Anda. Daftar sekarang."
                                    />
                                </Col>
                                <Col md={4} className="mb-4">
                                    <CustomCard
                                    backgroundImage="/image/graphic/6.png"
                                    title="Visa Spends Clarity"
                                    description="Monitoring penggunaan kartu oleh PIC perusahaan."
                                    />
                                </Col>
                            </Row>
                        </div>
                    </Container>
                );
            default:
                return (
                    <Container className="w-100 d-flex align-items-center" style={{ background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/image/secondary-bg.jpg)' }}></Container>
                );
        }
    };

    // default content untuk navbar tengah
    useEffect(() => {
        handleNavClick('SpecialBenefit');
    }, []);

    return(
        <div className="d-flex flex-column justify-content-center align-items-center user-select-none">
            <Container className="w-100 d-flex align-items-center" style={{ background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/image/secondary-bg.jpg)'}}>
                <Row className="align-items-center">
                    <Col md={5} className="mt-5 mb-5">
                        <Image
                            className="d-block w-100"
                            src="/image/equinox debit card/debit-black.png"
                            alt="ORI"
                        />
                    </Col>
                    <Col md={5} className="ms-3 me-5 mt-5 mb-5">
                        <h1 style={{ color: 'palevioletred' }}>Equinox Corporate Card</h1>
                        <p className="text-white">
                            Equinox Corporate Card merupakan kartu kredit yang diterbitkan untuk memenuhi kebutuhan transaksi dan perjalanan bisnis perusahaan dengan menyediakan kemudahan bagi perusahaan untuk mengontrol setiap transaksi yang dilakukan oleh pegawai.
                        </p>
                    </Col>
                </Row>
            </Container>

            <Container fluid className="text-white mt-5 mb-5 bg-dark">
                <Navbar expand="lg" bg="dark" variant="dark" style={{borderBottom: '2px solid', borderColor: 'palevioletred'}}>
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                            <Nav>
                                <Nav.Link onClick={() => handleNavClick('SpecialBenefit')} className="text-white">Special Benefit</Nav.Link>
                                <Nav.Link onClick={() => handleNavClick('MoreFeatures')} className="text-white">More Features</Nav.Link>
                                <Nav.Link onClick={() => handleNavClick('Persyaratan')} className="text-white">Persyaratan</Nav.Link>
                                <Nav.Link onClick={() => handleNavClick('BiayaBunga')} className="text-white">Biaya & Bunga</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                {renderContent()}
            </Container>

            <Container fluid className="text-white mt-5 mb-5">
                <Row className="mt-5 mb-5">
                    <h1 className="text-center">Produk Pilihan</h1>
                    <h1 className="text-center fs-4 mt-3">Equinox Credit Card</h1>
                </Row>
                <Row className="mt-5">
                    <Col className="text-center" xs={12} md={4}>
                        <Image src="/image/equinox debit card/debit-gold.png" style={{width: '300px'}} />
                        <h1 className="fs-5">Gold</h1>
                    </Col>
                    <Col className="text-center" xs={12} md={4}>
                        <Image src="/image/equinox debit card/debit-red.png" style={{width: '300px'}} />
                        <h1 className="fs-5">Platinum</h1>
                    </Col>
                    <Col className="text-center" xs={12} md={4}>
                        <Image src="/image/equinox debit card/debit-silver.png" style={{width: '300px'}} />
                        <h1 className="fs-5">Silver</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default CorporateCard;