import { Container, Row } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Layout({ children }) {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <Header />
                </Col>
            </Row>
            <Row>
                <Col md={3}>
                    <Sidebar />
                </Col>
                <Col md={9}>
                    <Row>
                        <Col>
                            <Navigation />
                        </Col>
                    </Row>
                    <Row>
                        <Col>{children}</Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Footer />
                </Col>
            </Row>
        </Container>
    );
}

export default Layout;