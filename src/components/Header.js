import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    return (
        <Navbar bg="light" expand="lg" className="mb-4">
            <Container>
                <Navbar.Brand as={Link} to="/">Nama Aplikasi Anda</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto" style={{ marginLeft: 'auto'}}>
                    <Nav.Link as={Link} to="/transfer">Transfer</Nav.Link>
                    <Nav.Link as={Link} to="/pembayaran">Pembayaran</Nav.Link>
                    <Nav.Link as={Link} to="/bantuan">Bantuan</Nav.Link>
                    <Nav.Link as={Link} to="/about-us">About Us</Nav.Link>
                </Nav>
                <Button variant="primary" as={Link} to="/sign-in">Sign In</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;