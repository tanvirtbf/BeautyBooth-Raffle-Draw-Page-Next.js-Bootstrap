import Image from "next/image";
import Vector from '../../public/Vector.png'
import styles from "./ProductCard.module.css";

const ProductCard = ({ title, person, url }) => {
  return (
    <div className={`${styles.cardBody}`}>
      <div className={`${styles.pic}`}>
        <Image src={url} alt={title}/>
      </div>
      <div className={`${styles.text}`}>
        <h3>{title}</h3>
        <div className={`${styles.winner}`}>
          <span> <Image src={Vector} alt={Vector}/> </span>
          <p>Winner: {person} Person</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
