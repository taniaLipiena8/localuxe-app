import '@fontsource/lato'
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    chart: {
      primary: string;
      secondary: string;
    };
  }

  interface PaletteOptions {
    chart?: {
      primary?: string;
      secondary?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#CE8483",
      dark: "#964A52",
    },
    common: {
      white: "#FAFEFD",
    },
    divider: "#BCC1C7",
    chart: {
      primary: "#F8C2B6",
      secondary: "#F4E0D9",
    },
  },
  typography: {
    fontFamily: [
        'Lato',
        'sans-serif',
      ].join(','),
  },
});

export default theme;
