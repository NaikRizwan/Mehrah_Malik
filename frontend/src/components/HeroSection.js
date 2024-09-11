import React from "react";
import styled from "styled-components";
import mehrajMalikImage from "../mehraj_malik111.jpg"; // Adjust the path according to your project structure
// import mehraj2 from "../Mehraj_Malik.jpg";
// import mehraj3 from "../public.jpg";
// import mehraj4 from "../kajrival.jpg";
// Styled components for the Hero Section
const HeroSectionWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 50vh; /* Limit the hero section to 50% of viewport height */
  background-image: url(${mehrajMalikImage});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;
`;

// Styled component for the slogan with tricolor background

function HeroSection() {
  return <HeroSectionWrapper></HeroSectionWrapper>;
}

export default HeroSection;
// import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

// import mehrajMalikImage from "../mehraj_malik111.jpg";
// import mehraj2 from "../Mehraj_Malik.jpg";
// import mehraj3 from "../public.jpg";
// import mehraj4 from "../kajrival.jpg";

// // Images array
// const images = [mehrajMalikImage, mehraj2, mehraj3, mehraj4];

// // Styled components for the Hero Section
// const HeroSectionWrapper = styled.section`
//   position: relative;
//   width: 100%;
//   height: 50vh;
//   background-image: url(${(props) => props.bgImage});
//   background-size: cover;
//   background-position: center;
//   display: flex;
//   align-items: flex-end;
//   justify-content: center;
//   transition: background-image 1s ease-in-out;
//   overflow: hidden;
// `;

// // Arrow buttons
// const ArrowButton = styled.button`
//   position: absolute;
//   top: 50%;
//   transform: translateY(-50%);
//   background-color: rgba(0, 0, 0, 0.5);
//   color: white;
//   border: none;
//   padding: 10px;
//   cursor: pointer;
//   z-index: 2;
//   ${(props) => (props.direction === "left" ? "left: 20px;" : "right: 20px;")};
//   &:hover {
//     background-color: rgba(0, 0, 0, 0.8);
//   }
// `;

// function HeroSection() {
//   const [currentImage, setCurrentImage] = useState(0);

//   // Automatically change image every 5 seconds
//   useEffect(() => {
//     const imageInterval = setInterval(() => {
//       setCurrentImage((prevImage) => (prevImage + 1) % images.length);
//     }, 5000);
//     return () => clearInterval(imageInterval); // Clean up interval on unmount
//   }, []);

//   // Function to handle manual image change
//   const nextImage = () => {
//     setCurrentImage((prevImage) => (prevImage + 1) % images.length);
//   };

//   const prevImage = () => {
//     setCurrentImage((prevImage) =>
//       prevImage === 0 ? images.length - 1 : prevImage - 1
//     );
//   };

//   return (
//     <HeroSectionWrapper bgImage={images[currentImage]}>
//       {/* Arrow buttons for manual slide control */}
//       <ArrowButton direction="left" onClick={prevImage}>
//         <FontAwesomeIcon icon={faArrowLeft} size="2x" />
//       </ArrowButton>
//       <ArrowButton direction="right" onClick={nextImage}>
//         <FontAwesomeIcon icon={faArrowRight} size="2x" />
//       </ArrowButton>

//       {/* Social Media Icons */}
//     </HeroSectionWrapper>
//   );
// }

// export default HeroSection;
// import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

// // Importing images
// import mehrajMalikImage from "../mehraj_malik111.jpg";
// import mehraj2 from "../Mehraj_Malik.jpg";
// import mehraj3 from "../public.jpg";
// import mehraj4 from "../kajrival.jpg";

// // Images array
// const images = [mehrajMalikImage, mehraj2, mehraj3, mehraj4];

// // Styled components for the Hero Section
// const HeroSectionWrapper = styled.section`
//   position: relative;
//   width: 100%;
//   height: 100vh; /* Full viewport height */
//   background-image: url(${(props) => props.bgImage});
//   background-size: cover; /* Ensures image covers the entire area */
//   background-position: center; /* Centers the image */
//   background-repeat: no-repeat;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   transition: background-image 1s ease-in-out;
//   overflow: hidden;
// `;

// // Arrow buttons
// const ArrowButton = styled.button`
//   background-color: rgba(0, 0, 0, 0.5);
//   color: white;
//   border: none;
//   padding: 15px;
//   cursor: pointer;
//   z-index: 2;
//   border-radius: 50%;
//   transition: background-color 0.3s ease;
//   margin: 10px;
//   &:hover {
//     background-color: rgba(0, 0, 0, 0.8);
//   }
// `;

// // HeroSection component
// function HeroSection() {
//   const [currentImage, setCurrentImage] = useState(0);

//   // Automatically change the image every 5 seconds
//   useEffect(() => {
//     const imageInterval = setInterval(() => {
//       setCurrentImage((prevImage) => (prevImage + 1) % images.length);
//     }, 5000);
//     return () => clearInterval(imageInterval); // Cleanup on unmount
//   }, []);

//   // Function to navigate to the next image
//   const nextImage = () => {
//     setCurrentImage((prevImage) => (prevImage + 1) % images.length);
//   };

//   // Function to navigate to the previous image
//   const prevImage = () => {
//     setCurrentImage((prevImage) =>
//       prevImage === 0 ? images.length - 1 : prevImage - 1
//     );
//   };

//   return (
//     <HeroSectionWrapper bgImage={images[currentImage]}>
//       {/* Left Arrow for previous image */}
//       <ArrowButton onClick={prevImage}>
//         <FontAwesomeIcon icon={faArrowLeft} size="2x" />
//       </ArrowButton>

//       {/* Right Arrow for next image */}
//       <ArrowButton onClick={nextImage}>
//         <FontAwesomeIcon icon={faArrowRight} size="2x" />
//       </ArrowButton>
//     </HeroSectionWrapper>
//   );
// }

// export default HeroSection;
