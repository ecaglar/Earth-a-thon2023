import Profile from "@/components/profile";
import Card from "@/components/card";
import ProgressNav from "@/components/progress-nav";
import SideNav from "@/components/side-nav";
import styles from "./dashboard.module.css";
import user from "../../public/user.png";
import Image from "next/image";
import { useState } from "react";
import Submit from "@/components/submit";

const Dashboard = () => {
  const [activePage, setActivePage] = useState("profile");
  const [completed, setCompleted] = useState(0);

  // const completeHandler = () => {
  //   setCompleted(completed + 1);
  // };

  const activePageHandler = (input) => {
    setActivePage(input);
    setCompleted(completed + 1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.sideBar}>
        <SideNav />
      </div>
      <div className={styles.right}>
        <div className={styles.user_container}>
          <Image src={user} width={44} height={44} alt="user" />
          <h2 className={styles.user}>John Doe</h2>
        </div>

        <ProgressNav completed={completed} activePage={activePage} />
        {activePage === "profile" && (
          <Profile activePageHandler={activePageHandler} />
        )}
        {activePage === "card" && <Card />}
        {activePage === "submit" && <Submit />}
      </div>
    </div>
  );
};
export default Dashboard;
