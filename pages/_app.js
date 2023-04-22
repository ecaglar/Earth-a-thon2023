import { Karla } from "next/font/google";
import { Andada_Pro } from "next/font/google";
import "@/styles/globals.css";

const andadaPro = Andada_Pro({
  variable: "--andada-pro",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});
const karla = Karla({
  variable: "--karla",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${andadaPro.variable}  ${karla.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
