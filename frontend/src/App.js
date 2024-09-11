import React from "react";
import { Routes, Route } from "react-router-dom";
import MehrajMalikNavbar from "./components/MehrajMalikNavbar";
import Footer from "./components/Footer";
import Home from "./Home";
import AboutUs from "./components/AboutUs";
import ContactPage from "./components/ContactPage";
import InitiativesPage from "./components/InitiativesPage";
import AchievementsPage from "./components/AchievementsPage";
import GrievancePage from "./components/GrievancePage";
import UserCard from "./components/UserCard";
import JoinForm from "./components/JoinForm";
const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/InitiativesPage" element={<InitiativesPage />} />
        <Route path="/grievance" element={<GrievancePage />} />
        <Route path="/AchievementsPage" element={<AchievementsPage />} />
        <Route path="/card" element={<UserCard />} />
        <Route path="/join-now" element={<JoinForm />} />

        {/* <Route path="/products" element={<Products />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />

        <Route path="/singleproduct/:id" element={<SingleProduct />} /> */}
      </Routes>
    </>
  );
};
const App = () => {
  return (
    <>
      <MehrajMalikNavbar />
      <Routing />
      <Footer />
    </>
  );
};

export default App;
