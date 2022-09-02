import "styles/globals.css";
import "styles/fontawesome/css/all.min.css";
import type { AppProps } from "next/app";
import Layout from "components/Layout";
import { SigningCosmWasmProvider } from "contexts/cosmwasm";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const USE_WALLET = process.env.NEXT_PUBLIC_USE_WALLET === "true";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return USE_WALLET ? (
    <>
      <SigningCosmWasmProvider>
        <QueryClientProvider client={queryClient}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </QueryClientProvider>
      </SigningCosmWasmProvider>
    </>
  ) : (
    <>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </>
  );
}
export default MyApp;
