import "@/styles/globals.css";
import MainLayout from "@/components/global/MainLayout";

export default function App({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
