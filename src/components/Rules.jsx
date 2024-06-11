import styles from "./Rules.module.css";

const Rules = () => {
  return (
    <div className={`${styles.rules} col`}>
      <h2>Beauty Booth Raffle Draw</h2>
      <div className={`${styles.text}`}>
        <h3>নিয়মাবলী:</h3>
        <ul>
          <li>একজন কাস্টমার বা ইউজার প্রতি অর্ডার যার মূল্য ১৯৯৯ টাকা বা তার বেশি, তার জন্য একটি কুপন পাবেন</li>
          <li>যতবার ১৯৯৯ টাকা বা তার বেশি অর্ডার করবেন কনটেস্ট এর সময়সীমার মধ্যে তত গুলো কুপন পাবেন</li>
          <li>অবশ্যই অর্ডার গুলো কনফার্ম করতে হবে, ক্যান্সেল বা সেল রিটার্ণ অর্ডার গূলো র‍্যাফেল ড্র এর জন্য অনুপযুক্ত হিসেবে গণ্য হবে</li>
          <li>কনটেস্ট সময়সীমা শেষে সকল উপযুক্ত কুপন গুলো আমাদের র‍্যাফেল ড্র তে অন্তর্ভূক্ত করা হবে</li>
          <li>কনটেস্ট সময়সীমা শেষে সকল উপযুক্ত কুপন গুলো আমাদের র‍্যাফেল ড্র তে অন্তর্ভূক্ত করা হবে</li>
          <li>ভাগ্যবান বিজয়ীরা পাবেন আমাদের পক্ষ থেকে আকর্ষণীয় পুরষ্কার</li>
          <li>Beauty Booth এ কর্মরত কোন কর্মচারী বা তাদের পরিবারবর্গ র‍্যাফেল ড্র এর জন্য অনুপযুক্ত বলে গণ্য হবে</li>
          <li>Raffle Draw এর সময়সীমা ৪ জুন থেকে ৩১ জুলাই (সর্বমোট ৫৬ দিন)</li>
          <li>এই র‍্যাফেল ড্র এর নিয়মাবলী যেকোন সময় পরিবর্তন অথবা পরিহার এর অধিকার সম্পূর্ণ বিউটি বুথ এর কর্তৃপক্ষের কাছে সংরক্ষিত।</li>
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
