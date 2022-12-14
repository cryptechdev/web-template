import { ReactNode, useEffect } from "react";
import Head from "next/head";
import Nav from "./Nav";
import Footer from "./Footer";
import TerraWalletNav from "./TerraWalletNav";
import KeplrWalletNav from "./KeplrWalletNav";
import { useRecoilState } from "recoil";
import { themeState } from "state/themeState";
import { ThemeProvider } from "@mui/material/styles";
import { generateTheme } from "styles/themeConverter";
const USE_WALLET = process.env.NEXT_PUBLIC_USE_WALLET === "true";
const WALLET = process.env.NEXT_PUBLIC_WALLET || "keplr";

export default function Layout({ children }: { children: ReactNode }) {
  const [theme] = useRecoilState(themeState);
  return (
    <ThemeProvider theme={generateTheme(theme)}>
      <div className="flex flex-col items-center justify-center min-h-screen bg-base-100 text-base-content">
        <Head>
          <title>{process.env.NEXT_PUBLIC_SITE_TITLE}</title>
          <meta
            name="description"
            content="Cryptech Developments for your next Web3 project"
          />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest"></link>
        </Head>

        {USE_WALLET ? (
          WALLET === "keplr" ? (
            <KeplrWalletNav />
          ) : (
            <TerraWalletNav />
          )
        ) : (
          <Nav />
        )}

        <main className="flex flex-col items-center justify-center w-full flex-1 p-2 md:px-20 text-center">
          {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
