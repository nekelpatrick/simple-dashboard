import styles from "./Header.module.css";
import igniteLogo from "../assets/ignite_logo.png";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="" />
    </header>
  );
};
