import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "components/ThemeToggle";
import MainMenu from "./MainMenu";
import { Button } from "@mui/material";
import { formatWalletAddress } from "util/conversion";

function WalletNav({
  walletAddress,
  connect,
  disconnect,
}: {
  walletAddress: string;
  connect: Function;
  disconnect: Function;
}) {
  const handleConnect = () => {
    if (walletAddress.length === 0) {
      connect();
    } else {
      disconnect();
    }
  };

  const PUBLIC_SITE_ICON_URL =
    process.env.NEXT_PUBLIC_SITE_ICON_URL || "/site_logo.svg";
  const PUBLIC_SITE_TITLE =
    process.env.NEXT_PUBLIC_SITE_TITLE || "Web Template";

  return (
    <div className="border-b w-screen px-2 md:px-16">
      <nav className="flex flex-wrap text-center md:text-left md:flex flex-row w-full justify-between items-center py-4 ">
        <div className="flex items-center">
          <Link href="/">
            <a>
              {PUBLIC_SITE_ICON_URL.length > 0 ? (
                <Image
                  src={PUBLIC_SITE_ICON_URL}
                  height={32}
                  width={32}
                  alt="Logo"
                />
              ) : (
                <span className="text-2xl">{PUBLIC_SITE_TITLE}</span>
              )}
            </a>
          </Link>
          <MainMenu />
        </div>
        <ThemeToggle />
        <div className="flex flex-grow lg:flex-grow-0 max-w-full">
          <Button variant="outlined" onClick={handleConnect}>
            {walletAddress.length > 0
              ? formatWalletAddress(walletAddress)
              : "Connect Wallet"}
          </Button>
        </div>
      </nav>
    </div>
  );
}

export default WalletNav;
