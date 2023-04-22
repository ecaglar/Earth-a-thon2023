import styles from "./index.module.css";
import { CiMail } from "react-icons/ci";
import { AiOutlineLock } from "react-icons/ai";
import Image from "next/image";
import T2L from "../../public/T2LLogo.svg";
import Link from "next/link";

import { AiOutlineEyeInvisible } from "react-icons/ai";

import FlexLogo from "public/flex-logo.svg";

const Login = () => {
  return (
    <div className={styles.container}>
      <form method="POST" action="" className={styles.form}>
        <Image
          src={T2L}
          className={styles.logo}
          alt="logo"
          width={257}
          height={56.52}
        />
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
        <Link href={"/dashboard"} className={styles.button} type="submit">
          Login
        </Link>
      </form>
    </div>
  );
};

export default Login;
