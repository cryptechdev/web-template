import { useWallet, WalletStatus } from "@terra-money/wallet-provider";
import { useEffect, useState } from "react";
import WalletNav from "./WalletNav";

function TerraWalletNav() {
  const { status, wallets, network, connect, disconnect } = useWallet();
  const [walletAddress, setWalletAddress] = useState("");

  useEffect(() => {
    if (status === WalletStatus.WALLET_CONNECTED) {
      setWalletAddress(wallets[0].terraAddress);
    } else {
      setWalletAddress("");
    }
  }, [status, wallets]);

  return (
    <WalletNav
      walletAddress={walletAddress}
      connect={connect}
      disconnect={disconnect}
    ></WalletNav>
  );
}

export default TerraWalletNav;
