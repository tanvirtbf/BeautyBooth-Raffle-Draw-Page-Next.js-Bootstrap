import Image from "next/image";
import styles from "./DrawCard.module.css";

const DrawCard = ({ title, para, icon, line }) => {
  return (
    <div className={`${styles.drawCard}`}>
      <div className={`${styles.icon}`}>
        <Image src={icon} />
      </div>
      <div className={`${styles.text}`}>
        <div className={`${styles.pureText}`}>
          <h3>{title}</h3>
          <p>{para}</p>
        </div>
        <div className={`${styles.line}`}>
          <Image src={line} />
        </div>
      </div>
    </div>
  );
};

export default DrawCard;
