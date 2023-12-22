import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import MainLayout from "./MainLayout";

import SimpananPersonal from "./pages/perseorangan/SimpananPersonal";
import PinjamanPersonal from "./pages/perseorangan/PinjamanPersonal";
import InvestasiAsuransi from "./pages/perseorangan/InvestasiAsuransi";
import CreditCard from "./pages/produk/CreditCard";
import DebitCard from "./pages/produk/DebitCard";
import SimpananBisnis from "./pages/bisnis/SimpananBisnis";
import PinjamanBisnis from "./pages/bisnis/PinjamanBisnis";
import CorporateCard from "./pages/produk/CorporateCard";
import CashManagement from "./pages/bisnis/CashManagement";
import TradeFinance from "./pages/bisnis/TradeFinance";
import InternationalBanking from "./pages/bisnis/InternationalBanking";
import TentangEquinox from "./pages/TentangEquinox";

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
        <Route path="/bisnis">
          <Route path="simpanan" element={<MainLayout><SimpananBisnis /></MainLayout>} />
          <Route path="pinjaman" element={<MainLayout><PinjamanBisnis /></MainLayout>} />
          <Route path="cash-management" element={<MainLayout><CashManagement /></MainLayout>} />
          <Route path="trade-finance" element={<MainLayout><TradeFinance /></MainLayout>} />
          <Route path="international-banking" element={<MainLayout><InternationalBanking /></MainLayout>} />
        </Route>
        <Route path="/produk">
          <Route path="equinox-credit" element={<MainLayout><CreditCard /></MainLayout>} />
          <Route path="equinox-debit" element={<MainLayout><DebitCard /></MainLayout>} />
          <Route path="corporate-card" element={<MainLayout><CorporateCard /></MainLayout>} />
        </Route>
        <Route path="/tentang-equinox" element={<MainLayout><TentangEquinox /></MainLayout>} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
