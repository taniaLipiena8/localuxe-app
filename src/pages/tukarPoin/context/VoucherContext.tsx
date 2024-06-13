import { createContext } from "react";

type VoucherContextType = {
  value: string;
  getPoint: () => void;
};

const defaultValue: VoucherContextType = {
  value: "1",
  getPoint: () => {},
};

const VoucherContext = createContext(defaultValue);

export default VoucherContext;
