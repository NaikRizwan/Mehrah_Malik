import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWikipediaW,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
function ContactPage() {
  const [formData, setFormData] = useState({
    voterName: "",
    location: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="container contact-page">
      <div className="row">
        {/* Contact Form Card */}
        <div className="col-lg-6 col-md-12 mb-4">
          <div className="card form-card">
            <h2 className="text-center form-heading">Contact Mehraj Malik</h2>
            <form
              action="https://formspree.io/f/mdknvkyj" // Replace with your Formspree form ID
              method="POST"
              className="form-container"
            >
              <div className="form-group">
                <label htmlFor="voterName">Voter Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="voterName"
                  name="voterName"
                  value={formData.voterName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="location">Location</label>
                <input
                  type="text"
                  className="form-control"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Enter your location"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows="5"
                  required
                ></textarea>
              </div>

              <div className="form-group text-center">
                <button type="submit" className="btn btn-primary submit-btn">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Contact Info Card */}
        <div className="col-lg-6 col-md-12 mb-4">
          <div className="card contact-info-card">
            <h2 className="text-center contact-heading">Get in Touch</h2>
            <div className="contact-details">
              <p>
                <strong>Phone:</strong>{" "}
                <a href="tel:+919906921559">099069 21559</a>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:mehrajmalik198@gmail.com">
                  mehrajmalik198@gmail.com
                </a>
              </p>
              <p>
                <strong>Address:</strong> Bhalessa, Jammu and Kashmir, India
              </p>
              <div className="social-icons">
                <a
                  href="https://www.facebook.com/AAPMehrajMalikk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a
                  href="https://www.instagram.com/mehrajmalik_aap/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  href="https://en.wikipedia.org/wiki/Mehraj_Malik"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faWikipediaW} />
                </a>
                <a
                  href="https://en.wikipedia.org/wiki/Mehraj_Malik"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
                <a
                  href="https://wa.me/99069 21559"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
