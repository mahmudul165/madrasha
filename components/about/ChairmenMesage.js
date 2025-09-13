 
// import React from "react";
// import { Card } from "react-bootstrap";
// import Image from "next/image";
//  import OverViewImage2 from "/public/Chairmen.jpeg";

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
//                   width={300}
//                   height={400}
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
import OverViewImage2 from "/public/Chairmen.jpeg";

const visionDescription =
  "আসসালামু আলাইকুম, আলহামদুলিল্লাহ! তাকওয়া নূরানী ও হাফেজিয়া মাদ্রাসা ইসলামী শিক্ষার আলোকে একটি পথপ্রদর্শক প্রতিষ্ঠান হিসেবে কাজ করে যাচ্ছে। বর্তমান যুগে, যখন বিপথগামিতা ও বিভ্রান্তি বেড়ে চলেছে, তখন আমাদের মাদ্রাসা ইসলামের সঠিক শিক্ষা, নৈতিক চরিত্র গঠন, এবং আধ্যাত্মিক উৎকর্ষ সাধনের মাধ্যমে শিক্ষার্থীদের একটি পূর্ণাঙ্গ জীবনব্যবস্থা শেখাচ্ছে। আমরা বিশ্বাস করি, ইসলামী শিক্ষা কেবল ধর্মীয় জ্ঞান অর্জনের জন্য নয়, বরং একটি আদর্শ, সৎ ও দায়িত্বশীল জীবনযাপনের ভিত্তি। আমাদের লক্ষ্য হলো এমন শিক্ষার্থী গড়ে তোলা, যারা জ্ঞানী, নীতিবান, এবং সমাজে ইতিবাচক প্রভাব ফেলতে সক্ষম। আমাদের নিবেদিত শিক্ষকমণ্ডলী শিক্ষার্থীদের ব্যক্তিগত ও আধ্যাত্মিক উন্নতির জন্য অক্লান্ত পরিশ্রম করে যাচ্ছেন। সকলের সহযোগিতা ও দোয়ার মাধ্যমে, ইনশাআল্লাহ, আমরা আমাদের এই মহৎ লক্ষ্য অর্জনে সফল হব।";

function ChairmenMesage() {
  return (
    <section className="p-2 py-10   2 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="mx-auto">
        <div className="row align-items-center shadow-lg rounded-3 overflow-hidden bg-white">
          {/* Image Section */}
           



            {/* Left Image Section */}
        <div className=" col-md-5 col-12 mb-3">
          <Card className="shadow-sm rounded overflow-hidden">
            <div style={{ width: "100%", height: "470px", position: "relative" }}>
              <Image
                src={OverViewImage2}
                alt="Chairman"
                layout="fill"
                objectFit="cover"
                className="rounded p-3"
                priority
              />
            </div>
          </Card>
        </div>

          {/* Text Section */}
          <div className="col-md-7 col-sm-12 px-5   my-2 py-2">
            <h2 className="text-3xl font-extrabold text-gray-800  my-2 py-2">
              মাদ্রাসা পরিচালক ও সভাপতি
            </h2>
            <h5 className="my-1 text-xl font-semibold text-gray-600 my-3">
              মোঃ ফয়জুল ইসলাম
            </h5>
            <h5 className=" text-lg font-bold text-green-700 my-4">
              পরিচালকের বাণী
            </h5>
            <p className="py-1 text-base leading-relaxed text-gray-700 text-justify">
              {visionDescription}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChairmenMesage;













 













 