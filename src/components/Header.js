import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    return (
        <Navbar expand="lg" className="mb-4">
            <Container>
                <Navbar.Brand as={Link} to="/" className="text-white">Equinox <span style={{color: 'palevioletred'}}>Finance</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ borderColor: 'black', backgroundColor: 'white' }} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto" style={{ marginLeft: 'auto'}}>
                        <Nav.Link as={Link} to="/transfer" className="text-white">Transfer</Nav.Link>
                        <Nav.Link as={Link} to="/pembayaran" className="text-white">Pembayaran</Nav.Link>
                        <Nav.Link as={Link} to="/saldo" className="text-white">Cek Saldo</Nav.Link>
                        <Nav.Link as={Link} to="/bantuan" className="text-white">Bantuan</Nav.Link>
                        <Nav.Link as={Link} to="/about-us" className="text-white">About Us</Nav.Link>
                    </Nav>
                    <Button as={Link} to="/login" style={{backgroundColor: 'palevioletred', border: 'white'}}>Sign In</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;