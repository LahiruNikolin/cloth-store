import "@/styles/globals.css";
import MainLayout from "@/components/layout/MainLayout";
import { ThemeProvider } from "@mui/material/styles";
import { primaryTheme } from "@/config/themes";
import { ProductProvider } from "@/context/globalContext";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={primaryTheme}>
      <ProductProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ProductProvider>
    </ThemeProvider>
  );
}
