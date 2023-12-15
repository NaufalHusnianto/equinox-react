import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <footer className="mt-5">
            <Container>
                <Row>
                <Col>
                    <p className="text-center">
                    &copy; {new Date().getFullYear()} Nama Perusahaan Anda. All Rights Reserved.
                    </p>
                </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;