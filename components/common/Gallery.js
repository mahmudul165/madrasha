import React from 'react'
import { images } from '@/data/gallery';
function Gallery() {
  return (
    <section id="gallery" className="bg-light py-5">
  <div className="container">
    <h2 className="section-title">ছবির গ্যালারি</h2>
    <div className="row">
      {images?.map((img, i) => (
        <div className="col-12 col-md-4 mb-3" key={i}>
          <img
            src={img}
            className="img-fluid gallery-img"
            alt={`ছবি ${i + 1}`}
            style={{
              width: "100%",
              height: "250px",
              objectFit: "cover",
              borderRadius: "8px",
              transition: "transform 0.3s ease-in-out",
            }}
            // Hover effect to zoom in image on hover
            onMouseEnter={(e) => e.target.style.transform = "scale(1.1)"}
            onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
          />
        </div>
      ))}
    </div>
  </div>
</section>
  )
}

export default Gallery