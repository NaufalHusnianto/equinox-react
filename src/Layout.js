import { Container, Row, Col } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";

function Layout({ children }) {
    return (
        <Container fluid>
            <Row>
                <Col>
                <Header />
                </Col>
            </Row>
            <Row>
                <Col>
                <Dashboard /> {/* Tambahkan komponen Dashboard di sini */}
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