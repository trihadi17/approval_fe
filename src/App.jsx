import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Layout
import MainLayout from "./pages/layouts/MainLayout";
import AuthLayout from "./pages/layouts/AuthLayout";

// Pages
import Beranda from "./pages/Beranda";
import Tentang from "./pages/Tentang";
import Kontak from "./pages/Kontak";

// Auth
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

// Komponen Utama Aplikasi (Master Komponen)
function App() {
  return (
    <Router>
      <Routes>
        {/* Main Layout (Tampilan Jika Sudah Login) */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Beranda />}></Route>
          <Route path="/tentang" element={<Tentang />}></Route>
          <Route path="/kontak" element={<Kontak />}></Route>
        </Route>

        {/* Auth Layout (Login, Register) */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
