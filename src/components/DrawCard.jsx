"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./DrawCard.module.css";

const DrawCard = ({ title, para, icon, line }) => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenSize]);
  console.log(screenSize)
  return (
    <div className={`${styles.drawCard}`}>
      <div className={`${styles.icon}`}>
        <Image src={icon} alt={icon} />
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
