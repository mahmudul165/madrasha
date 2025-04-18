// components/AdmissionInfo.js

import { FaIdCard, FaClock, FaChild, FaMoneyBillWave, FaBook, FaPhone, FaRegCalendarAlt } from "react-icons/fa";

const AdmissionInfo = () => {
  return (
    <section id="admission" className="py-5 bg-light">
      <div className="">
        {/* <h2 className="text-center text-success fw-bold mb-4">ভর্তি তথ্য</h2> */}
        <h2 className="section-title">ভর্তি তথ্য</h2>
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="card shadow-lg border-0 rounded-4">
              <div className="card-body p-4">

                {/* উপরের বিবরণ */}
                <div className="mb-4">
                  <h5 className="text-success mb-3">🔰 ভর্তির জন্য প্রয়োজনীয় তথ্য</h5>
                  <ul className="list-unstyled fs-5">
                    <li className="mb-2">
                    <span>
                    <FaIdCard className="d-inline me-2 text-success" /> 
                   </span>
                         
                        
                        জন্ম সনদ (মূল কপি ও ১টি ফটোকপি)</li>
                    <li className="mb-2"><FaBook className="d-inline me-2 text-success" /> সর্বশেষ শিক্ষাগত সনদ (যদি থাকে)</li>
                    <li className="mb-2"><FaChild className="d-inline me-2 text-success" /> ২ কপি পাসপোর্ট সাইজ ছবি</li>
                    <li className="mb-2"><FaMoneyBillWave className="d-inline me-2 text-success" /> ভর্তি ফি: ৫০০ টাকা</li>
                  </ul>
                </div>

                {/* সময়সূচি */}
                <div className="mb-4">
                  <h5 className="text-success mb-3">🕒 ভর্তি সময়সূচি</h5>
                  <ul className="list-unstyled fs-5">
                    <li className="mb-2"><FaClock className="d-inline me-2 text-success" /> প্রতিদিন সকাল ৯টা থেকে দুপুর ১টা</li>
                    <li className="mb-2"><FaRegCalendarAlt className="d-inline me-2 text-success" /> ভর্তি কার্যক্রম: শনিবার - বৃহস্পতিবার</li>
                    <li className="mb-2"><FaChild className="d-inline me-2 text-success" /> ভর্তির জন্য সর্বনিম্ন বয়স: ৫ বছর</li>
                  </ul>
                </div>

                {/* শিক্ষা কার্যক্রম */}
                <div className="mb-4">
                  <h5 className="text-success mb-3">📚 শিক্ষা কার্যক্রম</h5>
                  <ul className="list-unstyled fs-5">
                    <li className="mb-2">✅ নূরানী ও হিফজ বিভাগ</li>
                    <li className="mb-2">✅ আদর্শ ইসলামী পরিবেশে শিক্ষা ও চরিত্র গঠন</li>
                    <li className="mb-2">✅ সাধারণ শিক্ষা (বাংলা, গণিত, ইংরেজি)</li>
                    <li className="mb-2">✅ মাসিক মূল্যায়ন ও রিপোর্ট কার্ড প্রদান</li>
                  </ul>
                </div>

                {/* যোগাযোগ */}
                <div className="text-center">
                  <p className="fs-5 text-muted">
                    📞 ভর্তি সংক্রান্ত যেকোনো তথ্যের জন্য যোগাযোগ করুন: <br />
                    <FaPhone className="d-inline me-2 text-success" />
                    <strong>01708 588 590</strong> অথবা <strong>09678 111 777</strong>
                  </p>
                </div>

              </div>
            </div>

            {/* নোট */}
            <p className="text-center mt-4 text-secondary fst-italic">
              ** আসন সংখ্যা সীমিত, তাই নির্ধারিত সময়ের মধ্যেই ভর্তি নিশ্চিত করুন।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionInfo;
