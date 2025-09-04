


"use client"; // Next.js 15 client component

import React, { useState } from "react";
import Image from "next/image";
import { images } from "@/data/gallery";
import { Row, Col, Button } from "react-bootstrap";

const IMAGES_PER_PAGE = 9;

export default function Gallery() {
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
        <h2 className="section-title mb-4 text-center">ছবির গ্যালারি</h2>

        <Row className="g-3">
          {currentImages.map((img, i) => (
            <Col xs={12} sm={6} md={4} key={startIndex + i}>
              <div className="gallery-card">
                <Image
                  src={img}
                  alt={`ছবি ${startIndex + i + 1}`}
                  width={500}
                  height={300}
                  style={{ objectFit: "cover", borderRadius: "10px" }}
                  priority={i < 3} // first 3 images priority for faster load
                  sizes="(max-width: 576px) 100vw,
                         (max-width: 768px) 50vw,
                         33vw"
                  placeholder="blur"
                  blurDataURL="/images/placeholder.png" // small blurred placeholder
                />
              </div>
            </Col>
          ))}
        </Row>

        {/* Pagination */}
        <div className="d-flex justify-content-center align-items-center gap-2 mt-4 flex-wrap">
          <Button
            size="sm"
            variant="primary"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            পূর্বের
          </Button>

          {Array.from({ length: totalPages }, (_, i) => (
            <Button
              key={i}
              size="sm"
              variant={currentPage === i + 1 ? "primary" : "outline-primary"}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </Button>
          ))}

          <Button
            size="sm"
            variant="primary"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            পরের
          </Button>
        </div>
      </div>

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

        @media (max-width: 768px) {
          .gallery-card img {
            height: 200px !important;
          }
        }

        @media (max-width: 576px) {
          .gallery-card img {
            height: 180px !important;
          }
        }
      `}</style>
    </section>
  );
}
