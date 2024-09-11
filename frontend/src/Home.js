import React from "react";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import Achievementa from "./components/AchievementsPage";
import InitiativesPage from "./components/InitiativesPage";
import ContactPage from "./components/ContactPage";
import Gallery from "./components/Gallery";
import VideoGallery from "./components/VideoGallery";
const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <Achievementa />
      <InitiativesPage />
      <Gallery />
      <VideoGallery />
      <ContactPage />
    </>
  );
};

export default Home;
