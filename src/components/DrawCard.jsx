import Image from "next/image";
import styles from "./DrawCard.module.css";

const DrawCard = ({ title, para, icon, line }) => {
  return (
    <div className={`${styles.drawCard}`}>
      <div className={`${styles.icon}`}>
        <Image src={icon} alt={icon} width={100} height={100} />
      </div>
      <div className={`${styles.text}`}>
        <div className={`${styles.pureText}`}>
          <h3>{title}</h3>
          <p>{para}</p>
        </div>
        {line && (
          <div className={`${styles.line}`}>
            <Image src={line} alt={line} />
          </div>
        )}
      </div>
    </div>
  );
};

export default DrawCard;
