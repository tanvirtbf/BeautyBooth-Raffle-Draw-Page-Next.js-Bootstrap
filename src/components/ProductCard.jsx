import Image from "next/image";
import Vector from "../../public/Vector.png";
import styles from "./ProductCard.module.css";

const ProductCard = ({ title, person, url, prizeNo }) => {
  console.log(url);
  return (
    <div className={`${styles.cardBody}`}>
      <div
        className={`${styles.badge}`}
        style={
          prizeNo === 1
            ? { backgroundColor: "#FF1A58" }
            : prizeNo === 2
            ? { backgroundColor: "#9747FF" }
            : { backgroundColor: "#00CA8D" }
        }
      >
        <p>{`${prizeNo}${prizeNo===1?'st': prizeNo===2?'nd': prizeNo===3?'rd':'th'}`} Prize</p>
      </div>
      <div className={`${styles.pic}`}>
        <Image src={url} alt={title} />
      </div>
      <div className={`${styles.text}`}>
        <h3>{title}</h3>
        <div className={`${styles.winner}`}>
          <span>
            {" "}
            <Image src={Vector} alt={Vector} />{" "}
          </span>
          <p>Winner: {person} Person</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
