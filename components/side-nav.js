import Image from "next/image";
import T2L from "../public/T2LLogo.svg";
import styles from "./side-nav.module.css";
const SideNav = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Image src={T2L} height={33.63} width={153} alt="logo" />
        <div className={styles.button_container}>
          <button className={styles.nav_button}>Home</button>
          <button className={styles.nav_button}>Cards</button>
          <button className={styles.nav_button}>Funds</button>
          <button className={styles.nav_button}>Reports</button>
          <button className={styles.nav_button}>Team</button>
        </div>
      </div>
      <button className={styles.log_out_btn}>Log out</button>
    </div>
  );
};
export default SideNav;
