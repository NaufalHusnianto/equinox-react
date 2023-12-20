import { useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";

function MainLayout({ children }) {
    const location = useLocation();
    let backgroundImage = '/dashboard-bg.jpg';
  
    if (location.pathname === '/perseorangan/simpanan') {
      backgroundImage = '/simpanan-bg.jpg';
    } else if (location.pathname === '/perseorangan/pinjaman') {
      backgroundImage = '/pinjaman-bg.jpg';
    } else if (location.pathname === '/perseorangan/investasi-asuransi') {
      backgroundImage = '/asuransi-investasi.jpg'
    } else if (location.pathname === '/equinox-credit') {
        backgroundImage = '';
    }
  
    const containerStyle = {
      background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("${backgroundImage}")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: location.pathname === '/simpanan-perseorangan' ? 'none' : '100vh',
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