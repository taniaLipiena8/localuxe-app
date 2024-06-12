/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useEffect, useState } from "react";

type authType = {
  auth: any;
  setAuth: (data: any) => void;
  exp: any;
  setExp: (data: any) => void;
  token: any;
  setToken: (data: any) => void;
  refreshToken: any;
  setRefreshToken: (data: any) => void;
};

const initValue = {
  auth: null,
  setAuth: () => {},
  exp: null,
  setExp: () => {},
  token: null,
  setToken: () => {},
  refreshToken: null,
  setRefreshToken: () => {},
};

const AuthContext = createContext<authType>(initValue);

export const AuthProvider = ({ children }: any) => {
  const [auth, setAuth] = useState<any>();
  const [exp, setExp] = useState<any>();
  const [token, setToken] = useState<any>();
  const [refreshToken, setRefreshToken] = useState<any>();

  const persistAuth = localStorage.getItem("auth");
  const persistExp = localStorage.getItem("exp");
  const persistRefresh = localStorage.getItem("refreshToken");

  useEffect(() => {
    if (persistAuth && persistExp && persistRefresh) {
      setAuth(persistAuth);
      setExp(Number(persistExp));
      setRefreshToken(persistRefresh);
    }
  }, [persistAuth, persistExp, persistRefresh]);

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        exp,
        setExp,
        token,
        setToken,
        refreshToken,
        setRefreshToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
