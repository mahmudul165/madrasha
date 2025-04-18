// components/DepartmentsInfo.js
import React from "react";

const DepartmentsInfo = () => {
  return (
    <section className="py-5 bg-light text-dark">
      <div className="container">
        {/* <h2 className="section-title text-center text-success mb-4 fw-bold">
          তাকওয়া নূরানী ও হাফেজিয়া মাদ্রাসা
        </h2>        */}
        <section id="academics" className="bg-light py-5">
        <div className="container">
          <h2 className="section-title">বিভাগসমূহ</h2>
          <div className="row text-center ">
            {['হিফজ বিভাগ', 'নূরানী শিক্ষা', 'সাধারণ শিক্ষা', 'তাজবিদ বিভাগ'].map((title, index) => (
              <div className="col-md-3 mb-3" key={index}>
                <div className="card  p-4 border-0 shadow-sm">
                  <h5>{title}</h5>
                  <p>
                    {{
                      'হিফজ বিভাগ': 'পূর্ণ কুরআন মুখস্থ করানো হয়।',
                      'নূরানী শিক্ষা': 'শিশুদের জন্য মৌলিক ইসলামী শিক্ষা।',
                      'সাধারণ শিক্ষা': 'প্রাথমিক থেকে অষ্টম শ্রেণি পর্যন্ত।',
                      'তাজবিদ বিভাগ': 'সঠিকভাবে কুরআন তিলাওয়াত শেখানো হয়।'
                    }[title]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
       
       
        {/* <ul className="list-group list-group-flush mb-4">
          <li className="list-group-item">১. নূরাণী বিভাগ (চার বছরের কোর্স)</li>
          <li className="list-group-item">২. হিফ্জ বিভাগ - নাজেরা ও হিফ্জ শাখা</li>
          <li className="list-group-item">
            ৩. আলিয়া বিভাগ - ইবতেদায়ী ৪র্থ শ্রেণি থেকে আলিম শ্রেণি
          </li>
          <li className="list-group-item">
            ৪. কিতাব বিভাগ (প্রস্তাবিত) -
            <ul>
              <li>ক) আদব বিভাগ</li>
              <li>খ) মেশকাত/জালালাইন</li>
            </ul>
          </li>
          <li className="list-group-item">
            ৫. আরবী ভাষা কোর্স (প্রস্তাবিত) -
            <ul>
              <li>ক) দাখিল পরীক্ষার পরে ২ মাস</li>
              <li>খ) আলিম পরীক্ষার পরে ২ মাস</li>
            </ul>
          </li>
        </ul> */}

        <h5 className="text-secondary mb-3">🎽 নির্ধারিত ড্রেস:</h5>
        <p className="mb-4">
          সাদা নিছফেছাক গোল জামা, সাদা পাজামা এবং সাদা টুপি। (সম্ভব হলে কালো পাগড়ি)
        </p>

        <h4 className="text-primary mt-4 mb-3">🌟 মাদ্রাসার বৈশিষ্ট্যসমূহ:</h4>
        <ul className="list-group list-group-numbered mb-4 p-2">
          <li className="list-group-item p-2">
            ২০১৯-২০২৪ পর্যন্ত প্রতিবছর জেডিসি, দাখিল, আলিমে একাধিক সরকারি বৃত্তি ও জিপিএ-৫ সহ শতভাগ উত্তীর্ণ।
          </li>
          <li className="list-group-item">
            অভিজ্ঞ, সৃজনশীল প্রশিক্ষণপ্রাপ্ত শিক্ষকমণ্ডলী দ্বারা পরিচালিত।
          </li>
          <li className="list-group-item">
            গণিত, ইংরেজি, আরবি, বিজ্ঞান ও আইসিটি বিষয়ে বিশেষ কোচিং।
          </li>
          <li className="list-group-item">বিশুদ্ধ কুরআন তেলাওয়াত ও নাহু-ছরফ প্রশিক্ষণ।</li>
          <li className="list-group-item">
            আদর্শ মানব গঠনে সুন্নাতভিত্তিক জীবনচর্চার সুযোগ।
          </li>
          <li className="list-group-item">
            আবাসিক ছাত্রদের জন্য সার্বক্ষণিক তত্ত্বাবধানে মানসম্মত থাকা-খাওয়ার ব্যবস্থা।
          </li>
          <li className="list-group-item">
            সাহিত্য, সংস্কৃতি, শরীরচর্চা ও খেলাধুলার সুযোগ।
          </li>
          <li className="list-group-item">
            সাপ্তাহিক, ইনকোর্স, সেমিস্টার এবং ক্লাস টেস্টের মাধ্যমে ফলাফল উন্নয়ন।
          </li>
          <li className="list-group-item">সিসিটিভি মনিটরিং দ্বারা সার্বক্ষণিক পর্যবেক্ষণ।</li>
          {/* <li className="list-group-item">
            ছারছীনা দারুসসুন্নাত জামেয়া-ই ইসলামিয়ার অনুসরণে হক্কানী আলেম তৈরির অঙ্গীকার।
          </li> */}
        </ul>
      </div>
    </section>
  );
};

export default DepartmentsInfo;
