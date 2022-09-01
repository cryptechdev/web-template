import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "components/ThemeToggle";
import MainMenu from "./MainMenu";

function Nav() {
  const PUBLIC_SITE_ICON_URL =
    process.env.NEXT_PUBLIC_SITE_ICON_URL || "/site_logo.svg";
  const PUBLIC_SITE_TITLE =
    process.env.NEXT_PUBLIC_SITE_TITLE || "Web Template";

  return (
    <div className="border-b w-screen px-2 md:px-16">
      <nav className="flex flex-wrap text-center md:text-left md:flex flex-row w-full justify-between items-center py-4 ">
        <div className="flex items-center">
          <Link href="/">
            <a className="flex items-center">
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
      </nav>
    </div>
  );
}

export default Nav;
