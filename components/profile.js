import styles from "./profile.module.css";
import { BsPerson } from "react-icons/bs";
import { HiOutlineIdentification } from "react-icons/hi";

const Profile = ({ activePageHandler }) => {
  return (
    <div className={styles.container}>
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          activePageHandler("card");
        }}>
        <label className={styles.labels}>Nickname</label>
        <div className={styles.textInputContainer}>
          <BsPerson className={styles.icon} />
          <input
            placeholder="Mini Mouse"
            type="text"
            name="Name"
            className={styles.input + " " + styles.textInput}
          />
        </div>
        <label className={styles.labels}>Alternative ID</label>
        <div className={styles.textInputContainer}>
          <HiOutlineIdentification className={styles.icon} />
          <input
            placeholder="Email"
            type="text"
            name="Alternate ID"
            className={styles.input + " " + styles.textInput}
          />
        </div>
        <label className={styles.labels}>Category</label>
        <select
          name="category"
          placeholder="Choose a category"
          className={styles.dropdown + " " + styles.input}>
          <option value="Housing">Housing</option>
          <option value="Food">Food</option>
          <option value="Utilities">Utilities</option>
          <option value="Supplies">Supplies</option>
          <option value="Transportation">Transportation</option>
          <option value="Childcarte">Childcarte</option>
          <option value="Healthcare">Healthcare</option>
          <option value="Legal">Legal</option>
          <option value="Job Training">Job Training</option>
          <option value="Emergency">Emergency</option>
        </select>
        <label className={styles.labels}>Funding Source</label>
        <select
          name="funding source"
          placeholder="Choose a category"
          className={styles.dropdown + " " + styles.input}>
          <option value="Credit Card ending in 0032">
            Credit Card ending in 0032
          </option>
          <option value="Bank Account ending in 3485">
            Bank Account ending in 3485
          </option>
        </select>
        <div className={styles.buttonsContainer}>
          <button className={styles.cancelButton + " " + styles.buttons}>
            Cancel
          </button>
          <button className={styles.nextButton + " " + styles.buttons}>
            Next
          </button>
        </div>
      </form>
    </div>
  );
};
export default Profile;
