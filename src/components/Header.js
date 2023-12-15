import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
    return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand href="/">Nama Aplikasi Anda</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/transfer">Transfer</Nav.Link>
          <Nav.Link as={Link} to="/pembayaran">Pembayaran</Nav.Link>
          <Nav.Link as={Link} to="/bantuan">Bantuan</Nav.Link>
          <Nav.Link as={Link} to="/about-us">About Us</Nav.Link>
        </Nav>
        <Nav>
          <Button variant="primary" as={Link} to="/sign-in">Sign In</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    )
}

export default Header;