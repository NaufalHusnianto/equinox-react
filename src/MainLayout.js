import { useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";

function MainLayout({ children }) {
    const location = useLocation();
    let backgroundImage = '/image/main-bg.jpg';
  
    if (location.pathname === '/produk/equinox-debit') {
      backgroundImage = ''
    } else if (location.pathname === '/produk/equinox-credit') {
      backgroundImage = '';
    } else if (location.pathname === '/produk/corporate-card') {
      backgroundImage = '';
    }
  
    const containerStyle = {
      background: backgroundImage ? `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("${backgroundImage}")` : 'black',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
    };
  
    return (
      <Container fluid style={containerStyle} className="d-flex flex-column justify-content-between">
        <Header />
        {children}
        <Footer />
      </Container>
    );
  }

export default MainLayout;