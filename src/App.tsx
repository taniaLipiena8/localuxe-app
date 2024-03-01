import { useState } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import NavbarLayout from "./layout/NavbarLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import LoginPage from "./pages/authentications/login/LoginPage";
import RegisterPage from "./pages/authentications/register/RegisterPage";

function App() {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/*" element={<NavbarLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage/>} />
      </Route>
    </Routes>
  );
}

export default App;
