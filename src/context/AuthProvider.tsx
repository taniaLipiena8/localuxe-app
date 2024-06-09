/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext,  useState } from "react";

type authType = {
  auth: any;
  setAuth: (data: any)=> void;
  exp: any;
  setExp: (data: any)=> void;
  token: any;
  setToken:(data: any)=> void;
};

const initValue = {
  auth: null,
  setAuth: () => {},
  exp: null,
  setExp: () => {},
  token: null,
  setToken: () => {},
};

const AuthContext = createContext<authType>(initValue);

export const AuthProvider = ({ children }: any) => {
  const [auth, setAuth] = useState<any>();
  const [exp, setExp] = useState<any>();
  const [token, setToken] = useState<any>();

  return (
    <AuthContext.Provider
      value={{ auth, setAuth, exp, setExp, token, setToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
