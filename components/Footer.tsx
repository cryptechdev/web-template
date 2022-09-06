const PASSWORD = process.env.NEXT_PUBLIC_PASSWORD || "";
export default function Footer() {
  return (
    <footer className="relative flex items-center justify-center w-full h-24 border-t">
      Made by{" "}
      <a
        className="pl-1 link link-primary link-hover"
        href="https://cryptech.dev"
      >
        Cryptech
      </a>
      {PASSWORD.length > 0 && (
        <a
          role="button"
          onClick={(e) => {
            localStorage.removeItem("password");
            window.location.reload();
          }}
          className="absolute right-0 text-xs mr-3 link link-hover link-secondary"
        >
          Sign Out
        </a>
      )}
    </footer>
  );
}
