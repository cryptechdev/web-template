import "styles/globals.css";
import "styles/fontawesome/css/all.min.css";
import type { AppProps } from "next/app";
import Layout from "components/Layout";
import { SigningCosmWasmProvider } from "contexts/cosmwasm";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import Gate from "components/Gate";
import { disableReactDevTools } from "components/disableReactDevTools";
import {
  getChainOptions,
  WalletControllerChainOptions,
  WalletProvider,
} from "@terra-money/wallet-provider";
const USE_WALLET = process.env.NEXT_PUBLIC_USE_WALLET === "true";
const WALLET = process.env.NEXT_PUBLIC_WALLET || "keplr";

const queryClient = new QueryClient();

if (typeof window !== "undefined") {
  disableReactDevTools();
}

function MyApp({
  Component,
  pageProps,
  defaultNetwork,
  walletConnectChainIds,
}: AppProps & WalletControllerChainOptions) {
  const appContent = (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );

  let app = appContent;

  if (USE_WALLET) {
    if (WALLET === "keplr") {
      app = (
        <SigningCosmWasmProvider>
          <Gate>{appContent}</Gate>
        </SigningCosmWasmProvider>
      );
    } else if (WALLET === "terra") {
      app = (
        <WalletProvider
          defaultNetwork={defaultNetwork}
          walletConnectChainIds={walletConnectChainIds}
        >
          {appContent}
        </WalletProvider>
      );
    }
  }

  return <Gate>{app}</Gate>;
}

MyApp.getInitialProps = async () => {
  const chainOptions = await getChainOptions();
  return {
    ...chainOptions,
  };
};

export default MyApp;
