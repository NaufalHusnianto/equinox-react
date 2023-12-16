import { Container, Row, Col } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import 'bootstrap/dist/css/bootstrap.min.css';


function Layout({ children }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#001f3f' }}>
            <Header />
            <div style={{ flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Container>
                    <Row>
                        <Col className="text-center">
                            <Dashboard />
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </div>
    );
}

export default Layout;