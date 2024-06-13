import styles from "./Rules.module.css";

const Rules = () => {
  return (
    <div className={`${styles.rules} col`}>
      <h2>Beauty Booth Raffle Draw</h2>
      <div className={`${styles.text}`}>
        <h3>নিয়মাবলী:</h3>
        <ul>
          <li>১৯৯৯ টাকা বা তার চেয়ে বেশি প্রত্যেকটি অর্ডারের জন্য পাবেন একটি করে কুপন। </li>
          <li>কনটেস্ট চলাকালীন সময়ের মধ্যে নির্ধারিত মূল্যের প্রত্যেকটি অর্ডারের জন্য একটি করে কুপন দেয়া হবে।</li>
          <li>অর্ডার কনফার্ম হওয়া সাপেক্ষে কুপন রাফেল ড্রয়ের জন্য বিবেচিত হবে।</li>
          <li>কন্টেস্টের নির্ধারিত সময়সীমা শেষে রাফেল ড্র এর মাধ্যমে বিজয়ী ঘোষণা করা হবে।</li>
          <li>রেফেল ড্র এর সময়সীমা ৪ জুন থেকে ৩১ জুলাই পর্যন্ত।(৫৬ দিন)</li>
          <li>রেফেল ড্রয়ের মাধ্যমে নির্বাচিত ৬১জন বিজয়ী পাবেন, বিউটি বুথের পক্ষ থেকে দারুন সব আর্কষনীয় পুরক্ষার ।</li>
          <li>এই কনটেস্টের যাবতীয় নিয়মাবলী সংশোধন ও পরিবর্তনের অধিকার বিউটি বুথ কর্তৃক সংরক্ষিত</li>
        </ul>
        <h3>পুরষ্কারসমুহ এবং বিজয়ী সংখ্যা</h3>
        <ul>
          <li>Phone 15 pro max - ১ জন</li>
          <li>Diamond Earring -২ জন</li>
          <li>Luxury Handbags - ১ জন</li>
          <li>Luxury Perfumes - ৩ জন</li>
          <li>smart watch - ৪ জন</li>
          <li>TK 5000 worth of gift vouchers - ৪ জন</li>
          <li>Total TK 3000 worth gift voucher - ৫ জন</li>
          <li>Gift Bundle from our existing products - ৬ জন</li>
          <li>50% discount coupon - ৫ জন</li>
          <li>20% discount coupon - ৫ জন</li>
          <li>10% discount coupon - ১০ জন</li>
          <li>Buffet Dinner - ১৫ জন</li>
        </ul>
      </div>
    </div>
  );
};

export default Rules;
