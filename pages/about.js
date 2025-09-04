


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
          className="display-6 my-2 py-2 fw-bold text-success text-4xl md:text-5xl font-extrabold text-center text-green-800 drop-shadow-lg py-1"
          // className="display-5 fw-bold text-success text-center border-bottom border-success d-inline-block pb-2"
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
  // {
  //   title: "প্রতিষ্ঠানের ইতিহাস",
  //   content:
  //     "তাকওয়া নূরানী ও হাফেজিয়া মাদ্রাসা  একটি দ্বীনি শিক্ষা প্রতিষ্ঠান, যা ইসলামী জ্ঞানের আলো ছড়িয়ে দেওয়ার মহান লক্ষ্য নিয়ে প্রতিষ্ঠিত হয়।\nএটি প্রতিষ্ঠিত হয় [প্রতিষ্ঠা সাল]-সালে, [অবস্থান] এলাকায় কিছু ধর্মপ্রাণ মানুষের ঐকান্তিক প্রচেষ্টায়। শুরু থেকেই মাদরাসাটি শিশুদের কুরআন শিক্ষা ও চারিত্রিক উন্নয়নের জন্য নিবেদিতভাবে কাজ করে যাচ্ছে।",
  // },
  {
    title:"মাদ্রাসা পরিচালক ও সভাপতি ",
    content:
      "মোঃ ফয়জুল ইসলাম",
  },
  {
    title:"পরিচালকের বাণী",
    content: [
      "আসসালামু আলাইকুম, আলহামদুলিল্লাহ! তাকওয়া নূরানী ও হাফেজিয়া মাদ্রাসা ইসলামী শিক্ষার আলোকে একটি পথপ্রদর্শক প্রতিষ্ঠান হিসেবে কাজ করে যাচ্ছে। বর্তমান যুগে, যখন বিপথগামিতা ও বিভ্রান্তি বেড়ে চলেছে, তখন আমাদের মাদ্রাসা ইসলামের সঠিক শিক্ষা, নৈতিক চরিত্র গঠন, এবং আধ্যাত্মিক উৎকর্ষ সাধনের মাধ্যমে শিক্ষার্থীদের একটি পূর্ণাঙ্গ জীবনব্যবস্থা শেখাচ্ছে। আমরা বিশ্বাস করি, ইসলামী শিক্ষা কেবল ধর্মীয় জ্ঞান অর্জনের জন্য নয়, বরং একটি আদর্শ, সৎ ও দায়িত্বশীল জীবনযাপনের ভিত্তি। আমাদের লক্ষ্য হলো এমন শিক্ষার্থী গড়ে তোলা, যারা জ্ঞানী, নীতিবান, এবং সমাজে ইতিবাচক প্রভাব ফেলতে সক্ষম। আমাদের নিবেদিত শিক্ষকমণ্ডলী শিক্ষার্থীদের ব্যক্তিগত ও আধ্যাত্মিক উন্নতির জন্য অক্লান্ত পরিশ্রম করে যাচ্ছেন। সকলের সহযোগিতা ও দোয়ার মাধ্যমে, ইনশাআল্লাহ, আমরা আমাদের এই মহৎ লক্ষ্য অর্জনে সফল হব।",
     
    ],
  },
  {
    title:"মাদ্রাসার বৈশিষ্ট্য সমূহ:",
    content: [
      "প্রশিক্ষণপ্রাপ্ত অভিজ্ঞ শিক্ষক শিক্ষিকা মন্ডলী দ্বারা পাঠদান।",
      "আরবি, বাংলা, অংক ও ইংরেজির উপর বিশেষ গুরুত্ব দান।",
      "কোলাহলমুক্ত ও নিরিবিলি পরিবেশ।",
      "তিন বেলা মানসম্মত খাবারের ব্যবস্থা। ",
      "প্রতি মাসে পরীক্ষার মাধ্যমে শিক্ষার্থীর পড়ার মান উন্নয়নের ব্যবস্থা।",
       
    ],
  },
  {
    title:"লক্ষ্য ও উদ্দেশ্য",
    content: [
      "শিশুদের কুরআনের সঠিক তিলাওয়াত শেখানো।",
      "যোগ্য হাফেজে কুরআন তৈরি করা।",
      "নৈতিক ও চারিত্রিক গুণে শিক্ষার্থীদের আলোকিত করা।",
      "ইসলামী জীবনাচার ও আদর্শ শিক্ষা দেওয়া।",
      "একটি দ্বীনদার ও আত্মনির্ভরশীল প্রজন্ম গড়ে তোলা।",
    ],
  },
  
];


 
 

 
 
 
 



// বিভাগসমূহ: 
// নূরানী বিভাগ শিশু শ্রেণী হইতে তৃতীয় শ্রেণি। 
// হিফজুল কুরআন 
// কিতাব বিভাগ
