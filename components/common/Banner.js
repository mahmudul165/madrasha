
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Import framer-motion

const HeroBanner = ({ name }) => {
  const router = useRouter();
  const [currentSlides, setCurrentSlides] = useState([]);

  const slidesData = {
    "/": [
      {
        image: "/slider/slider-1.jpg",
        title: "আদর্শ চরিত্র গঠনে শিক্ষা"
      },
      {
        image: "/slider/slider-2.jpg",
        title: "তাকওয়া-নূরানী ও হাফেজিয়া মাদ্রাসা"
      },
      {
        image: "/slider/slider-3.jpg",
        title: "শিক্ষার্থীদের হিফজ প্রতিযোগিতা"
      },
      {
        image: "/slider/slider-4.jpg",
        title: "ইসলামিক শিক্ষার আলো ছড়াই"
      },
           
    ],
    "/about": [
      {
        image: "/slider/slider-2.jpg",
        title: "আদর্শ চরিত্র গঠনে শিক্ষা"
      },
      {
        image: "/slider/slider-3.jpg",
        title: "দীর্ঘ ইতিহাস ও গৌরব"
      },
      {
        image: "/slider/slider-6.jpg",
        title: "শিক্ষক ও ছাত্রদের একতা"
      }
    ],
    "/madrasaIntro": [
      {
        image: "/slider/slider-4.jpg",
        title: "আদর্শ চরিত্র গঠনে শিক্ষা"
      },
      {
        image: "/slider/slider-3.jpg",
        title: "দীর্ঘ ইতিহাস ও গৌরব"
      },
      {
        image: "/slider/slider-6.jpg",
        title: "শিক্ষক ও ছাত্রদের একতা"
      }
    ],
    "/contact": [
      {
        image: "/slider/slider-2.jpg",
        title: "শিক্ষক ও ছাত্রদের একতা"
      },
      {
        image: "/slider/slider-3.jpg",
        title: "আমাদের শিক্ষার্থী"
      },
      {
        image: "/slider/slider-4.jpg",
        title: "দীর্ঘ ইতিহাস ও গৌরব"
      }
    ],
    "/teachers": [
      {
        image: "/slider/slider-1.jpg",
        title: "আদর্শ চরিত্র গঠনে শিক্ষা"
      },
      {
        image: "/slider/slider-3.jpg",
        title: "দীর্ঘ ইতিহাস ও গৌরব"
      },
      {
        image: "/slider/slider-2.jpg",
        title: "শিক্ষক ও ছাত্রদের একতা"
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
                height: "77vh", // Increased height for better impact
              }}
            >
              <motion.div
                className="position-absolute w-100 bottom-0 py-1"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.4)", // Darker overlay for better contrast
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
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



