import DrawCard from "@/components/DrawCard";
import ProductCard from "@/components/ProductCard";
import Rules from "@/components/Rules";
import Image from "next/image";
import icon2 from "../../../public/icon-64-compass 1 (1).svg";
import icon1 from "../../../public/icon-64-compass 1.svg";
import icon3 from "../../../public/icon-64-compass 2.svg";
import Banner from "../../../public/image 40.png";
import MobileBanner from '../../../public/web-mbl.jpg';
import line from "../../../public/Line 3.png";
import { data } from "../product";
import styles from "./raffle-draw.module.css";

const RaffleDraw = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className={`${styles.mainBannerImg} col`}>
            <Image src={Banner} alt={Banner} className={`${styles.bannerImg}`}/>
            <Image src={MobileBanner} alt={MobileBanner} className={`${styles.mobileBanner}`} />
          </div>
        </div>

        <div className="row">
          <div className={`${styles.howItWorks} col`}>
            <div className={`${styles.firstPart}`}>
              <h2>How it works?</h2>
            </div>
            <div className={`${styles.secondPart}`}>
              <DrawCard
                title="Buy products"
                para="কন্টেস্টে অংশগ্রহণ করতে  অর্ডার করুন ১৯৯৯/= বা তার বেশি মূল্যের প্রোডাক্ট"
                icon={icon1}
                line={line}
              />
              <DrawCard
                title="Get a coupon"
                para="এমন প্রতিটি অর্ডারের জন্য পাবেন একটি করে কুপন, যতবার অর্ডার করবেন ততবার কুপন পাবেন"
                icon={icon2}
                line={line}
              />
              <DrawCard
                title="Win the lucky draw"
                para="কনটেস্ট এর সময়সীমা শেষ হলে র‍্যাফেল ড্র এর মাধ্যমে ভাগ্যবান বিজয়ীদের দেয়া হবে পুরষ্কার"
                icon={icon3}
                line={false}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.cardSection}`}>
        <div className="container">
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 gx-3 gy-3 gy-lg-4 d-flex justify-content-center">
            {data.map((item, i) => (
              <div className= "col">
                <ProductCard
                  key={i}
                  title={item.title}
                  person={item.person}
                  url={item.img}
                  // isBadge={i<3 ? true : false }
                  prizeNo={i+1}
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
