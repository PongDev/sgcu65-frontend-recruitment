import Link from "next/link";

function NavBar() {
  return (
    <div className="navbar">
      <div>
        <picture>
          <img src="/assets/sgcu-logo.svg" alt="SGCU Logo" />
        </picture>
        <span>ISD SGCU</span>
      </div>
      <div>
        <Link href="/register">Register</Link>
        <Link href="/">Home</Link>
      </div>
    </div>
  );
}

export default NavBar;
