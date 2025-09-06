


// import React from "react";
// import { motion } from "framer-motion";
// import HeroBanner from "@/components/common/Banner";
 
// import ChairmenMesage from "@/components/about/ChairmenMesage";
 
 
 

// // Custom Card Components (You can place these in components/ui/Card.js and import from there)
// function Card({ children, className = "" }) {
//   return (
//     <div
//       className={`bg-white rounded-xl shadow-lg border p-6 ${className} transform transition-all hover:scale-105 duration-300 ease-in-out`}
//     >
//       {children}
//     </div>
//   );
// }

// function CardContent({ children, className = "" }) {
//   return <div className={`p-4 ${className}`}>{children}</div>;
// }

// export default function MadrasahPage() {
//   return (
//     <>
//     <HeroBanner name="/পরিচিতি" />
//     <div className="min-h-screen bg-gradient-to-tr from-green-50 to-white text-gray-800 px-4 md:px-10 py-8">
//       {/* Hero Banner */}
           
//       <div className="max-w-7xl mx-auto space-y-16">
//         <motion.h1
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="display-6 my-2 py-2 fw-bold text-success text-4xl md:text-5xl font-extrabold text-center text-green-800 drop-shadow-lg py-1"
//           // className="display-5 fw-bold text-success text-center border-bottom border-success d-inline-block pb-2"
//         >
//           তাকওয়া নূরানী ও হাফেজিয়া মাদ্রাসা
//         </motion.h1>
//         <ChairmenMesage/>

//         {/* Sections */}
//         {sections.map((section, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: index * 0.3 }}
//             viewport={{ once: true }}
//             className="py-2"
//           >
//             <Card className="border-green-200 py-2">
//               <CardContent className="md:p-10">
//                 <h2 className="text-3xl font-bold text-green-600 mb-6 border-b pb-2">
//                   {section.title}
//                 </h2>
//                 {typeof section.content === "string" ? (
//                   <p className="text-lg leading-relaxed whitespace-pre-line text-gray-700">
//                     {section.content}
//                   </p>
//                 ) : (
//                   <ul className="text-lg leading-relaxed list-disc list-inside space-y-2 text-gray-700">
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
//     </>
//   );
// }

// const sections = [ 
//   {
//     title:"মাদ্রাসার বৈশিষ্ট্য সমূহ:",
//     content: [
//       "প্রশিক্ষণপ্রাপ্ত অভিজ্ঞ শিক্ষক শিক্ষিকা মন্ডলী দ্বারা পাঠদান।",
//       "আরবি, বাংলা, অংক ও ইংরেজির উপর বিশেষ গুরুত্ব দান।",
//       "কোলাহলমুক্ত ও নিরিবিলি পরিবেশ।",
//       "তিন বেলা মানসম্মত খাবারের ব্যবস্থা। ",
//       "প্রতি মাসে পরীক্ষার মাধ্যমে শিক্ষার্থীর পড়ার মান উন্নয়নের ব্যবস্থা।",
       
//     ],
//   },
//   {
//     title:"লক্ষ্য ও উদ্দেশ্য",
//     content: [
//       "শিশুদের কুরআনের সঠিক তিলাওয়াত শেখানো।",
//       "যোগ্য হাফেজে কুরআন তৈরি করা।",
//       "নৈতিক ও চারিত্রিক গুণে শিক্ষার্থীদের আলোকিত করা।",
//       "ইসলামী জীবনাচার ও আদর্শ শিক্ষা দেওয়া।",
//       "একটি দ্বীনদার ও আত্মনির্ভরশীল প্রজন্ম গড়ে তোলা।",
//     ],
//   },
  
// ];


 
 

 
 
 
 



// // বিভাগসমূহ: 
// // নূরানী বিভাগ শিশু শ্রেণী হইতে তৃতীয় শ্রেণি। 
// // হিফজুল কুরআন 
// // কিতাব বিভাগ


import React from "react";
import { motion } from "framer-motion";
import HeroBanner from "@/components/common/Banner";
import ChairmenMesage from "@/components/about/ChairmenMesage";

// ✅ Custom Card Components
function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-lg border border-green-100 p-6 
      transform transition-all hover:scale-[1.02] hover:shadow-xl 
      duration-300 ease-in-out ${className}`}
    >
      {children}
    </div>
  );
}

function CardContent({ children, className = "" }) {
  return <div className={`p-4 md:p-8 ${className}`}>{children}</div>;
}

export default function MadrasahPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroBanner name="/পরিচিতি" />

      <div className="min-h-screen bg-gradient-to-tr from-green-50 via-white to-green-50 text-gray-800 px-4 md:px-10 py-12">
        <div className="max-w-7xl mx-auto space-y-20">
          {/* Title */}
          <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="display-6 my-2 py-2 fw-bold text-success text-4xl md:text-5xl font-extrabold text-center text-green-800 drop-shadow-lg py-1"
          // className="display-5 fw-bold text-success text-center border-bottom border-success d-inline-block pb-2"
        >
          তাকওয়া নূরানী ও হাফেজিয়া মাদ্রাসা
        </motion.h1>

          {/* Chairmen’s Message */}
          <ChairmenMesage />

          {/* Dynamic Sections */}
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="py-4"
            >
              <Card>
                <CardContent>
                  <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-6 border-b-2 border-green-200 pb-3">
                    {section.title}
                  </h2>

                  {typeof section.content === "string" ? (
                    <p className="text-lg leading-relaxed text-gray-700 whitespace-pre-line">
                      {section.content}
                    </p>
                  ) : (
                    <ul className="text-lg leading-relaxed list-disc list-inside space-y-2 text-gray-700">
                      {section.content.map((item, idx) => (
                        <li key={idx} className="hover:text-green-600 transition-colors">
                          {item}
                        </li>
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

// ✅ Sections Data
const sections = [
  {
    title: "মাদ্রাসার বৈশিষ্ট্য সমূহ:",
    content: [
      "প্রশিক্ষণপ্রাপ্ত অভিজ্ঞ শিক্ষক শিক্ষিকা মন্ডলী দ্বারা পাঠদান।",
      "আরবি, বাংলা, অংক ও ইংরেজির উপর বিশেষ গুরুত্ব দান।",
      "কোলাহলমুক্ত ও নিরিবিলি পরিবেশ।",
      "তিন বেলা মানসম্মত খাবারের ব্যবস্থা।",
      "প্রতি মাসে পরীক্ষার মাধ্যমে শিক্ষার্থীর পড়ার মান উন্নয়নের ব্যবস্থা।",
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
];
