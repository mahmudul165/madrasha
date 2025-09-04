// import React from 'react'
// import { images } from '@/data/gallery';
// function Gallery() {
//   return (
//     <section id="gallery" className="bg-light py-5">
//   <div className="container">
//     <h2 className="section-title">ছবির গ্যালারি</h2>
//     <div className="row">
//       {images?.map((img, i) => (
//         <div className="col-12 col-md-4 mb-3" key={i}>
//           <img
//             src={img}
//             className="img-fluid gallery-img"
//             alt={`ছবি ${i + 1}`}
//             style={{
//               width: "100%",
//               height: "250px",
//               objectFit: "cover",
//               borderRadius: "8px",
//               transition: "transform 0.3s ease-in-out",
//             }}
//             // Hover effect to zoom in image on hover
//             onMouseEnter={(e) => e.target.style.transform = "scale(1.1)"}
//             onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
//           />
//         </div>
//       ))}
//     </div>
//   </div>
// </section>
//   )
// }

// export default Gallery



import React, { useState } from "react";
import Image from "next/image";
import { images } from "@/data/gallery";

const IMAGES_PER_PAGE = 9;

function Gallery() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(images.length / IMAGES_PER_PAGE);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const startIndex = (currentPage - 1) * IMAGES_PER_PAGE;
  const currentImages = images.slice(startIndex, startIndex + IMAGES_PER_PAGE);

  return (
    <section id="gallery" className="bg-light py-5">
      <div className="container">
        <h2 className="section-title mb-4">ছবির গ্যালারি</h2>
        <div className="row g-3">
          {currentImages.map((img, i) => (
            <div className="col-12 col-sm-6 col-md-4" key={startIndex + i}>
              <div className="gallery-card">
                <Image
                  src={img}
                  alt={`ছবি ${startIndex + i + 1}`}
                  width={500}
                  height={300}
                  style={{ objectFit: "cover", borderRadius: "10px" }}
                  priority={i < 3} // first 3 images of current page load faster
                  sizes="(max-width: 576px) 100vw,
                         (max-width: 768px) 50vw,
                         33vw"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination mt-4 d-flex justify-content-center align-items-center gap-2">
          <button
            className="btn btn-primary btn-sm"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            পূর্বের
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`btn btn-sm ${currentPage === i + 1 ? "btn-primary" : "btn-outline-primary"}`}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            className="btn btn-primary btn-sm"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            পরের
          </button>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .gallery-card {
          overflow: hidden;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .gallery-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        .gallery-card img {
          transition: transform 0.4s ease;
        }

        .gallery-card:hover img {
          transform: scale(1.05);
        }

        .pagination button {
          min-width: 40px;
        }
      `}</style>
    </section>
  );
}

export default Gallery;
