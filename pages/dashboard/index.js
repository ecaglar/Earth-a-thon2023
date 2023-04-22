import Profile from "@/components/profile";
import ProgressNav from "@/components/progress-nav";
import SideNav from "@/components/side-nav";
import styles from "./dashboard.module.css";
import user from "../../public/user.png";
import Image from "next/image";

const Dashboard = () => {
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

        <ProgressNav />
        <Profile />
      </div>
    </div>
  );
};
export default Dashboard;
