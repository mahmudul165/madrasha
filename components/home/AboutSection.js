// components/AboutSection.js

import Image from 'next/image';
import aboutImage from '/public/img-2.png'; // ছবিটি public ফোল্ডারে রাখো

export default function AboutSection() {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-success border-bottom border-success d-inline-block pb-2">
            🕌 আমাদের পরিচিতি
          </h2>
        </div>

        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <Image
              src={aboutImage}
              alt="মাদ্রাসার ছাত্রদের ছবি"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6">
            <p className="fs-5 text-muted mb-3">
              <strong>তাকওয়া নূরানী ও হাফেজিয়া মাদ্রাসা</strong> একটি আধুনিক ও সুসংগঠিত দ্বীনি শিক্ষা প্রতিষ্ঠান, যেখানে ধর্মীয় শিক্ষার পাশাপাশি নৈতিক চরিত্র গঠনে সর্বোচ্চ গুরুত্ব দেওয়া হয়।
            </p>
            <ul className="list-group list-group-flush mb-3">
              <li className="list-group-item">✅ হিফজুল কুরআন ও তাজবীদ বিভাগ</li>
              <li className="list-group-item">✅ নূরানী ও আমপারা ক্লাস</li>
              <li className="list-group-item">✅ আদর্শ নাগরিক তৈরির উদ্দেশ্যে সাধারণ শিক্ষা</li>
              <li className="list-group-item">✅ অভিজ্ঞ ও ধর্মভীরু শিক্ষকগণ দ্বারা পাঠদান</li>
              <li className="list-group-item">✅ শৃঙ্খলাপূর্ণ পরিবেশ ও অনুশাসন</li>
            </ul>
            <p className="text-muted">
              আমরা বিশ্বাস করি, ধর্ম ও নৈতিকতা হলো একটি সফল জীবনের মূল ভিত্তি। সেই আলোকে আমরা আমাদের শিক্ষার্থীদের গড়ে তুলি আলোকিত ও তাকওয়াবান ভবিষ্যতের জন্য।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
