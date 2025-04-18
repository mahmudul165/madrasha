 
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

    

function OurOffices() {
  return (
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
      <HeroBanner></HeroBanner>

      <SectionTitle title="Our teachers" />
      <Row>
        {teachers.map((teacher) => (
          <Col md={4} key={teacher._id} className="my-2 py-2">
          <Card className="h-100 our-office-card">
            <div className="image-wrapper">
              <Image
                src={teacher.image}
                alt="Office"
                className="card-img-top"
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
    </div>
  );
}

export default OurOffices;
