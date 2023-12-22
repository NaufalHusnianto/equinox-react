import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiOutlineEnvironment } from 'react-icons/ai';
import { useEffect, useState } from 'react';


function Header() {
    const openGoogleMaps = () => {
        window.open('https://maps.app.goo.gl/DaYbD4b5goc9XdJBA', '_blank');
    };

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const isTop = window.scrollY > 100;
        if (isTop !== scrolled) {
          setScrolled(isTop);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [scrolled]);

    const headerStyle = {
        position: "sticky",
        top: 0,
        zIndex: 100,
        backgroundColor: scrolled ? "#000" : "transparent",
        transition: "background-color 0.2s ease-out",
      };

    return (
        <Navbar expand="lg" style={headerStyle}>
            <Container>
                <Navbar.Brand as={Link} to="/" style={{ color: 'white' }}>Equinox <span style={{color: 'palevioletred'}}>Finance</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" style={{backgroundColor: 'white'}} />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/" style={{ color: 'white', marginLeft: '1px', marginRight: '10px', cursor: 'pointer' }}>Home</Nav.Link>
                        <NavDropdown title={ <span className="text-white">Perseorangan</span> } id="nav-dropdown" style={{ marginLeft: '5px', color: 'white' }}>
                            <NavDropdown.Item as={Link} to="/perseorangan/simpanan" style={{ color: 'black' }}>Simpanan</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/perseorangan/pinjaman" style={{ color: 'black' }}>Pinjaman</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/perseorangan/investasi-asuransi" style={{ color: 'black' }}>Investasi & Asuransi</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/produk/equinox-credit" style={{ color: 'black' }}>Kartu Kredit</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/produk/equinox-debit" style={{ color: 'black' }}>Kartu Debit</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title={ <span className="text-white">Bisnis</span> } id="nav-dropdown" style={{ marginLeft: '5px' }}>
                            <NavDropdown.Item as={Link} to="/bisnis/simpanan" style={{ color: 'black' }}>Simpanan</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/bisnis/pinjaman" style={{ color: 'black' }}>Pinjaman</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/produk/corporate-card" style={{ color: 'black' }}>Corporate Card</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/bisnis/cash-management" style={{ color: 'black' }}>Cash Management</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/bisnis/trade-finance" style={{ color: 'black' }}>Trade</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/bisnis/international-banking" style={{ color: 'black' }}>International Banking</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/tentang-equinox" className="text-white" style={{ marginLeft: '5px' }}>Tentang Equinox</Nav.Link>
                        <Nav.Link as={Link} to="/bantuan" className="text-white" style={{ marginLeft: '5px' }}>Bantuan</Nav.Link>
                        <Nav.Link onClick={openGoogleMaps} style={{ color: 'white', marginLeft: '1px', marginRight: '10px', cursor: 'pointer' }}>
                                <AiOutlineEnvironment/> Location
                        </Nav.Link>
                    </Nav>
                    <Button as={Link} to="/login" style={{ backgroundColor: 'palevioletred', border: 'black', color: 'white', marginLeft: '10px', marginTop: '10px' }}>Sign In</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;