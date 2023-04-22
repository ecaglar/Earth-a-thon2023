import image from "../public/hack-success.png";
import Image from "next/image";
import styles from "./submit.module.css";
const Submit = () => {
  return (
    <div className={styles.container}>
      <Image src={image} height={408} width={483} alt="img" />
    </div>
  );
};

export default Submit;
