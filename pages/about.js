// import React from "react";
// import Overview1 from "@/components/about/Overview1";
// import Overview3 from "@/components/about/Overview3";
// import Overview2 from "@/components/about/Overview2";
// import Overview4 from "@/components/about/Overview4";
// import Achivements from "@/components/about/Achivements";
// import ClientCompany from "@/components/about/ClientCompany";
// import HeroBanner from "@/components/common/Banner";
// import SultanTeaLogo from "/public/about-image-5.png";
// import TeaLogo from "/public/logo-company.jpg";
// import HeritageGP from "/public/heritage-gp.png";
// import Image from "next/image";




// function about() {


//   return (
//     <>
     
//       <HeroBanner name="About Us" />
//       <Overview2 />
//       <Overview1 />
//       <Overview3 />
//       <Overview4 />
//       <Achivements />
//       {/* test */}
//       <ClientCompany />
//       <div className="container mb-2">
//         <div className="d-flex  gap-5 justify-content-between align-items-center ">
//           <div className="w-75">
//             <Image src={SultanTeaLogo} alt="ABOUT IMG" />
//           </div>
//           <div className="w-100 ">
//             <Image src={TeaLogo} alt="ABOUT IMG" />
//           </div>
//           <div className="w-75 ">
//             <Image src={HeritageGP} alt="Heritage GROUP" />
//           </div>
//         </div>
//       </div>

    
//     </>
//   );
// }

// export default about; 


// import React from "react";
// import { motion } from "framer-motion";
// import HeroBanner from "@/components/common/Banner";

// // Custom Card Components (You can place these in components/ui/Card.js and import from there)
// function Card({ children, className = "" }) {
//   return (
//     <div className={`bg-white rounded-2xl shadow-md border p-4 ${className}`}>
//       {children}
//     </div>
//   );
// }

// function CardContent({ children, className = "" }) {
//   return <div className={`p-4 ${className}`}>{children}</div>;
// }

// export default function MadrasahPage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-tr from-green-50 to-white text-gray-800 px-4 md:px-10 py-8">
//        <HeroBanner name="/পরিচিতি" />
//       <div className="max-w-6xl mx-auto space-y-14">
//         <motion.h1
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-4xl md:text-5xl font-extrabold text-center text-green-700 drop-shadow-md"
//         >
//           তাকওয়া নূরানী ও হাফেজিয়া মাদ্রাসা 
//         </motion.h1>

//         {/* Sections */}
//         {sections.map((section, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: index * 0.2 }}
//             viewport={{ once: true }}
//           >
//             <Card className="border-green-200">
//               <CardContent className="md:p-10">
//                 <h2 className="text-3xl font-bold text-green-600 mb-4 border-b pb-2">
//                   {section.title}
//                 </h2>
//                 {typeof section.content === "string" ? (
//                   <p className="text-lg leading-relaxed whitespace-pre-line">
//                     {section.content}
//                   </p>
//                 ) : (
//                   <ul className="text-lg leading-relaxed list-disc list-inside space-y-2">
//                     {section.content.map((item, idx) => (
//                       <li key={idx}>{item}</li>
//                     ))}
//                   </ul>
//                 )}
//               </CardContent>
//             </Card>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }

// const sections = [
//   {
//     title: "প্রতিষ্ঠানের ইতিহাস",
//     content:
//       "তাকওয়া-নূরানী ও হাফেজিয়া মাদ্রাসাএকটি দ্বীনি শিক্ষা প্রতিষ্ঠান, যা ইসলামী জ্ঞানের আলো ছড়িয়ে দেওয়ার মহান লক্ষ্য নিয়ে প্রতিষ্ঠিত হয়।\nএটি প্রতিষ্ঠিত হয় [প্রতিষ্ঠা সাল]-সালে, [অবস্থান] এলাকায় কিছু ধর্মপ্রাণ মানুষের ঐকান্তিক প্রচেষ্টায়। শুরু থেকেই মাদরাসাটি শিশুদের কুরআন শিক্ষা ও চারিত্রিক উন্নয়নের জন্য নিবেদিতভাবে কাজ করে যাচ্ছে।",
//   },
//   {
//     title: "প্রতিষ্ঠান পরিচিতি",
//     content:
//       "নাম: তাকওয়া নূরানী ও হাফেজিয়া মাদ্রাসা \nধরণ: ইসলামি শিক্ষা প্রতিষ্ঠান (নূরানী ও হিফজ বিভাগ)\nঅবস্থান: [ঠিকানা]\nমোবাইল: [মোবাইল নম্বর]\nইমেইল: [ইমেইল ঠিকানা]",
//   },
//   {
//     title: "প্রশাসন",
//     content: [
//       "প্রধান পরিচালক: [নাম]",
//       "সহকারী পরিচালক: [নাম]",
//       "হেড মুহতামিম: [নাম]",
//       "শিক্ষকবৃন্দ: হাফেজ, মৌলভী ও ফিকহ-আকীদা বিশেষজ্ঞ",
//     ],
//   },
//   {
//     title: "লক্ষ্য ও উদ্দেশ্য",
//     content: [
//       "শিশুদের কুরআনের সঠিক তিলাওয়াত শেখানো।",
//       "যোগ্য হাফেজে কুরআন তৈরি করা।",
//       "নৈতিক ও চারিত্রিক গুণে শিক্ষার্থীদের আলোকিত করা।",
//       "ইসলামী জীবনাচার ও আদর্শ শিক্ষা দেওয়া।",
//       "একটি দ্বীনদার ও আত্মনির্ভরশীল প্রজন্ম গড়ে তোলা।",
//     ],
//   },
//   {
//     title: "কার্যক্রম",
//     content: [
//       "নূরানী কায়দা শিক্ষা",
//       "আমপারা ও সহিহ কুরআন তিলাওয়াত",
//       "হিফজুল কুরআন (পূর্ণ কুরআন মুখস্থ)",
//       "দোয়া, নামাজ, কালেমা, ফিকহ, আকীদা শিক্ষা",
//       "সাপ্তাহিক ইসলামী আলোচনা",
//       "রমজান উপলক্ষে হিফজ প্রতিযোগিতা",
//       "বার্ষিক ইসলামী সাংস্কৃতিক অনুষ্ঠান ও পুরস্কার বিতরণ",
//       "শিক্ষার্থীদের জন্য নৈতিক উন্নয়নমূলক ক্লাস",
//       "অভিভাবকদের নিয়মিত সভা",
//     ],
//   },
// ];


import React from "react";
import { motion } from "framer-motion";
import HeroBanner from "@/components/common/Banner";

// Custom Card Components (You can place these in components/ui/Card.js and import from there)
function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-white rounded-xl shadow-lg border p-6 ${className} transform transition-all hover:scale-105 duration-300 ease-in-out`}
    >
      {children}
    </div>
  );
}

function CardContent({ children, className = "" }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}

export default function MadrasahPage() {
  return (
    <>
    <HeroBanner name="/পরিচিতি" />
    <div className="min-h-screen bg-gradient-to-tr from-green-50 to-white text-gray-800 px-4 md:px-10 py-8">
      {/* Hero Banner */}
           
      <div className="max-w-7xl mx-auto space-y-16">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-center text-green-800 drop-shadow-lg py-1"
        >
          তাকওয়া নূরানী ও হাফেজিয়া মাদ্রাসা 
        </motion.h1>

        {/* Sections */}
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
            viewport={{ once: true }}
            className="py-2"
          >
            <Card className="border-green-200 py-2">
              <CardContent className="md:p-10">
                <h2 className="text-3xl font-bold text-green-600 mb-6 border-b pb-2">
                  {section.title}
                </h2>
                {typeof section.content === "string" ? (
                  <p className="text-lg leading-relaxed whitespace-pre-line text-gray-700">
                    {section.content}
                  </p>
                ) : (
                  <ul className="text-lg leading-relaxed list-disc list-inside space-y-2 text-gray-700">
                    {section.content.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
    </>
  );
}

const sections = [
  {
    title: "প্রতিষ্ঠানের ইতিহাস",
    content:
      "তাকওয়া নূরানী ও হাফেজিয়া মাদ্রাসা  একটি দ্বীনি শিক্ষা প্রতিষ্ঠান, যা ইসলামী জ্ঞানের আলো ছড়িয়ে দেওয়ার মহান লক্ষ্য নিয়ে প্রতিষ্ঠিত হয়।\nএটি প্রতিষ্ঠিত হয় [প্রতিষ্ঠা সাল]-সালে, [অবস্থান] এলাকায় কিছু ধর্মপ্রাণ মানুষের ঐকান্তিক প্রচেষ্টায়। শুরু থেকেই মাদরাসাটি শিশুদের কুরআন শিক্ষা ও চারিত্রিক উন্নয়নের জন্য নিবেদিতভাবে কাজ করে যাচ্ছে।",
  },
  {
    title: "প্রতিষ্ঠান পরিচিতি",
    content:
      "নাম: তাকওয়া নূরানী ও হাফেজিয়া মাদ্রাসা \nধরণ: ইসলামি শিক্ষা প্রতিষ্ঠান (নূরানী ও হিফজ বিভাগ)\nঅবস্থান: [ঠিকানা]\nমোবাইল: [মোবাইল নম্বর]\nইমেইল: [ইমেইল ঠিকানা]",
  },
  {
    title: "প্রশাসন",
    content: [
      "প্রধান পরিচালক: [নাম]",
      "সহকারী পরিচালক: [নাম]",
      "হেড মুহতামিম: [নাম]",
      "শিক্ষকবৃন্দ: হাফেজ, মৌলভী ও ফিকহ-আকীদা বিশেষজ্ঞ",
    ],
  },
  {
    title: "লক্ষ্য ও উদ্দেশ্য",
    content: [
      "শিশুদের কুরআনের সঠিক তিলাওয়াত শেখানো।",
      "যোগ্য হাফেজে কুরআন তৈরি করা।",
      "নৈতিক ও চারিত্রিক গুণে শিক্ষার্থীদের আলোকিত করা।",
      "ইসলামী জীবনাচার ও আদর্শ শিক্ষা দেওয়া।",
      "একটি দ্বীনদার ও আত্মনির্ভরশীল প্রজন্ম গড়ে তোলা।",
    ],
  },
  {
    title: "কার্যক্রম",
    content: [
      "নূরানী কায়দা শিক্ষা",
      "আমপারা ও সহিহ কুরআন তিলাওয়াত",
      "হিফজুল কুরআন (পূর্ণ কুরআন মুখস্থ)",
      "দোয়া, নামাজ, কালেমা, ফিকহ, আকীদা শিক্ষা",
      "সাপ্তাহিক ইসলামী আলোচনা",
      "রমজান উপলক্ষে হিফজ প্রতিযোগিতা",
      "বার্ষিক ইসলামী সাংস্কৃতিক অনুষ্ঠান ও পুরস্কার বিতরণ",
      "শিক্ষার্থীদের জন্য নৈতিক উন্নয়নমূলক ক্লাস",
      "অভিভাবকদের নিয়মিত সভা",
    ],
  },
];
