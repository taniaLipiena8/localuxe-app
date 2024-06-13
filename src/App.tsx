/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import "./App.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import LoginPage from "./pages/authentications/login/LoginPage";
import RegisterPage from "./pages/authentications/register/RegisterPage";
import BaseLayout from "./layout/BaseLayout";
import InsightPage from "./pages/insights/insightList/InsightPage";
import { useContext, useEffect} from "react";
import BrandsPage from "./pages/brands/BrandsPage";
import AuthContext from "./context/AuthProvider";
import InsightDetailPage from "./pages/insights/insightDetail/InsightDetailPage";
import AccountPage from "./pages/account/AccountPage";
import { PrivateRoute } from "./PrivatePage";
import TukarPoinPage from "./pages/tukarPoin/TukarPoinPage";
import GamePage from "./pages/game/GamePage";

function App() {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (auth) {
      if (
        pathname.toLowerCase().includes("/login") ||
        pathname.toLowerCase().includes("/register")
      ) {
        navigate("/");
      }
    }
  }, [auth]);

  return (
    <Routes>
      <Route path="/*" element={<BaseLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="insights" element={<InsightPage />} />
        <Route path="insights/:id" element={<InsightDetailPage />} />
        <Route path="brands" element={<BrandsPage />} />
        <Route
          path="account"
          element={
            <PrivateRoute>
              <AccountPage />
            </PrivateRoute>
          }
        />
        <Route
          path="tukar-poin"
          element={
            <PrivateRoute>
              <TukarPoinPage />
            </PrivateRoute>
          }
        />
        <Route
          path="game"
          element={
            <PrivateRoute>
              <GamePage />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
