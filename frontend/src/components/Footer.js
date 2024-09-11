// // import React from "react";
// // import styled from "styled-components";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import {
// //   faFacebook,
// //   faInstagram,
// //   faWikipediaW,
// // } from "@fortawesome/free-brands-svg-icons";
// // import {
// //   faPhone,
// //   faEnvelope,
// //   faMapMarkerAlt,
// // } from "@fortawesome/free-solid-svg-icons";

// // const FooterWrapper = styled.footer`
// //   background-color: #ffd700; /* AAP color theme */
// //   color: #000;
// //   padding: 2rem 0;
// //   text-align: center;

// //   .card {
// //     background: transparent;
// //     border: none;
// //   }

// //   .social-icons a {
// //     color: #000;
// //     margin: 0 10px;
// //     font-size: 1.5rem;
// //     transition: color 0.3s;

// //     &:hover {
// //       color: #007bff; /* Hover color for icons */
// //     }
// //   }

// //   .contact-info p {
// //     margin: 0.5rem 0;
// //     font-size: 1rem;
// //   }

// //   .fa-icon {
// //     margin-right: 8px;
// //   }

// //   .location {
// //     font-size: 0.9rem;
// //   }

// //   small {
// //     display: block;
// //     margin-top: 2rem;
// //     font-size: 0.85rem;
// //   }

// //   .created-by {
// //     margin-top: 0.5rem;
// //     font-size: 0.85rem;
// //   }
// // `;

// // function Footer() {
// //   return (
// //     <FooterWrapper>
// //       <div className="container">
// //         <div className="row">
// //           <div className="col-md-4">
// //             <div className="card text-center">
// //               <div className="card-body">
// //                 <h5 className="slogan">Inqalab Inqalab Inqalab</h5>
// //                 <p className="details">
// //                   District Development Councillor #Kahara Constituency J&K.{" "}
// //                   <br />
// //                   First Elected Public Representative of #AAP
// //                 </p>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="col-md-4">
// //             <div className="card text-center">
// //               <div className="card-body social-icons">
// //                 <a
// //                   href="https://www.facebook.com/your-profile"
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                 >
// //                   <FontAwesomeIcon icon={faFacebook} />
// //                 </a>
// //                 <a
// //                   href="https://www.instagram.com/your-profile"
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                 >
// //                   <FontAwesomeIcon icon={faInstagram} />
// //                 </a>
// //                 <a
// //                   href="https://en.wikipedia.org/wiki/your-profile"
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                 >
// //                   <FontAwesomeIcon icon={faWikipediaW} />
// //                 </a>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="col-md-4">
// //             <div className="card text-center">
// //               <div className="card-body contact-info">
// //                 <p>
// //                   <FontAwesomeIcon icon={faPhone} className="fa-icon" />
// //                   099069 21559
// //                 </p>
// //                 <p>
// //                   <FontAwesomeIcon icon={faEnvelope} className="fa-icon" />
// //                   mehrajmalik198@gmail.com
// //                 </p>
// //                 <p className="location">
// //                   <FontAwesomeIcon icon={faMapMarkerAlt} className="fa-icon" />
// //                   Live on Bhalessa, Jammu and Kashmir, India
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         <small>&copy; Mehraj Malik, 2024. All rights reserved.</small>
// //         <div className="created-by">Created by Mohd Rizwan</div>
// //       </div>
// //     </FooterWrapper>
// //   );
// // }

// // export default Footer;
// import React from "react";
// import styled from "styled-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebook,
//   faInstagram,
//   faWikipediaW,
//   faYoutube,
//   faWhatsapp,
// } from "@fortawesome/free-brands-svg-icons";
// import {
//   faPhone,
//   faEnvelope,
//   faMapMarkerAlt,
// } from "@fortawesome/free-solid-svg-icons";

// const FooterWrapper = styled.footer`
//   background-color: cadetblue; /* Dark background */
//   color: #ffffff; /* White text */
//   padding: 1rem 0;
//   text-align: left;

//   .container {
//     max-width: 1200px;
//     margin: auto;
//   }

//   .card {
//     background: transparent;
//     border: none;
//   }

//   .social-icons {
//     display: flex;
//     gap: 15px;
//     margin-bottom: 1rem;

//     a {
//       color: #ffffff;
//       font-size: 1.5rem;
//       transition: color 0.3s;

//       &:hover {
//         color: #ffd700; /* Hover effect in AAP yellow */
//       }
//     }
//   }

//   .contact-info {
//     margin-bottom: 1rem;
//     color: white;
//   }

//   .contact-info p {
//     margin: 0.5rem 0;
//     font-size: 1.1rem;
//     display: flex;
//     align-items: center;
//   }

//   .fa-icon {
//     margin-right: 8px;
//   }

//   .location {
//     font-size: 1.1rem;
//   }

//   small,
//   .created-by {
//     display: block;
//     margin-top: 1rem;
//     font-size: 0.95rem;
//     text-align: center;
//     color: #dddddd;
//   }

//   .created-by {
//     margin-top: 0.3rem;
//     font-size: 0.9rem;
//   }
//   .card-body {
//     color: white;
//   }

//   h1,
//   h2 {
//     text-align: center;
//     color: #2c3e50;
//   }

//   .riz {
//     color: #555;
//     line-height: 1.7;
//     font-size: 1.1rem;
//   }

//   // Slogan Section Styling
//   .slogan-section {
//     background: linear-gradient(90deg, #ff9933, #ffffff, #138808);
//     color: white;
//     padding: 40px 20px;
//     margin-bottom: 30px;
//     border-radius: 15px;
//     text-align: center;
//     font-size: 2.5rem;
//     font-weight: bold;
//     text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
//   }

//   .vote-banner {
//     background: linear-gradient(120deg, #ff9933, #ffffff, #138808);
//     padding: 40px;
//     text-align: center;
//     color: #fff;
//     border-radius: 10px;
//     font-weight: bold;
//     box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
//   }

//   .vote-banner h2 {
//     font-size: 2rem;
//     margin-bottom: 15px;
//   }

//   .vote-banner .btn {
//     font-size: 1.2rem;
//     background-color: #d35400;
//     border: none;
//     padding: 12px 30px;
//     border-radius: 30px;
//   }

//   .vote-banner .btn:hover {
//     background-color: #e67e22;
//   }
//   .vote-banner {
//     text-align: left;
//     padding: 20px;
//   }

//   .slogan-heading {
//     font-size: 2.5rem;
//     color: #138808; /* Green color for the heading */
//     font-weight: bold;
//     margin-bottom: 20px;
//   }

//   .slogan-text {
//     font-size: 1.2rem;
//     line-height: 1.8;
//     color: #333;
//     max-width: 100%;
//   }

//   /* Media Queries for responsiveness */
//   @media (max-width: 768px) {
//     .slogan-heading {
//       font-size: 2rem;
//     }

//     .slogan-text {
//       font-size: 1rem;
//     }
//   }

//   @media (max-width: 576px) {
//     .slogan-heading {
//       font-size: 1.8rem;
//     }

//     .slogan-text {
//       font-size: 0.9rem;
//     }
//   }
// `;

// function Footer() {
//   return (
//     <FooterWrapper>
//       <div className="container">
//         <div className="row vote-banner">
//           <div className="col-md-12">
//             <h2>Vote for Mehraj Din Malik!</h2>
//             <p className="riz">
//               Your support will enable us to make these promises a reality.
//               Let's work together to build a prosperous and inclusive community.
//               Vote for Mehraj Malik for a better tomorrow!
//             </p>
//             <a href="#vote" className="btn btn-primary">
//               Join Now
//             </a>
//           </div>
//         </div>
//       </div>

//       <div className="container">
//         <div className="row">
//           <div className="col-md-4">
//             <div className="card">
//               <div className="card-body">
//                 <h5 className="slogan">Inqalab Inqalab Inqalab</h5>
//                 <p className="details">
//                   District Development Councillor #Kahara Constituency J&K.{" "}
//                   <br />
//                   First Elected Public Representative of #AAP
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="col-md-4">
//             <div className="card">
//               <div className="card-body contact-info">
//                 <p>
//                   <FontAwesomeIcon icon={faPhone} className="fa-icon" />
//                   099069 21559
//                 </p>
//                 <p>
//                   <FontAwesomeIcon icon={faEnvelope} className="fa-icon" />
//                   mehrajmalik198@gmail.com
//                 </p>
//                 <p className="location">
//                   <FontAwesomeIcon icon={faMapMarkerAlt} className="fa-icon" />
//                   Bhalessa, Jammu and Kashmir, India
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="col-md-4">
//             <div className="card">
//               <div className="card-body social-icons">
//                 <a
//                   href="https://www.facebook.com/your-profile"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <FontAwesomeIcon icon={faFacebook} />
//                 </a>
//                 <a
//                   href="https://www.instagram.com/your-profile"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <FontAwesomeIcon icon={faInstagram} />
//                 </a>
//                 <a
//                   href="https://en.wikipedia.org/wiki/your-profile"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <FontAwesomeIcon icon={faWikipediaW} />
//                 </a>
//                 <a
//                   href="https://www.youtube.com/your-profile"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <FontAwesomeIcon icon={faYoutube} />
//                 </a>
//                 <a
//                   href="https://wa.me/your-phone-number"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <FontAwesomeIcon icon={faWhatsapp} />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         <small>&copy; Mehraj Malik, 2024. All rights reserved.</small>
//         <div className="created-by">Created by Mohd Rizwan</div>
//       </div>
//     </FooterWrapper>
//   );
// }

// export default Footer;
import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import {
  faFacebook,
  faInstagram,
  faWikipediaW,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const FooterWrapper = styled.footer`
  background-color: cadetblue; /* Dark background */
  color: #ffffff; /* White text */
  padding: 1rem 0;
  text-align: left;

  .container {
    max-width: 1200px;
    margin: auto;
  }

  .card {
    background: transparent;
    border: none;
  }

  .social-icons {
    display: flex;
    gap: 15px;
    margin-bottom: 1rem;

    a {
      color: #ffffff;
      font-size: 1.5rem;
      transition: color 0.3s;

      &:hover {
        color: #ffd700; /* Hover effect in AAP yellow */
      }
    }
  }

  .contact-info {
    margin-bottom: 1rem;
    color: white;
  }

  .contact-info p {
    margin: 0.5rem 0;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
  }

  .fa-icon {
    margin-right: 8px;
  }

  .location {
    font-size: 1.1rem;
  }

  small,
  .created-by {
    display: block;
    margin-top: 1rem;
    font-size: 0.95rem;
    text-align: center;
    color: #dddddd;
  }

  .created-by {
    margin-top: 0.3rem;
    font-size: 0.9rem;
  }
  .card-body {
    color: white;
  }

  h1,
  h2 {
    text-align: center;
    color: #2c3e50;
  }

  .riz {
    color: #555;
    line-height: 1.7;
    text-align: left;
    font-size: 1.1rem;
  }

  // Slogan Section Styling
  .slogan-section {
    background: linear-gradient(90deg, #ff9933, #ffffff, #138808);
    color: white;
    padding: 40px 20px;
    margin-bottom: 30px;
    border-radius: 15px;
    text-align: center;
    font-size: 2.5rem;
    font-weight: bold;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  }

  .vote-banner {
    background: linear-gradient(120deg, #ff9933, #ffffff, #138808);
    padding: 40px;
    text-align: center;
    color: #fff;
    border-radius: 10px;
    font-weight: bold;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
  }

  .vote-banner h2 {
    font-size: 2rem;
    margin-bottom: 15px;
  }

  .vote-banner .btn {
    font-size: 1.2rem;
    background-color: #d35400;
    border: none;
    padding: 12px 30px;
    border-radius: 30px;
    // display: block; /* Center the button */
    // margin: 0 auto; /* Center the button */
  }

  .vote-banner .btn:hover {
    background-color: #e67e22;
  }

  .vote-banner {
    padding: 20px;
  }

  .slogan-heading {
    font-size: 2.5rem;
    color: #138808; /* Green color for the heading */
    font-weight: bold;
    margin-bottom: 20px;
  }

  .slogan-text {
    font-size: 1.2rem;
    line-height: 1.8;
    color: #333;
    max-width: 100%;
  }

  /* Media Queries for responsiveness */
  @media (max-width: 768px) {
    .slogan-heading {
      font-size: 2rem;
    }

    .slogan-text {
      font-size: 1rem;
    }
  }

  @media (max-width: 576px) {
    .slogan-heading {
      font-size: 1.8rem;
    }

    .slogan-text {
      font-size: 0.9rem;
    }
  }
`;

function Footer() {
  return (
    <FooterWrapper>
      <div className="container">
        <div className="row vote-banner">
          <div className="col-md-12">
            <h2>Vote for Mehraj Din Malik!</h2>
            <p className="riz">
              Your support will enable us to make these promises a reality.
              Let's work together to build a prosperous and inclusive community.
              Vote for Mehraj Malik for a better tomorrow!
            </p>
            <NavLink to="/join-now" className="btn btn-primary">
              Join Now
            </NavLink>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="slogan">Inqalab Inqalab Inqalab</h5>
                <p className="details">
                  District Development Councillor #Kahara Constituency J&K.{" "}
                  <br />
                  First Elected Public Representative of #AAP
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <div className="card-body contact-info">
                <p>
                  <FontAwesomeIcon icon={faPhone} className="fa-icon" />
                  99069 21559
                </p>
                <p>
                  <FontAwesomeIcon icon={faEnvelope} className="fa-icon" />
                  mehrajmalik198@gmail.com
                </p>
                <p className="location">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="fa-icon" />
                  Bhalessa, Jammu and Kashmir, India
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <div className="card-body social-icons">
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

        <small>&copy; Mehraj Malik, 2024. All rights reserved.</small>
        <div className="created-by">Created by Mohd Rizwan</div>
      </div>
    </FooterWrapper>
  );
}

export default Footer;
