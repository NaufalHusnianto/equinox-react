import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiOutlineEnvironment } from 'react-icons/ai';


function Header() {
    const openGoogleMaps = () => {
        window.open('https://www.google.com/maps', '_blank');
    };

    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/" style={{ color: 'white' }}>Equinox <span style={{color: 'palevioletred'}}>Finance</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" style={{backgroundColor: 'white'}} />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="ml-auto">
                        <NavDropdown title={ <span className="text-white">Perseorangan</span> } id="nav-dropdown" style={{ marginLeft: '5px', color: 'white' }}>
                            <NavDropdown.Item as={Link} to="/service1" style={{ color: 'black' }}>Service 1</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/service2" style={{ color: 'black' }}>Service 2</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/service3" style={{ color: 'black' }}>Service 3</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title={ <span className="text-white">Bisnis</span> } id="nav-dropdown" style={{ marginLeft: '5px' }}>
                            <NavDropdown.Item as={Link} to="/service1" style={{ color: 'black' }}>Service 1</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/service2" style={{ color: 'black' }}>Service 2</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/service3" style={{ color: 'black' }}>Service 3</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title={ <span className="text-white">About Equinox</span> } id="nav-dropdown" style={{ marginLeft: '5px' }}>
                            <NavDropdown.Item as={Link} to="/service1" style={{ color: 'black' }}>Service 1</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/service2" style={{ color: 'black' }}>Service 2</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/service3" style={{ color: 'black' }}>Service 3</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title={ <span className="text-white">Bantuan</span> } id="nav-dropdown" style={{ marginLeft: '5px' }}>
                            <NavDropdown.Item as={Link} to="/service1" style={{ color: 'black' }}>Service 1</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/service2" style={{ color: 'black' }}>Service 2</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/service3" style={{ color: 'black' }}>Service 3</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link onClick={openGoogleMaps} style={{ color: 'white', marginLeft: '20px', marginRight: '20px', cursor: 'pointer' }}>
                                <AiOutlineEnvironment/> Location
                        </Nav.Link>
                    </Nav>
                    <Button as={Link} to="/login" style={{ backgroundColor: 'palevioletred', border: 'black', color: 'white', marginLeft: '10px' }}>Sign In</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;