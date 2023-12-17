import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import { Container, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";

import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";

import Header from "./components/Header";
import Footer from "./components/Footer";
import SimpananPersonal from "./pages/SimpananPersonal";

// Untuk Dashboard
function MainLayout({ children }) {
  const location = useLocation();
  const containerStyle = {
    background:
      location.pathname === "/simpanan-perseorangan"
        ? 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("/simpanan-bg.jpg")'
        : 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("/dashboard-bg.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight:
      location.pathname === "/simpanan-perseorangan" 
      ? 'none' 
      : '100vh',
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout><Dashboard /></MainLayout>} />
            <Route path="/simpanan-perseorangan" element={<MainLayout><SimpananPersonal /></MainLayout>} />
            <Route path="/login" element={<LoginLayout />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
