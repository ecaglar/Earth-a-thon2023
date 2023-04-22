import styles from "./index.module.css";
import { CiMail } from "react-icons/ci";
import { AiOutlineLock } from "react-icons/ai";
import { AiOutlineEyeInvisible } from 'react-icons/ai'
import Image from 'next/image'
import FlexLogo from 'public/flex-logo.svg'

const Login = () => {
  return (
    <div>
      <form method="POST" action="" className={styles.form}>
        <Image src={FlexLogo} className={styles.logo} alt="large logo" />
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
          <AiOutlineEyeInvisible />
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
