import Link from "next/link";

function MainMenu() {
  return (
    <>
      <Link href="/about">
        <a className="ml-3 md:ml-5 link link-hover text-xl md:text-2xl">
          About
        </a>
      </Link>
    </>
  );
}

export default MainMenu;
