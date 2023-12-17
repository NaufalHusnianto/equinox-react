import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Login() {
    return (
        <Container fluid className="d-flex justify-content-center align-items-center">
            <Form style={{width: '15rem'}}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label className="text-white">Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label className="text-white">Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" />
                </Form.Group>

                <Row className="mt-3">
                    <Col className="text-center">
                        <Button variant="primary" type="submit" style={{width: '7rem'}}>Login</Button>
                    </Col>
                </Row>

                <Row className="mt-2">
                    <Col xs={6} sm={6} className="text-right">
                        <Link to="/signup" className="text-white small">Buat akun!</Link>
                    </Col>
                    <Col xs={6} sm={6} className="text-left">
                        <Link to="/help" className="text-white small">Butuh bantuan?</Link>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}

export default Login;