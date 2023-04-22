import Profile from "@/components/profile";
import ProgressNav from "@/components/progress-nav";
import SideNav from "@/components/side-nav";
import styles from "./dashboard.module.css";

const Dashboard = () => {
  return (
    <>
      <h1>dashboard</h1>
      <div className={styles.container}>
        <div className={styles.sideBar}>
          <SideNav />
        </div>
        <div>
          <h2>John Doe</h2>
          <ProgressNav />
          <Profile />
        </div>
      </div>
    </>
  );
};
export default Dashboard;
