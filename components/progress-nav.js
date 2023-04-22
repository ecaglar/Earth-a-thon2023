import styles from "./progress-nav.module.css";
import { useState } from "react";

const ProgressNav = ({ activePage, completed }) => {
  // const [active, setActive] = useState("profile");

  return (
    <>
      <h2 className={styles.title}>Create New Card</h2>
      <div className={styles.progress}>
        <div className={styles.dot_container}>
          <div className={styles.dot_container_sm}>
            <h3>Profile</h3>
            <div
              className={styles.dot}
              style={
                completed === 0
                  ? { borderColor: "#4F46E5" }
                  : { borderColor: "#4F46E5", backgroundColor: "#4F46E5" }
              }>
              <div
                className={styles.inner_dot}
                style={{ backgroundColor: "#4F46E5" }}></div>
            </div>
          </div>
          <div className={styles.dot_container_sm}>
            <h3>Card</h3>
            <div
              className={styles.dot}
              style={completed > 0 ? { borderColor: "#4F46E5" } : {}}>
              <div
                className={styles.inner_dot}
                style={
                  activePage === "card" ? { backgroundColor: "#4F46E5" } : {}
                }></div>
            </div>
          </div>

          <div className={styles.dot_container_sm}>
            <h3>Review</h3>
            <div
              className={styles.dot}
              style={activePage === "review" ? { borderColor: "#4F46E5" } : {}}>
              <div
                className={styles.inner_dot}
                style={
                  activePage === "review" ? { backgroundColor: "#4F46E5" } : {}
                }></div>
            </div>
          </div>
          <div className={styles.dot_container_sm}>
            <h3>Submit</h3>
            <div
              className={styles.dot}
              style={activePage === "submit" ? { borderColor: "#4F46E5" } : {}}>
              <div
                className={styles.inner_dot}
                style={
                  activePage === "submit" ? { backgroundColor: "#4F46E5" } : {}
                }></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProgressNav;
