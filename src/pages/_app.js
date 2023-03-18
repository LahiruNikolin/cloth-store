import "@/styles/globals.css";
import MainLayout from "@/components/global/MainLayout";
import { ThemeProvider } from "@mui/material/styles";
import { primaryTheme } from "@/config/themes";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={primaryTheme}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  );
}
