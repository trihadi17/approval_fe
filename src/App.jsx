import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Layout
import MainLayout from "./pages/layouts/MainLayout";
import AuthLayout from "./pages/layouts/AuthLayout";

// Pages
import UserList from "./pages/UserList";
import UserDetail from "./pages/UserDetail";
import PermissionList from "./pages/PermissionList";
import PermissionDetail from "./pages/PermissionDetail";

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
          <Route path="/" element={<UserList />}></Route>
          <Route path="/user/detail" element={<UserDetail />}></Route>
          <Route path="/permission" element={<PermissionList />}></Route>
          <Route
            path="/permission/detail"
            element={<PermissionDetail />}
          ></Route>
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
