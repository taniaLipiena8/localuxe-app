import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import LoginPage from "./pages/authentications/login/LoginPage";
import RegisterPage from "./pages/authentications/register/RegisterPage";
import BaseLayout from "./layout/BaseLayout";
import InsightPage from "./pages/insights/InsightPage";

function App() {

  return (
    <Routes>
      <Route path="/*" element={<BaseLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage/>} />
        <Route path="insights" element={<InsightPage/>} />
      </Route>
    </Routes>
  );
}

export default App;
