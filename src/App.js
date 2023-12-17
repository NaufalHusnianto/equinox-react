import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";

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
      <div style={{height: '10vh'}} />
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
        <Route path="/login" element={<LoginLayout />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
