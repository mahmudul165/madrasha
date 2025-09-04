




// import HeroBanner from '@/components/common/Banner';
// import AboutSection from '@/components/home/AboutSection';
// import Head from 'next/head'
// import Link from 'next/link';
// import Script from 'next/script'
// import Gallery from '@/components/common/Gallery';
// import Notice from '@/components/common/Notice';
// import AdmissionInfo from '@/components/home/AdmissionInfo';
// import DepartmentsInfo from '@/components/home/DepartmentsInfo';
// import ContactForm from '@/components/common/ContactForm';

// import IconWithBackground from "@/components/common/IconWithBackground";
// import { Card, Form } from "react-bootstrap";
// import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
// import StudentCorner from '@/components/home/StudentCorner';

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>তাকওয়া নূরানী ও হাফেজিয়া মাদ্রাসা </title>


//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link
//           href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
//           rel="stylesheet"
//         />
//         <link
//           href="https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@400;700&display=swap"
//           rel="stylesheet"
//         />
//         <style>{`
//           html { scroll-behavior: smooth; }
//           body { font-family: 'Noto Sans Bengali', sans-serif; background-color: #f9f9f9; }       

//           .hero {
//             background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
//               url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809') no-repeat center center/cover;
//             color: white;
//             text-align: center;
//             padding: 140px 20px;
//           }
//           .hero h1 { font-size: 3.5rem; font-weight: bold; }
//           .hero p { font-size: 1.2rem; }
//           .btn-custom {
//             background: #16a34a;
//             color: white;
//             padding: 10px 25px;
//             font-size: 1rem;
//             border-radius: 30px;
//             transition: 0.3s ease;
//           }
//           .btn-custom:hover { background: #0f5132; }

//           .section-title {
//             text-align: center;
//             color: #0f5132;
//             font-size: 2rem;
//             margin-bottom: 30px;
//             position: relative;
//           }
//           .section-title::after {
//             content: '';
//             width: 60px;
//             height: 4px;
//             background: #198754;
//             display: block;
//             margin: 10px auto 0;
//             border-radius: 5px;
//           }

//           .card:hover {
//             transform: translateY(-5px);
//             transition: 0.3s;
//             box-shadow: 0 8px 16px rgba(0,0,0,0.1);
//           }

//           .gallery-img {
//             border-radius: 10px;
//             transition: transform 0.3s;
//           }
//           .gallery-img:hover {
//             transform: scale(1.05);
//           }

//           footer {
//             background: #0f5132;
//             color: white;
//             text-align: center;
//             padding: 20px 0;
//           }
//         `}</style>
//       </Head>

//       <HeroBanner name="" />
//       {/* About */}
//       <AboutSection />
//       {/* Academics */}
//       <DepartmentsInfo />
//       <StudentCorner />


//       {/* Gallery */}
//       <Gallery />
//       {/* Notice */}
//       <Notice />
//       {/* Admission */}
//       <AdmissionInfo />
//       {/* Contact */}
//       <section className='container my-2 p-2'>
//         <div className=" row my-4">
//           <div className="col-md-4  cus-color-secondary">
//             <Card className="card border rounded  p-5 mb-4 ">
//               <div className="d-flex gap-4 align-items-center">

//                 <IconWithBackground>
//                   <FaPhoneAlt size={25} className="" />
//                 </IconWithBackground>
//                 <div className="cus-color-secondary">

//                   <h5 className="mb-2">মোবাইল</h5>
//                   <p className="cus-color-secondary">
//                     মোবাইল: +৮৮০১৭০৮৫৮৮৫৯০
//                   </p>{" "}

//                 </div>
//               </div>
//             </Card>
//             <Card className="card border rounded  p-5 mb-4">
//               <div className="d-flex gap-4 align-items-center">
//                 <IconWithBackground>
//                   <FaEnvelope size={25} className="" />
//                 </IconWithBackground>

//                 <div>
//                   <h5 className="mb-2">ইমেইল</h5>
//                   <p className="cus-color-secondary">madashatakua@heritagebd.com</p>
//                   <p className="cus-color-secondary">info@heritagebd.com</p>
//                 </div>
//               </div>
//             </Card>
//             <Card className="card border rounded  p-5 ">
//               <div className="d-flex gap-4 align-items-center">
//                 <IconWithBackground>
//                   <FaMapMarkerAlt size={25} className="" />
//                 </IconWithBackground>

//                 <div>
//                   <h5 className="mb-2">ঠিকানা</h5>
//                   <p className="cus-color-secondary">
//                     ছোট সিংগিয়া কলেজ রোড লাহিড়ী বালিয়াডাঙ্গী ঠাকুরগাঁও।
//                   </p>
//                 </div>
//               </div>
//             </Card>
//           </div>
//           <div className="col-md-8">
//             <ContactForm />
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }
 

import Head from 'next/head';
import { Suspense } from "react";
import HeroBanner from '@/components/common/Banner';
import AboutSection from '@/components/home/AboutSection';
import ContactForm from '@/components/common/ContactForm';
import IconWithBackground from "@/components/common/IconWithBackground";
import { Card } from "react-bootstrap";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

// Dynamic imports with suspense
import dynamic from 'next/dynamic';

const DepartmentsInfo = dynamic(() => import('@/components/home/DepartmentsInfo'), { suspense: true });
const StudentCorner = dynamic(() => import('@/components/home/StudentCorner'), { suspense: true });
const Gallery = dynamic(() => import('@/components/common/Gallery'), { suspense: true });
const Notice = dynamic(() => import('@/components/common/Notice'), { suspense: true });
const AdmissionInfo = dynamic(() => import('@/components/home/AdmissionInfo'), { suspense: true });

export default function Home() {
  return (
    <>
      <Head>
        <title>তাকওয়া নূরানী ও হাফেজিয়া মাদ্রাসা</title>
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
          .btn-custom { background: #16a34a; color: white; padding: 10px 25px; font-size: 1rem; border-radius: 30px; transition: 0.3s ease; }
          .btn-custom:hover { background: #0f5132; }
          .section-title { text-align: center; color: #0f5132; font-size: 2rem; margin-bottom: 30px; position: relative; }
          .section-title::after { content: ''; width: 60px; height: 4px; background: #198754; display: block; margin: 10px auto 0; border-radius: 5px; }
          .card:hover { transform: translateY(-5px); transition: 0.3s; box-shadow: 0 8px 16px rgba(0,0,0,0.1); }
          .gallery-img { border-radius: 10px; transition: transform 0.3s; }
          .gallery-img:hover { transform: scale(1.05); }
          footer { background: #0f5132; color: white; text-align: center; padding: 20px 0; }
        `}</style>
      </Head>

      <HeroBanner name="" />
      <AboutSection />

      {/* Suspense for dynamic components */}
      <Suspense fallback={<div className="text-center my-5">Loading Academics...</div>}>
        <DepartmentsInfo />
        <StudentCorner />
        <Gallery />
        <Notice />
        <AdmissionInfo />
      </Suspense>

      {/* Contact Section */}
      <section className='container my-2 p-2'>
        <div className="row my-4">
          <div className="col-md-4">
            {[
              { icon: <FaPhoneAlt size={25} />, title: "মোবাইল", desc: "মোবাইল: +৮৮০১৭০৮৫৮৮৫৯০" },
              { icon: <FaEnvelope size={25} />, title: "ইমেইল", desc: "madashatakua@heritagebd.com\ninfo@heritagebd.com" },
              { icon: <FaMapMarkerAlt size={25} />, title: "ঠিকানা", desc: "ছোট সিংগিয়া কলেজ রোড লাহিড়ী বালিয়াডাঙ্গী ঠাকুরগাঁও।" }
            ].map((item, idx) => (
              <Card key={idx} className="border rounded p-5 mb-4">
                <div className="d-flex gap-4 align-items-center">
                  <IconWithBackground>{item.icon}</IconWithBackground>
                  <div>
                    <h5 className="mb-2">{item.title}</h5>
                    {item.desc.split("\n").map((line, i) => <p key={i}>{line}</p>)}
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="col-md-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

