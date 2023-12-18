import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";

import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";

import Header from "./components/Header";
import Footer from "./components/Footer";
import SimpananPersonal from "./pages/SimpananPersonal";
import PinjamanPersonal from "./pages/PinjamanPersonal";
import InvestasiAsuransi from "./pages/InvestasiAsuransi";

// Untuk Dashboard
function MainLayout({ children }) {
  const location = useLocation();
  let backgroundImage = '/dashboard-bg.jpg'; // Default background

  if (location.pathname === '/simpanan-perseorangan') {
    backgroundImage = '/simpanan-bg.jpg';
  } else if (location.pathname === '/pinjaman-perseorangan') {
    backgroundImage = '/pinjaman-bg.jpg';
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

// Untuk Lojinn
function LoginLayout() {
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
      <Login />
      <Footer />
    </Container>
  );
}

// Routing
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout><Dashboard /></MainLayout>} />
        <Route path="/simpanan-perseorangan" element={<MainLayout><SimpananPersonal /></MainLayout>} />
        <Route path="/pinjaman-perseorangan" element={<MainLayout><PinjamanPersonal /></MainLayout>} />
        <Route path="/investasi-asuransi" element={<MainLayout><InvestasiAsuransi /></MainLayout>} />
        <Route path="/login" element={<LoginLayout />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
