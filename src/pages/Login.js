import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Login() {
    const containerStyle = {
        background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("/login-bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh'
      };

    return (
        <Container fluid style={containerStyle} className="d-flex flex-column justify-content-between">
            <div style={{height: '10vh'}}>
            <h1 className="text-white text-center mt-4">Equinox <span style={{color: 'palevioletred'}}>Finance</span></h1>
            </div>
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
            <p className="text-center text-white">
                    &copy; {new Date().getFullYear()} Equinox group. All Rights Reserved.
            </p>
        </Container>
    );
}

export default Login;