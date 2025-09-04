// import Link from "next/link";
// import React from "react";
// import { Container, Row, Col, Card, Image } from "react-bootstrap";
// import { AiFillLinkedin } from "react-icons/ai";
// import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
// import { FiPhoneCall } from "react-icons/fi";
// import { GiCandlestickPhone } from "react-icons/gi";
// //test
// const Footer = () => {
//   const isMobile = window.innerWidth <= 768;

//   return (
//     <Container fluid className="p-4 " style={{ backgroundColor: "#F3F3F3" }}>
//       <Row>
//         <Col md={3} sm={12}>
//           {/* <Row className='justify-center w-50'> */}
//           {/* <Image className="w-50" src="main-logo.png" alt="logo" /> */}
//           <Image className="w-50" src="logo2.png" alt="logo" />
//           {/* </Row> */}
//           {/* <Row className="my-3"> */}


          
//           <p className=" text-sm  my-3 w-100 text-justify ">
//           একটি ইসলামী শিক্ষা প্রতিষ্ঠান, যা শিশুদের মধ্যে ধর্মীয় শিক্ষা ও নৈতিক মূল্যবোধের প্রতি সচেতনতা সৃষ্টি করতে কাজ করে। আমাদের উদ্দেশ্য হল শিশুদেরকে আধুনিক শিক্ষা এবং ইসলামী শিক্ষার মাধ্যমে আলোকিত জীবন গড়তে সহায়তা করা।
//           </p>
//           {/* <Image
//         src="/green-tea-removebg.jpg" // Put your image inside public/images folder
//         alt="Sultan Tea"
//         width={450}
//         height={300}
//         className="img-fluid rounded  py-1"
        
//       /> */}




     

//         </Col>
//         <Col sm={12} md={2}>
//           <h1 className="fs-5 fw-bold cus-color-secondary">Quick Link</h1>
//           <ul className="demo ">
//             <li>
//               <Link href="/about">About Us</Link>
//             </li>
//             <li>
//               <Link href="/shop">Our Products</Link>
//             </li>

//             <li>
//               <Link href="/press-releases">Press Releases</Link>
//             </li>
//             <li>
//               <Link href="/carrier">Carrier</Link>
//             </li>
//             <li>
//               <Link href="/contact">Contact Us</Link>
//             </li>
//             {/* <li>
//               <a href="#">Our Services</a>
//             </li>
//             <li>
//               <a href="#">Location</a>
//             </li> */}
//             <li>
//               <a href="#">Term and condition</a>
//             </li>
//             {/* <li>
//               <a href="#">Support</a>
//             </li> */}
//           </ul>
//         </Col>
//         <Col sm={12} md={4}>
//           <h1 className="fs-5 fw-bold mb-3 cus-color-secondary text-center">
//             Promotional Video
//           </h1>
//           <div className={isMobile ? "" : "mx-5"}>
//             {/* <video  width={640} height={160} controls>
//         <source src="https://streamable.com/e/wpdk6h" type="video/mp4" />
//       </video> */}
//             <div className="ele-center">
//               <iframe
//                 src="https://streamable.com/e/wpdk6h?autoplay=1"
//                 frameBorder={0}
//                 width="302px"
//                 height="170px"
//                 allow="autoplay"
//               />
//             </div>
//           </div>
//         </Col>
//         <Col sm={12} md={3}>
//           <h1 className="fs-5 fw-bold cus-color-secondary mb-2 text-center ">
//             Contact Us
//           </h1>
//           <div className="container footer-card p-2 bg-success  ">
//             <div className=" ">
//               <div className="">
//                 <p className="text-white fs-4 py-3 fw-bold">তাকওয়া নূরানী ও হাফেজিয়া মাদ্রাসা</p>
//               </div>
//               <div className=" mt-2 ">
//                 <div className="d-flex gap-2 justify-content-center  py-2 ">
//                   <FiPhoneCall size={35} className="text-warning" />
//                   <p className="fs-3 fw-bold text-white ">+8809678111777</p>
//                 </div>
//                 {/* test */}
//                 <p className="text-white fs-6 fw-bold">Mobile: 01708 588 590</p>
//                 <p className="text-white fs-6 fw-bold">
//                   Email: Sultan@heritagebd.com
//                 </p>                
//               </div>              
//             </div>
            
//           </div>
//            {/* </Row> */}
//            <div className="mt-2 py-1 d-flex gap-4 align-items-center justify-content-center">
//             {/* <Col sm={3} md={3}  > */}
//             <a
//               href="https://www.facebook.com/SultanTeaBangladesh"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaFacebook size={25} />
//             </a>
//             {/* </Col> */}
//             {/* <Col sm={3} md={3}  > */}
//             <a href="#">
//               <FaTwitter size={25} />
//             </a>
//             {/* </Col> */}
//             {/* <Col sm={3} md={3}  > */}
//             <a href="#">
//               <FaInstagram size={25} />
//             </a>
//             {/* </Col> */}

//             <a href="#">
//               <AiFillLinkedin size={25} />
//             </a>
//           </div>
//         </Col>
//       </Row>
//       <Row className="border-top pt-3 mt-2">
//         <Col>
//           <p className="text-end">&copy; Copyright Our Company 2022</p>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Footer;




import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { AiFillLinkedin } from "react-icons/ai";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

// Footer Component
const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container fluid className="p-4 bg-light mt-3" style={{ backgroundColor: "#F3F3F3" }}>
      <Row>
        <Col md={3} sm={12}>
          <Image className="w-50" src="logo2.png" alt="logo" />
          <p className="text-sm my-3 w-100 text-justify">
            একটি ইসলামী শিক্ষা প্রতিষ্ঠান, যা শিশুদের মধ্যে ধর্মীয় শিক্ষা ও
            নৈতিক মূল্যবোধের প্রতি সচেতনতা সৃষ্টি করতে কাজ করে। আমাদের উদ্দেশ্য
            হল শিশুদেরকে আধুনিক শিক্ষা এবং ইসলামী শিক্ষার মাধ্যমে আলোকিত জীবন
            গড়তে সহায়তা করা।
          </p>
        </Col>

        <Col sm={12} md={2}>
          <h1 className="fs-5 fw-bold cus-color-secondary">গুরুত্বপূর্ণ লিঙ্ক</h1>
          <ul className="demo">
        
            <li><Link href="/madrasaIntro">মাদ্রাসার পরিচিতি</Link></li>
            <li><Link href="/about">পরিচালক</Link></li>
            <li><Link href="/teachers">শিক্ষক মন্ডলী</Link></li>
            <li><Link href="/notices">নোটিশ</Link></li>
            <li><Link href="/picture">গ্যালারি</Link></li>
            {/* <li><Link href="#">ভর্তি</Link></li> */}
            <li><Link href="/contact">যোগাযোগ</Link></li>
            {/* <li><a href="#">Term and condition</a></li> */}
          </ul>
        </Col>

        <Col sm={12} md={4}>
          <h1 className="fs-5 fw-bold mb-3 cus-color-secondary text-center">
          প্রচারমূলক ভিডিও
          </h1>
          <div className={isMobile ? "" : "mx-5"}>
            <div className="ele-center">              
              <iframe
                src="https://streamable.com/e/av8o8r?autoplay=1"
                frameBorder={0}
                width="302px"
                height="200px"
                allow="autoplay"
              />
            </div>
          </div>
        </Col>

        <Col sm={12} md={3}>
          <h1 className="fs-5 fw-bold cus-color-secondary mb-2 text-center">
          যোগাযোগ
          </h1>
          <div className="container footer-card p-2 bg-success">
            <p className="text-white fs-4 py-3 fw-bold">
              তাকওয়া নূরানী ও হাফেজিয়া মাদ্রাসা
            </p>
            <div className="mt-2">
              <div className="d-flex gap-2 justify-content-center py-2">
                <FiPhoneCall size={35} className="text-warning" />
                <p className="fs-3 fw-bold text-white">+৮৮০১৬১০৩৪৬৫৭৪</p>
              </div>
              <p className="text-white fs-6 fw-bold">Mobile: ০১৭০৮৫৮৮৫৯৯</p>
              <p className="text-white fs-6 fw-bold">
                Email: taqua@heritagebd.com
              </p>
            </div>
          </div>

          <div className="mt-2 py-1 d-flex gap-4 align-items-center justify-content-center">
            <a
              href="https://www.facebook.com/share/157jx9bAqr/?mibextid=qi2Omg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={25} />
            </a>
            <a href="#">
              <FaTwitter size={25} />
            </a>
            <a href="#">
              <FaInstagram size={25} />
            </a>
            <a href="#">
              <AiFillLinkedin size={25} />
            </a>
          </div>
        </Col>
      </Row>

      <Row className="border-top pt-3 mt-2 text-end">
        <Col>
          {/* <p className="text-end">&copy; Copyright 2022 Our Company</p> */}
          <p>কপিরাইট © ২০২৫ | তাকওয়া-নূরানী ও হাফেজিয়া মাদ্রাসা | সর্বস্বত্ব সংরক্ষিত</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
