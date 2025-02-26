/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useEffect, useState } from "react";

type authType = {
  auth: any;
  setAuth: (data: any) => void;
  token: any;
  setToken: (data: any) => void;
};

const initValue = {
  auth: null,
  setAuth: () => {},
  token: null,
  setToken: () => {},
};

const AuthContext = createContext<authType>(initValue);

export const AuthProvider = ({ children }: any) => {
  const [auth, setAuth] = useState<any>();
  const [token, setToken] = useState<any>();

  const persistAuth = localStorage.getItem("auth");

  useEffect(() => {
    if (persistAuth ) {
      setAuth(persistAuth);
    }
  }, [persistAuth]);

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        token,
        setToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
