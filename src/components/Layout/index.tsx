import { Box } from "@mui/material";

import styles from "./Layout.module.css";
import Footer from "./Footer";
import Header from "./Header";
import ThemeProvider from "./ThemeProvider";

interface LayoutProps {
  children: React.ReactNode;
}

declare module "@mui/material/styles" {
  interface Theme {
    colors: {
      gradients: {
        blue1: string;
        blue2: string;
        blue3: string;
        blue4: string;
        blue5: string;
        orange1: string;
        orange2: string;
        orange3: string;
        purple1: string;
        purple3: string;
        pink1: string;
        pink2: string;
        green1: string;
        green2: string;
        black1: string;
        black2: string;
        greenToRed: string;
        redToGreen: string;
      };
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    colors: {
      gradients: {
        blue1: string;
        blue2: string;
        blue3: string;
        blue4: string;
        blue5: string;
        orange1: string;
        orange2: string;
        orange3: string;
        purple1: string;
        purple3: string;
        pink1: string;
        pink2: string;
        green1: string;
        green2: string;
        black1: string;
        black2: string;
        greenToRed: string;
        redToGreen: string;
      };
    };
  }
}

export default function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider>
      <Header />
      <Box className={styles.root}>
        {children}
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
