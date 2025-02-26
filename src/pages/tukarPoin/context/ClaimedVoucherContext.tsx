import { createContext } from "react";

type ClaimedVoucherContextType = {
  getClaimedVouchers: () => void;
};

const defaultValue: ClaimedVoucherContextType = {
  getClaimedVouchers: () => {},
};

const ClaimedVoucherContext = createContext(defaultValue);

export default ClaimedVoucherContext;
