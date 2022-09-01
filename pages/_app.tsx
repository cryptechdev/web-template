import "styles/globals.css";
import "styles/fontawesome/css/all.min.css";
import type { AppProps } from "next/app";
import Layout from "components/Layout";
import { SigningCosmWasmProvider } from "contexts/cosmwasm";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* 
      If you need Wallet access, wrap your app in the SigningCosmWasmProvider to provide context
    */}
      <SigningCosmWasmProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SigningCosmWasmProvider>
    </>
  );
}
export default MyApp;
