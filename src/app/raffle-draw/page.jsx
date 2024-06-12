import DrawCard from "@/components/DrawCard";
import ProductCard from "@/components/ProductCard";
import Rules from "@/components/Rules";
import Image from "next/image";
import icon2 from "../../../public/icon-64-compass 1 (1).svg";
import icon1 from "../../../public/icon-64-compass 1.svg";
import icon3 from "../../../public/icon-64-compass 2.svg";
import Banner from "../../../public/image 40.png";
import line from "../../../public/Line 3.png";
import { data } from "../product";
import styles from "./raffle-draw.module.css";

const RaffleDraw = () => {
  // console.log(data);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className={`${styles.mainBannerImg} col`}>
            <Image src={Banner} alt={Banner} />
          </div>
        </div>

        <div className="row">
          <div className={`${styles.howItWorks} col`}>
            <div className={`${styles.firstPart}`}>
              <h2>How it works?</h2>
              <p>
                Don’t Live Another Day With Lower Back Pain. Take the Next Step
                Today & Discover How We May Be Able to Help You.
              </p>
            </div>
            <div className={`${styles.secondPart}`}>
              <DrawCard
                title="Buy products"
                para="একজন কাস্টমার বা ইউজার প্রতি অর্ডার যার মূল্য ১৯৯৯ টাকা বা তার বেশি, তার জন্য একটি কুপন পাবেন"
                icon={icon1}
                line={line}
              />
              <DrawCard
                title="Get a coupon"
                para="যতবার ১৯৯৯ টাকা বা তার বেশি অর্ডার করবেন কনটেস্ট এর সময়সীমার মধ্যে তত গুলো কুপন পাবেন"
                icon={icon2}
                line={line}
              />
              <DrawCard
                title="Win the lucky draw"
                para="ভাগ্যবান বিজয়ীরা পাবেন আমাদের পক্ষ থেকে আকর্ষণীয় পুরষ্কার আকর্ষণীয় পুরষ্কার আকর্ষণীয় পুরষ্কার"
                icon={icon3}
                line={false}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.cardSection}`}>
        <div className="container">
          <div className="row row-cols-2 row-cols-lg-5 gx-3 gy-3 gy-lg-4 ">
            {data.map((item, i) => (
              <div className= "col">
                <ProductCard
                  key={i}
                  title={item.title}
                  person={item.person}
                  url={item.img}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <Rules />
        </div>
      </div>
    </>
  );
};

export default RaffleDraw;
