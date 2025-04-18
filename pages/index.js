// import Head from "next/head";
// import Image from "next/image";
// import { Inter } from "@next/font/google";
// import styles from "@/styles/Home.module.css";
// import ProductCarousel from "@/components/home/ourProduct/ProductCarousel";
// import Hero from "@/components/home/hero/Hero";
// import Outlet from "@/components/home/our-outlet/Outlet";
// import Banner from "@/components/home/banner/Banner";
// import CardGallery from "@/components/home/CardGallery/CardGallery";
// import HeaderHero from "@/components/home/HeaderHero";
// import { ToastContainer } from "react-toastify";

// const inter = Inter({ subsets: ["latin"] });

// // export const getStaticProps = async () => {
// //    const res = await fetch("https://crabby-pocketbook-eel.cyclic.app/api/v1/product");
// //    const data = await res.json();
// //   return {
// //     props: { data },
// //     revalidate: 3,
// //   };
// // };


// export const getStaticProps = async () => {
//   const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
//   const apiUrl = `${baseUrl}/api/v1/product`;
//   console.log('Fetching data from:', apiUrl);

//   try {
//     const res = await fetch(apiUrl);

//     if (!res.ok) {
//       console.error('Failed to fetch data:', res.statusText);
//       return {
//         notFound: true,
//       };
//     }

//     const data = await res.json();
//     return {
//       props: { data },
//       revalidate: 3,
//     };
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     return {
//       props: { data: [] }, // Return an empty array or handle the error as needed
//       revalidate: 3,
//     };
//   }
// };

// export default function Home({ data }) {
//   return (
//     <>
//       <Head>
//         <title>Sultan Tea</title>
//         <meta name="description" content="Generated by Zoomit app" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/main-logo.png" />
//       </Head>
//       <main className={styles.main}>
//         <HeaderHero />
//         <Hero className="heroPosition" />
//         <ToastContainer
//           position="top-center"
//           autoClose={5000}
//           hideProgressBar={false}
//           newestOnTop={false}
//           closeOnClick
//           rtl={false}
//           pauseOnFocusLoss
//           draggable
//           pauseOnHover
//           theme="light"
//         />
//         <ProductCarousel data={data} />
//         <Banner />
//         <CardGallery />
//         <Outlet />
//       </main>
//     </>
//   );
// }









// import React from 'react';

// export default function Home() {
//   return (
//     <div className="bg-gradient-to-br from-green-100 to-green-50 min-h-screen text-gray-800">
//       {/* Header */}
//       <header className="bg-green-600 text-white py-10 shadow-lg text-center">
//         <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide">দারুল উলুম মাদ্রাসা</h1>
//         <p className="mt-3 text-lg md:text-xl">ইসলামী ও আধুনিক শিক্ষার সমন্বয়ে একটি আদর্শ প্রতিষ্ঠান</p>
//       </header>

//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
//         {/* আমাদের সম্পর্কে */}
//         <section className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-green-500">
//           <h2 className="text-2xl font-bold text-green-700 mb-4">আমাদের সম্পর্কে</h2>
//           <p>
//             দারুল উলুম মাদ্রাসা বাংলাদেশের একটি প্রাচীন ও ঐতিহ্যবাহী প্রতিষ্ঠান। এখানে হিফজুল কুরআন, কিতাব বিভাগ এবং সাধারণ শিক্ষার সমন্বয় করে ছাত্রদের গড়ে তোলা হয়। আমাদের লক্ষ্য—নৈতিক, ধর্মীয় ও আধুনিক জ্ঞানে সমৃদ্ধ মানুষ তৈরি করা।
//           </p>
//         </section>

//         {/* বিভাগসমূহ */}
//         <section className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-yellow-500">
//           <h2 className="text-2xl font-bold text-yellow-700 mb-4">বিভাগসমূহ</h2>
//           <ul className="list-disc list-inside space-y-2">
//             <li>হিফজুল কুরআন বিভাগ</li>
//             <li>নাজেরা ও তাজভীদ বিভাগ</li>
//             <li>কিতাব বিভাগ (আলিম, ফাজিল)</li>
//             <li>সাধারণ শিক্ষা (দাখিল, জেএসসি)</li>
//             <li>আইসিটি ও কম্পিউটার প্রশিক্ষণ</li>
//           </ul>
//         </section>

//         {/* ছাত্রদের সুবিধাসমূহ */}
//         <section className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-blue-500">
//           <h2 className="text-2xl font-bold text-blue-700 mb-4">শিক্ষার্থীদের সুবিধাসমূহ</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div className="bg-blue-50 p-4 rounded-xl shadow">
//               🛏️ আবাসিক সুবিধা ও বিশুদ্ধ খাবার পানি
//             </div>
//             <div className="bg-blue-50 p-4 rounded-xl shadow">
//               📚 আধুনিক লাইব্রেরি ও পাঠাগার
//             </div>
//             <div className="bg-blue-50 p-4 rounded-xl shadow">
//               🧑‍💻 কম্পিউটার ল্যাব ও প্রযুক্তি শিক্ষা
//             </div>
//             <div className="bg-blue-50 p-4 rounded-xl shadow">
//               ⚽ খেলাধুলা ও শরীরচর্চা
//             </div>
//           </div>
//         </section>

//         {/* গ্যালারি */}
//         <section className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-purple-500">
//           <h2 className="text-2xl font-bold text-purple-700 mb-4">গ্যালারি</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//             <img src="/gallery1.jpg" alt="মাদ্রাসা ভবন" className="rounded-xl shadow-md" />
//             <img src="/gallery2.jpg" alt="ছাত্রদের হিফজ" className="rounded-xl shadow-md" />
//             <img src="/gallery3.jpg" alt="লাইব্রেরি" className="rounded-xl shadow-md" />
//           </div>
//         </section>

//         {/* ভর্তি ফর্ম ও যোগাযোগ */}
//         <section className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-red-500">
//           <h2 className="text-2xl font-bold text-red-700 mb-4">যোগাযোগ ও ভর্তি</h2>
//           <p className="mb-2">📞 মোবাইল: ০১৭xxxxxxxxx</p>
//           <p className="mb-2">📧 ইমেইল: info@madrasah.com</p>
//           <p className="mb-4">📍 ঠিকানা: পূর্ব বাজার, হবিগঞ্জ সদর, বাংলাদেশ</p>
//           <button className="bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700 transition">ভর্তি ফর্ম পূরণ করুন</button>
//         </section>
//       </main>

//       <footer className="bg-green-700 text-white text-center py-4 mt-10 rounded-t-2xl">
//         <p className="text-sm">© ২০২৫ দারুল উলুম মাদ্রাসা - সকল অধিকার সংরক্ষিত</p>
//       </footer>
//     </div>
//   );
// }









// pages/index.js
import HeroBanner from '@/components/common/Banner';
import AboutSection from '@/components/home/AboutSection';


import Head from 'next/head'
import Link from 'next/link';
import Script from 'next/script'
import Gallery from '@/components/common/Gallery';
import Notice from '@/components/common/Notice';
import AdmissionInfo from '@/components/home/AdmissionInfo';
import DepartmentsInfo from '@/components/home/DepartmentsInfo';

export default function Home() {
  return (
    <>
      <Head>
        <title>আমাদের মাদ্রাসা</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <style>{`
          html { scroll-behavior: smooth; }
          body { font-family: 'Noto Sans Bengali', sans-serif; background-color: #f9f9f9; }       

          .hero {
            background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
              url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809') no-repeat center center/cover;
            color: white;
            text-align: center;
            padding: 140px 20px;
          }
          .hero h1 { font-size: 3.5rem; font-weight: bold; }
          .hero p { font-size: 1.2rem; }
          .btn-custom {
            background: #16a34a;
            color: white;
            padding: 10px 25px;
            font-size: 1rem;
            border-radius: 30px;
            transition: 0.3s ease;
          }
          .btn-custom:hover { background: #0f5132; }

          .section-title {
            text-align: center;
            color: #0f5132;
            font-size: 2rem;
            margin-bottom: 30px;
            position: relative;
          }
          .section-title::after {
            content: '';
            width: 60px;
            height: 4px;
            background: #198754;
            display: block;
            margin: 10px auto 0;
            border-radius: 5px;
          }

          .card:hover {
            transform: translateY(-5px);
            transition: 0.3s;
            box-shadow: 0 8px 16px rgba(0,0,0,0.1);
          }

          .gallery-img {
            border-radius: 10px;
            transition: transform 0.3s;
          }
          .gallery-img:hover {
            transform: scale(1.05);
          }

          footer {
            background: #0f5132;
            color: white;
            text-align: center;
            padding: 20px 0;
          }
        `}</style>
      </Head>

      <HeroBanner name="" />
      {/* About */}
      <AboutSection />
      {/* Academics */}
      <DepartmentsInfo/>
      
      {/* Notice */}
      <Notice />
      {/* Gallery */}
      <Gallery />
      {/* Admission */}
      <AdmissionInfo />
      {/* Contact */}
      <section id="contact" className="bg-light py-5">
        <div className="container">
          <h2 className="section-title">যোগাযোগ</h2>
          <div className="row">
            <div className="col-md-6">
              <p><strong>ঠিকানা:</strong> কলেজ রোড, লাহিড়ী, বালিয়াডাঙ্গী, ঠাকুরগাঁও</p>
              <p><strong>ফোন:</strong> ০১৭xxxxxxxx</p>
              <p><strong>ইমেইল:</strong> madrasa@email.com</p>
            </div>
            <div className="col-md-6">
              <form>
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="আপনার নাম" />
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control" placeholder="আপনার ইমেইল" />
                </div>
                <div className="mb-3">
                  <textarea className="form-control" rows="4" placeholder="আপনার বার্তা"></textarea>
                </div>
                <button className="btn btn-custom w-100" type="submit">পাঠিয়ে দিন</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
