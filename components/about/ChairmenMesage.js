 
// import React from "react";
// import { Card } from "react-bootstrap";
// import Image from "next/image";
// import OverViewImage2 from "/public/Chairmen.jpg";

// const visionDescription =
//   "আসসালামু আলাইকুম, আলহামদুলিল্লাহ! তাকওয়া নূরানী ও হাফেজিয়া মাদ্রাসা ইসলামী শিক্ষার আলোকে একটি পথপ্রদর্শক প্রতিষ্ঠান হিসেবে কাজ করে যাচ্ছে। বর্তমান যুগে, যখন বিপথগামিতা ও বিভ্রান্তি বেড়ে চলেছে, তখন আমাদের মাদ্রাসা ইসলামের সঠিক শিক্ষা, নৈতিক চরিত্র গঠন, এবং আধ্যাত্মিক উৎকর্ষ সাধনের মাধ্যমে শিক্ষার্থীদের একটি পূর্ণাঙ্গ জীবনব্যবস্থা শেখাচ্ছে। আমরা বিশ্বাস করি, ইসলামী শিক্ষা কেবল ধর্মীয় জ্ঞান অর্জনের জন্য নয়, বরং একটি আদর্শ, সৎ ও দায়িত্বশীল জীবনযাপনের ভিত্তি। আমাদের লক্ষ্য হলো এমন শিক্ষার্থী গড়ে তোলা, যারা জ্ঞানী, নীতিবান, এবং সমাজে ইতিবাচক প্রভাব ফেলতে সক্ষম। আমাদের নিবেদিত শিক্ষকমণ্ডলী শিক্ষার্থীদের ব্যক্তিগত ও আধ্যাত্মিক উন্নতির জন্য অক্লান্ত পরিশ্রম করে যাচ্ছেন। সকলের সহযোগিতা ও দোয়ার মাধ্যমে, ইনশাআল্লাহ, আমরা আমাদের এই মহৎ লক্ষ্য অর্জনে সফল হব।";

// function ChairmenMesage() {
//   return (
//     <section>
//       <section className="">
//         <div className="row align-items-center">
//           <div className="col-md-5 col-sm-12">
//             <div className=" ">
//               <Card>
//                 <Image
//                   src={OverViewImage2}
//                   alt="Picture of the author"
//                   layout="responsive"
//                   width={475}
//                   height={317}
//                 />
//               </Card>
//             </div>
//           </div>
//           <div className="col-md-7 col-sm-12">
//             <div className="my-2 py-2 text-start">
//               <h1 className="my-2 fs-3 fw-bolder">
//               মাদ্রাসা পরিচালক ও সভাপতি
//               </h1>
//               <p className="my-2 py-2 fs-4">
//               মোঃ ফয়জুল ইসলাম
//               </p>
//               <p className="my-2 py-2 fs-4">
//               পরিচালকের বাণী
//               </p>
               
//               <p className="py-1 fs-5 text-justify">
//                 {visionDescription}
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </section>
//   );
// }

// export default ChairmenMesage;



import React from "react";
import { Card } from "react-bootstrap";
import Image from "next/image";
import OverViewImage2 from "/public/Chairmen.jpg";

const visionDescription =
  "আসসালামু আলাইকুম, আলহামদুলিল্লাহ! তাকওয়া নূরানী ও হাফেজিয়া মাদ্রাসা ইসলামী শিক্ষার আলোকে একটি পথপ্রদর্শক প্রতিষ্ঠান হিসেবে কাজ করে যাচ্ছে। বর্তমান যুগে, যখন বিপথগামিতা ও বিভ্রান্তি বেড়ে চলেছে, তখন আমাদের মাদ্রাসা ইসলামের সঠিক শিক্ষা, নৈতিক চরিত্র গঠন, এবং আধ্যাত্মিক উৎকর্ষ সাধনের মাধ্যমে শিক্ষার্থীদের একটি পূর্ণাঙ্গ জীবনব্যবস্থা শেখাচ্ছে। আমরা বিশ্বাস করি, ইসলামী শিক্ষা কেবল ধর্মীয় জ্ঞান অর্জনের জন্য নয়, বরং একটি আদর্শ, সৎ ও দায়িত্বশীল জীবনযাপনের ভিত্তি। আমাদের লক্ষ্য হলো এমন শিক্ষার্থী গড়ে তোলা, যারা জ্ঞানী, নীতিবান, এবং সমাজে ইতিবাচক প্রভাব ফেলতে সক্ষম। আমাদের নিবেদিত শিক্ষকমণ্ডলী শিক্ষার্থীদের ব্যক্তিগত ও আধ্যাত্মিক উন্নতির জন্য অক্লান্ত পরিশ্রম করে যাচ্ছেন। সকলের সহযোগিতা ও দোয়ার মাধ্যমে, ইনশাআল্লাহ, আমরা আমাদের এই মহৎ লক্ষ্য অর্জনে সফল হব।";

function ChairmenMesage() {
  return (
    <section className="py-10 px-4 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="mx-auto">
        <div className="row align-items-center shadow-lg rounded-3 overflow-hidden bg-white">
          {/* Image Section */}
          <div className="col-md-4 col-sm-12 p-0">
            <Card className="h-100 border-0">
              {/* ✅ Responsive Aspect Ratio Box */}
              <div
                className="relative w-100"
                style={{ aspectRatio: "4 / 3", minHeight: "280px" }}
              >
                <Image
                  src={OverViewImage2}
                  alt="Chairman"
                  fill
                  className="rounded-lg object-cover"
                  priority
                />
              </div>
            </Card>
          </div>

          {/* Text Section */}
          <div className="col-md-8 col-sm-12 px-5 py-6">
            <h1 className="text-3xl font-extrabold text-gray-800 mb-2">
              মাদ্রাসা পরিচালক ও সভাপতি
            </h1>
            <p className="text-xl font-semibold text-gray-600 mb-3">
              মোঃ ফয়জুল ইসলাম
            </p>
            <p className="text-lg font-bold text-green-700 mb-4">
              পরিচালকের বাণী
            </p>
            <p className="text-base leading-relaxed text-gray-700 text-justify">
              {visionDescription}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChairmenMesage;

