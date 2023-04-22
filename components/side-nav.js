import Image from "next/image";
import T2L from "../public/T2LLogo.svg";
import HomeSvg from "../assets/home.jsx";
import CardsSvg from "../assets/cards.jsx";
import FundsSvg from "../assets/funds.jsx";
import ReportsSvg from "../assets/reports.jsx";
import TeamSvg from "../assets/team.jsx";
import styles from "./side-nav.module.css";
import logout from "../assets/logout.svg";
import { useState } from "react";
import Link from "next/link";

const SideNav = () => {
  const [active, setActive] = useState("home");

  const buttonHandler = (target) => {
    setActive(target);
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Image src={T2L} height={33.63} width={153} alt="logo" />
        <div className={styles.button_container}>
          <button
            onClick={() => buttonHandler("home")}
            className={styles.nav_button}
            style={
              active === "home"
                ? { backgroundColor: "black", color: "white" }
                : {}
            }>
            <HomeSvg color={active === "home" ? "white" : "black"} /> Home
          </button>
          <button
            onClick={() => buttonHandler("cards")}
            className={styles.nav_button}
            style={
              active === "cards"
                ? { backgroundColor: "black", color: "white" }
                : {}
            }>
            <CardsSvg color={active === "cards" ? "white" : "black"} /> Cards
          </button>
          <button
            onClick={() => buttonHandler("funds")}
            className={styles.nav_button}
            style={
              active === "funds"
                ? { backgroundColor: "black", color: "white" }
                : {}
            }>
            <FundsSvg color={active === "funds" ? "white" : "black"} />
            Funds
          </button>
          <button
            onClick={() => buttonHandler("reports")}
            className={styles.nav_button}
            style={
              active === "reports"
                ? { backgroundColor: "black", color: "white" }
                : {}
            }>
            <ReportsSvg color={active === "reports" ? "white" : "black"} />{" "}
            Reports
          </button>
          <button
            onClick={() => buttonHandler("team")}
            className={styles.nav_button}
            style={
              active === "team"
                ? { backgroundColor: "black", color: "white" }
                : {}
            }>
            <TeamSvg color={active === "team" ? "white" : "black"} /> Team
          </button>
        </div>
      </div>
      <Link href="/login" className={styles.log_out_btn}>
        <Image src={logout} alt="log out" />
        Log out
      </Link>
    </div>
  );
};
export default SideNav;
