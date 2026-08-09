import "../styles/globals.css";
import { LanguageProvider } from "../context/LanguageContext";
import FacebookPixel from "../components/FacebookPixel";

export default function App({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <FacebookPixel />
      <Component {...pageProps} />
    </LanguageProvider>
  );
}
