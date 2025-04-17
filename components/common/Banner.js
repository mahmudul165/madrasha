// import { useSlideCollectionQuery } from "@/lib/hook/useApi";
// import { useRouter } from "next/router";

// const HeroBanner = ({ name }) => {
//   const router = useRouter();

//   const { data } = useSlideCollectionQuery({
//     // Enable caching for this query
//     cacheTime: 60,
//     // Set the stale time to 5 minutes
//     staleTime: 300000,
//   });
//   console.log("slide data:", data, router.pathname);
//   // Find the slide
//   // const mySlide = data?.find((slide) => slide.pathName == router.pathname);
//   const mySlide =
//     data &&
//     Array.isArray(data) &&
//     data.find((slide) => slide.pathName == router.pathname);

//   console.log("test slider router path", mySlide, router.pathname);
//   return (
//     <>
//       {mySlide ? (
//         <div
//           className="position-relative"
//           style={{
//             backgroundImage: `url(${mySlide?.image})`,

//             backgroundSize: "cover",
//             backgroundPosition: "center bottom",
//             height: "55vh",
//           }}
//         >
//           <div
//             style={{
//               backgroundColor: "rgba(255, 255, 255, 0.2)",
//             }}
//             className="   position-absolute w-100 bottom-0 py-4"
//           >
//             <div className="d-flex justify-content-between container align-items-center">
//               <div className="bg-light  px-4 rounded cus-color-secondary">
//                 <h2 className="fs-4 fw-bold text-capitalize  cus-color-secondary">
//                   {" "}
//                   {mySlide?.title}
//                 </h2>
//                 <p className="fs-6  cus-color-secondary ">Home / {name}</p>
//               </div>
//               <div>{/* <SearchBar /> */}</div>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div
//           className="position-relative"
//           style={{
//             backgroundImage: "url(https://dsmmbd.com/img/17134299575199IMG-20231227-WA0003.jpg)",
//             backgroundSize: "cover",
//             backgroundPosition: "center bottom",
//             height: "55vh",
//           }}
//         >
//           <div
//             style={{
//               backgroundColor: "rgba(255, 255, 255, 0.2)",
//             }}
//             className="   position-absolute w-100 bottom-0 py-4"
//           >
//             <div className="d-flex justify-content-between container align-items-center gap-2 ">
//               <div className="bg-light  px-4 rounded ">
//                 <h2 className="fs-4 fw-bold   text-capitalize cus-color-secondary">
//                   {" "}
//                   {name}
//                 </h2>
//                 <p className="fs-6   cus-color-secondary">Home / {name}</p>
//               </div>
//               <div>{/* <SearchBar /> */}</div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default HeroBanner;


// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";

// const HeroBanner = ({ name }) => {
//   const router = useRouter();
//   const [currentSlides, setCurrentSlides] = useState([]);

//   const slidesData = {
//     "/": [
//       {
//         image: "https://themazine.com/html/Alquran-2/alquran/alquran/assets/images/main-slider/image-1.jpg",
//         title: "তাকওয়া-নূরানী ও হাফেজিয়া মাদরাসা - হোম"
//       },
//       {
//         image: "https://themazine.com/html/Alquran-2/alquran/alquran/assets/images/gallery/7.jpg",
//         title: "ইসলামিক শিক্ষার আলো ছড়াই"
//       },
//       {
//         image: "https://www.tahfeezulquran.org/wp-content/uploads/2023/08/DSC_7120-min-scaled.jpg",
//         title: "শিক্ষার্থীদের হিফজ প্রতিযোগিতা"
//       },
//       {
//         image: "https://themazine.com/html/Alquran-2/alquran/alquran/assets/images/gallery/7.jpg",
//         title: "আদর্শ চরিত্র গঠনে শিক্ষা"
//       },
//       {
//         image: "https://themazine.com/html/Alquran-2/alquran/alquran/assets/images/main-slider/image-1.jpg",
//         title: "জীবনের জন্য কুরআন"
//       }
//     ],
//     "/about": [
//       {
//         image: "https://themazine.com/html/Alquran-2/alquran/alquran/assets/images/gallery/7.jpg",
//         title: "আমাদের সম্পর্কে"
//       },
//       {
//         image: "https://www.tahfeezulquran.org/wp-content/uploads/2023/08/DSC_7120-min-scaled.jpg",
//         title: "দীর্ঘ ইতিহাস ও গৌরব"
//       },
//       {
//         image: "https://themazine.com/html/Alquran-2/alquran/alquran/assets/images/main-slider/image-1.jpg",
//         title: "শিক্ষক ও ছাত্রদের একতা"
//       }
//     ]
//   };

//   useEffect(() => {
//     const routeSlides = slidesData[router.pathname] || slidesData["/"];
//     setCurrentSlides(routeSlides);
//   }, [router.pathname]);

//   return (
//     <div
//       id="heroCarousel"
//       className="carousel slide"
//       data-bs-ride="carousel"
//     >
//       <div className="carousel-inner">
//         {currentSlides.map((slide, index) => (
//           <div
//             className={`carousel-item ${index === 0 ? "active" : ""}`}
//             key={index}
//           >
//             <div
//               className="position-relative"
//               style={{
//                 backgroundImage: `url(${slide.image})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center bottom",
//                 height: "55vh",
//               }}
//             >
//               <div
//                 className="position-absolute w-100 bottom-0 py-4"
//                 style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}
//               >
//                 <div className="d-flex justify-content-between container align-items-center gap-2">
//                   <div className="bg-light px-4 rounded">
//                     <h2 className="fs-4 fw-bold text-capitalize text-dark">
//                       {slide.title}
//                     </h2>
//                     <p className="fs-6 text-dark">Home / {name}</p>
//                   </div>
//                   {/* Add SearchBar or logo here if needed */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Custom Carousel Buttons */}
//       <button
//         className="carousel-control-prev custom-carousel-btn"
//         type="button"
//         data-bs-target="#heroCarousel"
//         data-bs-slide="prev"
//       >
//         <span className="custom-carousel-icon bg-light text-dark">
//           <i className="bi bi-chevron-left fs-3"></i>
//         </span>
//         <span className="visually-hidden">Previous</span>
//       </button>
//       <button
//         className="carousel-control-next custom-carousel-btn"
//         type="button"
//         data-bs-target="#heroCarousel"
//         data-bs-slide="next"
//       >
//         <span className="custom-carousel-icon bg-light text-dark">
//           <i className="bi bi-chevron-right fs-3"></i>
//         </span>
//         <span className="visually-hidden">Next</span>
//       </button>

//       <style jsx>{`
//         .custom-carousel-btn {
//           width: auto;
//           height: 100%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         .custom-carousel-icon {
//           padding: 8px 12px;
//           border-radius: 50%;
//           box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
//           transition: background-color 0.3s ease;
//         }

//         .custom-carousel-icon:hover {
//           background-color: #ffc107;
//           color: #000;
//         }
//       `}</style>

//       {/* Bootstrap Icons CDN */}
//       <link
//         rel="stylesheet"
//         href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
//       />
//     </div>
//   );
// };

// export default HeroBanner;




// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
// import { motion } from "framer-motion"; // Import framer-motion

// const HeroBanner = ({ name }) => {
//   const router = useRouter();
//   const [currentSlides, setCurrentSlides] = useState([]);

//   const slidesData = {
//     "/": [
//       {
//         image: "https://themazine.com/html/Alquran-2/alquran/alquran/assets/images/main-slider/image-1.jpg",
//         title: "তাকওয়া-নূরানী ও হাফেজিয়া মাদরাসা - হোম"
//       },
//       {
//         image: "https://themazine.com/html/Alquran-2/alquran/alquran/assets/images/gallery/7.jpg",
//         title: "ইসলামিক শিক্ষার আলো ছড়াই"
//       },
//       {
//         image: "https://www.tahfeezulquran.org/wp-content/uploads/2023/08/DSC_7120-min-scaled.jpg",
//         title: "শিক্ষার্থীদের হিফজ প্রতিযোগিতা"
//       },
//       {
//         image: "https://themazine.com/html/Alquran-2/alquran/alquran/assets/images/gallery/7.jpg",
//         title: "আদর্শ চরিত্র গঠনে শিক্ষা"
//       },
//       {
//         image: "https://themazine.com/html/Alquran-2/alquran/alquran/assets/images/main-slider/image-1.jpg",
//         title: "জীবনের জন্য কুরআন"
//       }
//     ],
//     "/about": [
//       {
//         image: "https://themazine.com/html/Alquran-2/alquran/alquran/assets/images/gallery/7.jpg",
//         title: "আমাদের সম্পর্কে"
//       },
//       {
//         image: "https://www.tahfeezulquran.org/wp-content/uploads/2023/08/DSC_7120-min-scaled.jpg",
//         title: "দীর্ঘ ইতিহাস ও গৌরব"
//       },
//       {
//         image: "https://themazine.com/html/Alquran-2/alquran/alquran/assets/images/main-slider/image-1.jpg",
//         title: "শিক্ষক ও ছাত্রদের একতা"
//       }
//     ],
//     "/contact": [
      
//       {
//         image: "https://themazine.com/html/Alquran-2/alquran/alquran/assets/images/main-slider/image-1.jpg",
//         title: "শিক্ষক ও ছাত্রদের একতা"
//       },
//       {
//         image: "https://themazine.com/html/Alquran-2/alquran/alquran/assets/images/gallery/7.jpg",
//         title: "আমাদের সম্পর্কে"
//       },
//       {
//         image: "https://www.tahfeezulquran.org/wp-content/uploads/2023/08/DSC_7120-min-scaled.jpg",
//         title: "দীর্ঘ ইতিহাস ও গৌরব"
//       }
//     ]
//   };

//   useEffect(() => {
//     const routeSlides = slidesData[router.pathname] || slidesData["/"];
//     setCurrentSlides(routeSlides);
//   }, [router.pathname]);

//   return (
//     <div
//       id="heroCarousel"
//       className="carousel slide"
//       data-bs-ride="carousel"
//     >
//       <div className="carousel-inner">
//         {currentSlides.map((slide, index) => (
//           <motion.div
//             className={`carousel-item ${index === 0 ? "active" : ""}`}
//             key={index}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 1 }}
//           >
//             <div
//               className="position-relative"
//               style={{
//                 backgroundImage: `url(${slide.image})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center bottom",
//                 height: "55vh",
//               }}
//             >
//               <motion.div
//                 className="position-absolute w-100 bottom-0 py-4"
//                 style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <div className="d-flex justify-content-between container align-items-center gap-2">
//                   <div className="bg-light px-4 rounded">
//                     <motion.h2
//                       className="fs-4 fw-bold text-capitalize text-dark"
//                       initial={{ y: 50, opacity: 0 }}
//                       animate={{ y: 0, opacity: 1 }}
//                       transition={{ duration: 0.5 }}
//                     >
//                       {slide.title}
//                     </motion.h2>
//                     <p className="fs-6 text-dark">হোম  {name}</p>
//                   </div>
//                   {/* Add SearchBar or logo here if needed */}
//                 </div>
//               </motion.div>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Custom Carousel Buttons */}
//       <motion.button
//         className="carousel-control-prev custom-carousel-btn"
//         type="button"
//         data-bs-target="#heroCarousel"
//         data-bs-slide="prev"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.3 }}
//       >
//         <span className="custom-carousel-icon bg-light text-dark">
//           <i className="bi bi-chevron-left fs-3"></i>
//         </span>
//         <span className="visually-hidden">Previous</span>
//       </motion.button>
//       <motion.button
//         className="carousel-control-next custom-carousel-btn"
//         type="button"
//         data-bs-target="#heroCarousel"
//         data-bs-slide="next"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.3 }}
//       >
//         <span className="custom-carousel-icon bg-light text-dark">
//           <i className="bi bi-chevron-right fs-3"></i>
//         </span>
//         <span className="visually-hidden">Next</span>
//       </motion.button>

//       <style jsx>{`
//         .custom-carousel-btn {
//           width: auto;
//           height: 100%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         .custom-carousel-icon {
//           padding: 8px 12px;
//           border-radius: 50%;
//           box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
//           transition: background-color 0.3s ease;
//         }

//         .custom-carousel-icon:hover {
//           background-color: #ffc107;
//           color: #000;
//         }
//       `}</style>

//       {/* Bootstrap Icons CDN */}
//       <link
//         rel="stylesheet"
//         href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
//       />
//     </div>
//   );
// };

// export default HeroBanner;
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Import framer-motion

const HeroBanner = ({ name }) => {
  const router = useRouter();
  const [currentSlides, setCurrentSlides] = useState([]);

  const slidesData = {
    "/": [
      {
        image: "https://themazine.com/html/Alquran-2/alquran/alquran/assets/images/main-slider/image-1.jpg",
        title: "তাকওয়া-নূরানী ও হাফেজিয়া মাদরাসা - হোম"
      },
      {
        image: "https://themazine.com/html/Alquran-2/alquran/alquran/assets/images/gallery/7.jpg",
        title: "ইসলামিক শিক্ষার আলো ছড়াই"
      },
      {
        image: "https://www.tahfeezulquran.org/wp-content/uploads/2023/08/DSC_7120-min-scaled.jpg",
        title: "শিক্ষার্থীদের হিফজ প্রতিযোগিতা"
      },
      {
        image: "https://themazine.com/html/Alquran-2/alquran/alquran/assets/images/gallery/7.jpg",
        title: "আদর্শ চরিত্র গঠনে শিক্ষা"
      },
      {
        image: "https://themazine.com/html/Alquran-2/alquran/alquran/assets/images/main-slider/image-1.jpg",
        title: "জীবনের জন্য কুরআন"
      }
    ],
    "/about": [
      {
        image: "https://themazine.com/html/Alquran-2/alquran/alquran/assets/images/gallery/7.jpg",
        title: "আমাদের সম্পর্কে"
      },
      {
        image: "https://www.tahfeezulquran.org/wp-content/uploads/2023/08/DSC_7120-min-scaled.jpg",
        title: "দীর্ঘ ইতিহাস ও গৌরব"
      },
      {
        image: "https://themazine.com/html/Alquran-2/alquran/alquran/assets/images/main-slider/image-1.jpg",
        title: "শিক্ষক ও ছাত্রদের একতা"
      }
    ],
    "/contact": [
      {
        image: "https://themazine.com/html/Alquran-2/alquran/alquran/assets/images/main-slider/image-1.jpg",
        title: "শিক্ষক ও ছাত্রদের একতা"
      },
      {
        image: "https://themazine.com/html/Alquran-2/alquran/alquran/assets/images/gallery/7.jpg",
        title: "আমাদের সম্পর্কে"
      },
      {
        image: "https://www.tahfeezulquran.org/wp-content/uploads/2023/08/DSC_7120-min-scaled.jpg",
        title: "দীর্ঘ ইতিহাস ও গৌরব"
      }
    ]
  };

  useEffect(() => {
    const routeSlides = slidesData[router.pathname] || slidesData["/"];
    setCurrentSlides(routeSlides);
  }, [router.pathname]);

  return (
    <div
      id="heroCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {currentSlides.map((slide, index) => (
          <motion.div
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div
              className="position-relative"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "60vh", // Increased height for better impact
              }}
            >
              <motion.div
                className="position-absolute w-100 bottom-0 py-5"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.4)", // Darker overlay for better contrast
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="d-flex justify-content-between container align-items-center gap-2">
                  <div className="bg-light px-4 py-3 rounded shadow-lg">
                    <motion.h2
                      className="fs-4 fw-bold text-capitalize text-dark"
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      style={{ textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)" }}
                    >
                      {slide.title}
                    </motion.h2>
                    <p className="fs-6 text-light">হোম {name}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Custom Carousel Buttons */}
      <motion.button
        className="carousel-control-prev custom-carousel-btn"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="prev"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <span className="custom-carousel-icon bg-light text-dark">
          <i className="bi bi-chevron-left fs-3"></i>
        </span>
        <span className="visually-hidden">Previous</span>
      </motion.button>
      <motion.button
        className="carousel-control-next custom-carousel-btn"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="next"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <span className="custom-carousel-icon bg-light text-dark">
          <i className="bi bi-chevron-right fs-3"></i>
        </span>
        <span className="visually-hidden">Next</span>
      </motion.button>

      <style jsx>{`
        .custom-carousel-btn {
          width: auto;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .custom-carousel-icon {
          padding: 10px;
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          transition: background-color 0.3s ease;
        }

        .custom-carousel-icon:hover {
          background-color: #ffc107;
          color: #000;
        }

        @media (max-width: 768px) {
          .carousel-inner {
            height: 50vh; // Adjust height for mobile
          }

          .carousel-item h2 {
            font-size: 1.2rem; // Adjust text size for smaller screens
          }
        }
      `}</style>

      {/* Bootstrap Icons CDN */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
      />
    </div>
  );
};

export default HeroBanner;
