import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <Navbar expand="lg" style={{ background: 'black' }}>
            <Container>
                <Navbar.Brand as={Link} to="/" style={{ color: 'white' }}>Equinox Finance</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav style={{ marginLeft: 'auto', marginRight: '2rem' }}>
                        <Nav.Link as={Link} to="/home" style={{ color: 'white', marginLeft: '20px' }}>Home</Nav.Link>
                        <Nav.Link as={Link} to="/about" style={{ color: 'white', marginLeft: '20px' }}>About</Nav.Link>
                        <NavDropdown title={ <span className="text-white">Dropdown</span> } id="nav-dropdown" style={{ marginLeft: '20px' }}>
                            <NavDropdown.Item as={Link} to="/service1" style={{ color: 'black' }}>Service 1</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/service2" style={{ color: 'black' }}>Service 2</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/service3" style={{ color: 'black' }}>Service 3</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/contact" style={{ color: 'white', marginLeft: '20px' }}>Contact</Nav.Link>
                    </Nav>
                    <Button as={Link} to="/login" style={{ backgroundColor: 'palevioletred', border: 'black', color: 'white' }}>Login</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;