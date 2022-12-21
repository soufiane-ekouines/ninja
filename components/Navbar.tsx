// import style from "../styles/Navbar.css";
import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
  return (
    <div>
      <nav className="nav">
        <div className="logo">
          <Image src="/mastercard.png" width={128} height={77} />
        </div>
        <Link href="/">Home</Link>
        <Link href="/About">About</Link>
        <Link href="/ninja">Ninja Listing</Link>
      </nav>
    </div>
  );
};

export default Navbar;
