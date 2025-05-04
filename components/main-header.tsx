import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.png";
import styles from "./main-header.module.css";

const MainHeader = (): React.JSX.Element => {
  return (
    <div className={styles.container}>
      <h1>CANADIAN OWNED & MADE - Goodfood</h1>
      <Link href="/">
        <Image src={logo} alt="logo" width={400} height={300} priority />
        Goodfood
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Community</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default MainHeader;
