import { useSigningClient } from "contexts/cosmwasm";
import { useEffect, useCallback } from "react";
import WalletNav from "./WalletNav";

function KeplrWalletNav() {
  const { walletAddress, connectWallet, disconnect } = useSigningClient();

  const reconnect = useCallback(() => {
    disconnect();
    connectWallet();
  }, [disconnect, connectWallet]);

  useEffect(() => {
    window.addEventListener("keplr_keystorechange", reconnect);

    return () => {
      window.removeEventListener("keplr_keystorechange", reconnect);
    };
  }, [reconnect]);

  return (
    <WalletNav
      walletAddress={walletAddress}
      connect={connectWallet}
      disconnect={disconnect}
    ></WalletNav>
  );
}

export default KeplrWalletNav;
