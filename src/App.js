import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import MainLayout from "./MainLayout";

import SimpananPersonal from "./pages/perseorangan/SimpananPersonal";
import PinjamanPersonal from "./pages/perseorangan/PinjamanPersonal";
import InvestasiAsuransi from "./pages/perseorangan/InvestasiAsuransi";
import CreditCard from "./pages/perseorangan/CreditCard";

// Routing
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout><Dashboard /></MainLayout>} />
        <Route path="/perseorangan">
          <Route path="simpanan" element={<MainLayout><SimpananPersonal /></MainLayout>} />
          <Route path="pinjaman" element={<MainLayout><PinjamanPersonal /></MainLayout>} />
          <Route path="investasi-asuransi" element={<MainLayout><InvestasiAsuransi /></MainLayout>} />
        </Route>
        <Route path="/equinox-credit" element={<MainLayout><CreditCard /></MainLayout>} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
