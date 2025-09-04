// import SectionTitle from "@/components/common/SectionTitle";
// import React from "react";
// import { Row, Col, Card, Image } from "react-bootstrap";
// import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
// import HeroBanner from "@/components/common/Banner";

// const teachers = [
//     {
//       name: "মাওলানা মোঃ রশিদুল ইসলাম",
//       designation: "কোরআন শরীফ ১ম, হাদিস শরীফ ও আসমাউল হুসনা ৩য়, গণিত ৩য়, ইংরেজি ২য়",
//       phone: "০১৬১০৩৪৬৫৭৪",
//       email: "rashidul@example.com",
//       image: "/teachers/ROSIDUL HUJUR.jpg",
//     },
//     {
//       name: "মাওলানা মোঃ নুর হোসাইন",
//       designation: "কোরআন শরীফ ২য়, হাদিস শিশু গনিত ১ম, সমাজ ২য়, হাদিস ও আসমাউল হুসনা ২য়, আদইয়ায়ে সালাত ও মাসনুনাহ ২য়",
//       phone: "০১৭০৪৩৮৬০৫০",
//       email: "nurhossain@example.com",
//       image: "/teachers/মাওলানা মোহাম্মদ নূর হোসাইন.jpg",
//     },
//     {
//       name: "মাওলানা মোঃ দেলোয়ার হোসেন",
//       designation: "আরবি শিশু ইংরেজি ১ম, আদইয়ায়ে সালাত ও মাসনুনাহ ৩য়, বাংলা ৩য়, কালিমা ও মাসআলা ৩য়",
//       phone: "০১৭৯২০০১৪২৩",
//       email: "delowar@example.com",
//       image: "/teachers/MAOLANA MD DELOWAR HOSSAIN.jpg",
//     },
//     {
//       name: "হাফেজ মোহাম্মদ রুবেল হক",
//       designation: "কোরআন শরীফ ৩য়, গণিত শিশু হাদিস ১ম, কালিমা মাসআলা ১ম, বাংলা ১ম, কালিমা মাসআলা ২য়",
//       phone: "০১৭৯৮৯৮৬৩০২",
//       email: "rubel@example.com",
//       image: "/teachers/RUBEL HAK.jpg",
//     },
//     {
//       name: "মাস্টার মোঃ শাহাজান আলী",
//       designation: "বাংলা শিশু ইংরেজি, শিশু কালিমা ও মাসআলা, শিশু সমাজ, বিজ্ঞান ও সাধারণ জ্ঞান ৩য়, গণিত ২য়, বাংলা ২য়, ইংরেজি ৩য়",
//       phone: "০১৭৮০৬৯৩৩০৯",
//       email: "shahajan@example.com",
//       image: "/teachers/MASTER SHAHJAHAN ALI.jpg",
//     },
//     {
//       name: "হাফেজ মোঃ ওবাইদুল হক",
//       designation: "কোরআন শরীফ (হিফজ ও নাজিরা)",
//       phone: "০১৬১২০৩৯৫৩৭",
//       email: "obaidul@example.com",
//       image: "/teachers/হাফেজ মোহাম্মদ ওবায়দুল্লাহ.jpg",
//     },
//   ];
 

// function Teachers() {
     
      
//   return (
//     <>
//       <HeroBanner />
//       <div className="container my-4">
//         <style>
//           {`
//             .our-office-card {
//               position: relative;
//               transition: transform 0.3s ease, box-shadow 0.3s ease;
//               border-radius: 15px;
//               overflow: hidden;
//               box-shadow: 0 4px 10px rgba(0,0,0,0.1);
//             }

//             .our-office-card:hover {
//               transform: translateY(-8px);
//               box-shadow: 0 8px 20px rgba(0,0,0,0.15);
//             }

//             .our-office-card img {
//               height: 250px;
//               width: 100%;
//               object-fit: cover;
//               border-bottom: 3px solid #f0f0f0;
//             }

//             .our-office-card-body {
//               padding: 1rem;
//               background: #fff;
//               text-align: center;
//               transition: background-color 0.2s ease-in-out;
//             }

//             .our-office-card:hover .our-office-card-body {
//               background-color: #f9f9f9;
//             }

//             .teacher-name {
//               font-size: 1.25rem;
//               font-weight: bold;
//               color: #333;
//             }

//             .teacher-info {
//               font-size: 0.95rem;
//               color: #555;
//               margin-top: 0.5rem;
//             }

//             .teacher-icon {
//               color: #007bff;
//               margin-right: 6px;
//             }
//           `}
//         </style>

//         <SectionTitle title="আমাদের শিক্ষকরা" />
//         <Row>
//           {teachers.map((teacher) => (
//             <Col md={4} sm={6} xs={12} key={teacher._id} className="my-3">
//               <Card className="h-100 our-office-card">
//                 <Image
//                   src={teacher.image}
//                   alt={teacher.name}
//                   className="card-img-top"
//                   loading="lazy"
//                   rounded
//                 />
//                 <div className="our-office-card-body">
//                   <p className="teacher-name">{teacher.name}</p>
//                   <div className="teacher-info">
//                     <FaMapMarkerAlt className="teacher-icon" />
//                     {teacher.designation}
//                   </div>
//                   <div className="teacher-info">
//                     <FaPhoneAlt className="teacher-icon" />
//                     {teacher.phone}
//                   </div>
//                   <div className="teacher-info">
//                     <FaEnvelope className="teacher-icon" />
//                     {teacher.email}
//                   </div>
//                 </div>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </div>
//     </>
//   );
// }

// export default Teachers;


 
// import Image from "next/image";
// import { Container, Row, Col, Card } from "react-bootstrap";
// import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

// const { default: SectionTitle } = require("@/components/common/SectionTitle");
// const { Row } = require("react-bootstrap");

// const teachers = [
//   {
//     name: "মাওলানা আব্দুল হাকিম",
//     designation: "মুহতামিম",
//     phone: "০১৭১২৩৪৫৬৭৮",
//     email: "hakim@example.com",
//     image: "/teacher-11.jpg",
//   },
//   {
//     name: "হাফেজ মোহাম্মদ ইউসুফ",
//     designation: "হাফেজ শিক্ষক",
//     phone: "০১৮১২৩৪৫৬৭৮",
//     email: "yusuf@example.com",
//     image: "/teacher-22.jpg",
//   },
//   {
//     name: "মাওলানা খালেদ সাইফুল্লাহ",
//     designation: "কুরআন শিক্ষক",
//     phone: "০১৯১২৩৪৫৬৭৮",
//     email: "khaled@example.com",
//     image: "/teacher-33.jpg",
//   },
// ];

// const TeachersSection = () => {
//   return (
//     <Container className="my-5">
//       <h2 className="text-center mb-5 fw-bold">শিক্ষক মন্ডলী</h2>
//       <Row>
//         {teachers.map((teacher, idx) => (
//           <Col key={idx} sm={12} md={6} lg={4} className="mb-4">
//             <Card
//               className="text-center shadow-lg border-0 h-100 p-1 teacher-card"
//               style={{ transition: "transform 0.3s", cursor: "pointer" }}
//             >
//               <div className="d-flex justify-content-center mt-1">
//                 <Image
//                   src={teacher.image}
//                   alt={teacher.name}
//                   width={280}
//                   height={280}
//                   className="rounded-circle border border-1 border-success"
//                   style={{ objectFit: "cover" }}
//                 />
//               </div>
//               <Card.Body>
//                 <Card.Title className="mt-3 fs-5 fw-bold">
//                   {teacher.name}
//                 </Card.Title>
//                 <Card.Text className="text-muted mb-2">
//                   {teacher.designation}
//                 </Card.Text>
//                 <Card.Text className="text-secondary mb-1">
//                   <FaPhoneAlt className="me-2" />
//                   {teacher.phone}
//                 </Card.Text>
//                 <Card.Text className="text-secondary">
//                   <FaEnvelope className="me-2" />
//                   {teacher.email}
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>

//       <style jsx>{`
//         .teacher-card:hover {
//           transform: scale(1.03);
//           box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.1);
//         }
//       `}</style>
//     </Container>
//   );
// };

// export default TeachersSection;




import SectionTitle from "@/components/common/SectionTitle";
import React from "react";
import { Row, Col, Card, Image } from "react-bootstrap";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import HeroBanner from "@/components/common/Banner";
import { teachers } from '@/data/teachers';

    

function Teachers() {
  return (
    <> <HeroBanner/>
    <div className="container my-4">
      <style>
        {`
          .our-office-card {
            position: relative;
            transition: transform 0.2s ease-in-out;
            overflow: hidden;
          }

          .our-office-card-body {
            padding: 1rem;
            transition: background-color 0.2s ease-in-out;
          }

          .our-office-card:hover {
            transform: scale(1.05);
          }

          .our-office-card:hover .our-office-card-body {
            background-color: #f8f8f8;
          }
        `}
      </style>
     

      <SectionTitle title="আমাদের শিক্ষকরা" />
      <Row>
        {teachers.map((teacher) => (
          <Col md={4} key={teacher._id} className="my-2 py-2">
          <Card className="h-100 our-office-card">
            <div className="image-wrapper">
              <Image
                src={teacher.image}
                alt="Office"
                className="p-2 m-1 rounded card"
                loading="lazy"
              />
            </div>
            <div className="py-2  our-office-card-body ">
                <p className="fs-5  fw-bold my-2">{teacher.name}</p>
               <div className="py-2  mb-1 cus-color-secondary fs-6 cus-fw-4">
                  <span>
                   <FaMapMarkerAlt className="d-inline me-2" />
                  </span>{" "}
                  {teacher.designation}
                </div>
                <div className="cus-color-secondary fs-6 cus-fw-4">
                 <span className="py-2 my-2 ">
                   <FaPhoneAlt className="d-inline me-1 " />{" "}
                  </span>
                  {teacher.phone}
               </div>
                <div className="py-2 my-2 cus-color-secondary fs-6 cus-fw-4">
                 <span>
                    <FaEnvelope className="d-inline me-2" />
                 </span>
                  {teacher.email}
               </div>
              </div>

          </Card>
        </Col>
        ))}
      </Row>
    </div></>
  );
}

export default Teachers;