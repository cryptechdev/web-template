import "styles/globals.css";
import "styles/fontawesome/css/all.min.css";
import type { AppProps } from "next/app";
import Layout from "components/Layout";
import { SigningCosmWasmProvider } from "contexts/cosmwasm";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import Gate from "components/Gate";
import { disableReactDevTools } from "components/disableReactDevTools";
const USE_WALLET = process.env.NEXT_PUBLIC_USE_WALLET === "true";

const queryClient = new QueryClient();

if (typeof window !== "undefined") {
  disableReactDevTools();
}

function MyApp({ Component, pageProps }: AppProps) {
  const appContent = (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );

  const app = USE_WALLET ? (
    <SigningCosmWasmProvider>{appContent}</SigningCosmWasmProvider>
  ) : (
    appContent
  );

  return <Gate>{app}</Gate>;
}
export default MyApp;
