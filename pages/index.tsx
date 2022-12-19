import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";


export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
        consectetur, non dignissimos dolorem dolore repellendus? Quas iste ipsam
        nostrum delectus magnam hic, at fugit optio, in, corrupti error illum
        placeat?
      </p>
      <Link href="/ninja/Test" className={styles.btn}>Ninja list</Link>
    </div>
  );
}
