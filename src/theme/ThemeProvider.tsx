import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import React from "react";
import theme from "./theme";

const ThemeProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

export default ThemeProvider;
