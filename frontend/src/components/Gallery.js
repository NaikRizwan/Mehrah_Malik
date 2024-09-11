import React, { useState } from "react";
import styled from "styled-components";

// Import images
import mehrajMalikImage from "../mehraj_malik111.jpg"; // Adjust the path according to your project structure
import mehraj2 from "../Mehraj_Malik.jpg";
import mehraj3 from "../public.jpg";
import mehraj4 from "../kajrival.jpg";

const GalleryWrapper = styled.div`
  padding: 30px;
  background-color: #f8f9fa;

  h1 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 30px;
  }

  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 15px;
  }

  .gallery-item {
    position: relative;
    overflow: hidden;
    cursor: pointer;
    border-radius: 15px; /* Added border radius */
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* Optional: adds shadow for better visual */
  }

  .gallery-item img {
    width: 100%;
    height: 250px; /* Fixed height to maintain uniformity */
    object-fit: cover; /* Ensures image fits within the box without distortion */
    display: block;
    transition: transform 0.3s;
    border-radius: 15px; /* Ensures the image also has rounded corners */
  }

  .gallery-item:hover img {
    transform: scale(1.05); /* Zooms in slightly on hover */
  }

  /* Lightbox styles */
  .lightbox {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .lightbox img {
    max-width: 90%;
    max-height: 80%;
    border-radius: 15px; /* Rounded corners in lightbox */
  }

  .lightbox-close {
    position: absolute;
    top: 30px;
    right: 30px;
    color: white;
    font-size: 2rem;
    cursor: pointer;
  }
`;

function Gallery() {
  const images = [
    { src: mehrajMalikImage, alt: "Mehraj Malik 1" },
    { src: mehraj2, alt: "Mehraj Malik 2" },
    { src: mehraj3, alt: "Public Event" },
    { src: mehraj4, alt: "With Arvind Kejriwal" },
  ];

  const [lightboxImage, setLightboxImage] = useState(null);

  const openLightbox = (img) => {
    setLightboxImage(img);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <GalleryWrapper>
      <h1>Gallery</h1>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div
            className="gallery-item"
            key={index}
            onClick={() => openLightbox(img)}
          >
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>

      {lightboxImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <span className="lightbox-close">&times;</span>
          <img src={lightboxImage.src} alt={lightboxImage.alt} />
        </div>
      )}
    </GalleryWrapper>
  );
}

export default Gallery;
