// import style from "../styles/Navbar.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav className="nav">
        <div className="logo">
          <h1>Image Ninja</h1>
        </div>
        <Link href="/">Home</Link>
        <Link href="/About">About</Link>
        <Link href="/ninja">Ninja Listing</Link>
      </nav>
    </div>
  );
};

export default Navbar;
