import styles from "./index.module.css";
import { CiMail } from "react-icons/ci";
import { AiOutlineLock } from "react-icons/ai";
// import { flexLogo } from 'public\images\flex-support-logo.svg'

const Login = () => {
  return (
    <div>
      <form method="POST" action="" className={styles.form}>
        <img src="/images/flex-support-logo.svg" className={styles.logo} />
        <div>
          <p className={styles.label}>Email</p>
          <CiMail className={styles.inputIcon} />
          <input
            className={styles.input}
            type="text"
            name="email"
            placeholder="Your Email"
          />
        </div>

        <div>
          <p className={styles.label}>Password</p>
          <AiOutlineLock className={styles.inputIcon} />
          <input
            className={styles.input}
            type="password"
            name="password"
            placeholder="Your Password"
          />
        </div>

        <p className={styles.forgot}>Forgot Password?</p>
        <button className={styles.button} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
