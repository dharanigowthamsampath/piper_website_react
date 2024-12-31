import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src="/assets/img/logo.png" alt="Logo" width={40} height={40} />
        </Link>
      </div>
      <div className={styles.navLinks}>
        <Link href="/" className={styles.navLink}>
          Home
        </Link>
        <Link href="/courses" className={styles.navLink}>
          Courses
        </Link>
        <Link href="/about" className={styles.navLink}>
          About
        </Link>
        <Link href="/resources" className={styles.navLink}>
          Resources
        </Link>
        <Link href="/contact" className={styles.navLink}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
