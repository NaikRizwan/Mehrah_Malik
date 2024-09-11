// // import React, { useRef } from "react";
// // import { useLocation } from "react-router-dom"; // Import useLocation
// // import styled from "styled-components";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import {
// //   faUser,
// //   faCalendarAlt,
// //   faAsterisk,
// // } from "@fortawesome/free-solid-svg-icons";
// // import domtoimage from "dom-to-image"; // Import the library

// // const CardWrapper = styled.div`
// //   width: 100%;
// //   height: 100vh; /* Full viewport height */
// //   display: flex;
// //   justify-content: center;
// //   align-items: center;
// //   background-color: #f4f4f4;
// // `;

// // const CardContainer = styled.div`
// //   background: #fff;
// //   border-radius: 15px;
// //   box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
// //   padding: 2rem;
// //   text-align: center;
// //   width: 350px;
// //   max-width: 100%;
// //   position: relative;
// //   min-height: 90vh; /* Adjust height to make it full and attractive */
// // `;

// // const Header = styled.h1`
// //   font-size: 2rem;
// //   color: #138808; /* Aam Aadmi Party color */
// //   text-transform: uppercase;
// //   display: flex;
// //   align-items: center;
// //   justify-content: center;
// //   gap: 0.5rem;
// //   margin-bottom: 1.5rem;

// //   svg {
// //     color: #138808; /* Icon color */
// //   }
// // `;

// // const Slogan = styled.p`
// //   font-size: 1.5rem;
// //   font-weight: bold;
// //   color: #333;
// //   text-align: center;
// //   margin-bottom: 1.5rem;
// //   text-transform: uppercase;
// //   letter-spacing: 1px;
// // `;

// // const UserInfo = styled.div`
// //   margin-bottom: 1.5rem;

// //   p {
// //     font-size: 1.1rem;
// //     margin: 0.5rem 0;
// //     display: flex;
// //     align-items: center;
// //     gap: 0.5rem;

// //     svg {
// //       color: #138808; /* Icon color */
// //     }
// //   }
// // `;

// // const FooterText = styled.div`
// //   font-size: 0.9rem;
// //   color: #555;
// //   text-align: center;
// //   margin-top: 1.5rem;
// // `;

// // const DownloadButton = styled.button`
// //   background-color: #138808;
// //   color: #fff;
// //   border: none;
// //   padding: 10px 20px;
// //   border-radius: 5px;
// //   cursor: pointer;
// //   font-size: 1rem;
// //   margin-top: 1.5rem;
// //   transition: background-color 0.3s;

// //   &:hover {
// //     background-color: #0f6b06;
// //   }
// // `;

// // function UserCard() {
// //   const cardRef = useRef();
// //   const { state } = useLocation(); // Access the state object
// //   const user = state?.formData || {}; // Get user data from state

// //   // Handle the download functionality
// //   const handleDownload = () => {
// //     domtoimage
// //       .toPng(cardRef.current)
// //       .then(function (dataUrl) {
// //         const link = document.createElement("a");
// //         link.download = "user-card.png";
// //         link.href = dataUrl;
// //         link.click();
// //       })
// //       .catch(function (error) {
// //         console.error("Error downloading card:", error);
// //       });
// //   };

// //   const currentDate = new Date().toLocaleDateString();

// //   return (
// //     <CardWrapper>
// //       <CardContainer ref={cardRef}>
// //         <Header>Aam Aadmi Party</Header>

// //         <Slogan>Inqalab Inqalab Inqalab</Slogan>

// //         <UserInfo>
// //           <p>
// //             <FontAwesomeIcon icon={faUser} /> {user.name}
// //           </p>
// //           <p>
// //             <FontAwesomeIcon icon={faCalendarAlt} /> {currentDate}
// //           </p>
// //           <p>
// //             <FontAwesomeIcon icon={faAsterisk} /> Joined with the help of Mehraj
// //             Malik
// //           </p>
// //         </UserInfo>

// //         <FooterText>
// //           Together, we stand with Aam Aadmi Party for a brighter future!
// //         </FooterText>

// //         <DownloadButton onClick={handleDownload}>Download Card</DownloadButton>
// //       </CardContainer>
// //     </CardWrapper>
// //   );
// // }

// // export default UserCard;
// import React, { useRef } from "react";
// import { useLocation } from "react-router-dom"; // Import useLocation
// import styled from "styled-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faUser,
//   faCalendarAlt,
//   faAsterisk,
// } from "@fortawesome/free-solid-svg-icons";
// import domtoimage from "dom-to-image"; // Import the library

// const CardWrapper = styled.div`
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background: linear-gradient(135deg, #74ebd5, #acb6e5);
// `;

// const CardContainer = styled.div`
//   background: #fff;
//   border-radius: 15px;
//   box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);
//   padding: 2rem;
//   text-align: center;
//   width: 350px;
//   max-width: 100%;
//   position: relative;
//   min-height: 90vh; /* Adjust height to make it full and attractive */
//   transition: transform 0.3s ease-in-out;

//   &:hover {
//     transform: scale(1.05);
//   }
// `;

// const Header = styled.h1`
//   font-size: 2.5rem;
//   color: #138808; /* Aam Aadmi Party color */
//   text-transform: uppercase;
//   font-family: "Monospace", sans-serif;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 0.5rem;
//   margin-bottom: 1.5rem;

//   svg {
//     color: #138808; /* Icon color */
//   }
// `;

// const Slogan = styled.p`
//   font-size: 1.7rem;
//   font-weight: bold;
//   font-family: "Monospace", sans-serif;
//   color: #138808;
//   text-align: center;
//   margin-bottom: 1.5rem;
//   text-transform: uppercase;
//   letter-spacing: 1.5px;
//   text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
// `;

// const UserInfo = styled.div`
//   margin-bottom: 1.5rem;

//   p {
//     font-size: 1.3rem;
//     font-family: "Monospace", sans-serif;
//     margin: 0.5rem 0;
//     display: flex;
//     align-items: center;
//     gap: 0.5rem;
//     color: #555;

//     svg {
//       color: #138808; /* Icon color */
//       font-size: 1.2rem;
//     }
//   }
// `;

// const FooterText = styled.div`
//   font-size: 1rem;
//   color: #333;
//   text-align: center;
//   margin-top: 1.5rem;
//   font-family: "Monospace", sans-serif;
// `;

// const DownloadButton = styled.button`
//   background-color: #138808;
//   color: #fff;
//   border: none;
//   padding: 12px 30px;
//   border-radius: 50px;
//   cursor: pointer;
//   font-size: 1.2rem;
//   font-family: "Monospace", sans-serif;
//   font-weight: bold;
//   margin-top: 1.5rem;
//   transition: background-color 0.3s, transform 0.3s;
//   text-transform: uppercase;

//   &:hover {
//     background-color: #0f6b06;
//     transform: translateY(-5px);
//   }

//   &:active {
//     transform: translateY(2px);
//   }
// `;

// function UserCard() {
//   const cardRef = useRef();
//   const { state } = useLocation(); // Access the state object
//   const user = state?.formData || {}; // Get user data from state

//   // Handle the download functionality
//   const handleDownload = () => {
//     domtoimage
//       .toPng(cardRef.current)
//       .then(function (dataUrl) {
//         const link = document.createElement("a");
//         link.download = "user-card.png";
//         link.href = dataUrl;
//         link.click();
//       })
//       .catch(function (error) {
//         console.error("Error downloading card:", error);
//       });
//   };

//   const currentDate = new Date().toLocaleDateString();

//   return (
//     <CardWrapper>
//       <CardContainer ref={cardRef}>
//         <Header>
//           <FontAwesomeIcon icon={faAsterisk} />
//           Aam Aadmi Party
//         </Header>

//         <Slogan>Inqalab Inqalab Inqalab</Slogan>

//         <UserInfo>
//           <p>
//             <FontAwesomeIcon icon={faUser} /> {user.name}
//           </p>
//           <p>
//             <FontAwesomeIcon icon={faCalendarAlt} /> {currentDate}
//           </p>
//           <p>
//             <FontAwesomeIcon icon={faAsterisk} /> Joined with the help of Mehraj
//             Malik
//           </p>
//         </UserInfo>

//         <FooterText>
//           Together, we stand with Aam Aadmi Party for a brighter future!
//         </FooterText>

//         <DownloadButton onClick={handleDownload}>Download Card</DownloadButton>
//       </CardContainer>
//     </CardWrapper>
//   );
// }

// export default UserCard;
import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCalendarAlt,
  faAsterisk,
} from "@fortawesome/free-solid-svg-icons";
import domtoimage from "dom-to-image";

const CardWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #74ebd5 0%, #9face6 100%);
`;

const CardContainer = styled.div`
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  text-align: center;
  width: 450px;
  max-width: 100%;
  position: relative;
  min-height: 70vh;
  font-family: "Monospace", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Header = styled.h1`
  font-size: 1.8rem;
  color: #138808;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
`;

const UserImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto 1.5rem;
  border: 4px solid #138808;
`;

const Slogan = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const UserInfo = styled.div`
  p {
    font-size: 1.1rem;
    margin: 0.5rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    svg {
      color: #138808;
    }
  }
`;

const FooterText = styled.div`
  font-size: 0.9rem;
  color: #555;
  margin-top: 1.5rem;
`;

const DownloadButton = styled.button`
  background-color: #138808;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1.5rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0f6b06;
  }
`;

function UserCard() {
  const cardRef = useRef();
  const { state } = useLocation();
  const user = state?.formData || {};

  const handleDownload = () => {
    domtoimage
      .toPng(cardRef.current)
      .then(function (dataUrl) {
        const link = document.createElement("a");
        link.download = "user-card.png";
        link.href = dataUrl;
        link.click();
      })
      .catch(function (error) {
        console.error("Error downloading card:", error);
      });
  };

  const currentDate = new Date().toLocaleDateString();

  return (
    <CardWrapper>
      <CardContainer ref={cardRef}>
        <Header>Aam Aadmi Party</Header>
        {user.photo && <UserImage src={user.photo} alt="User Photo" />}
        <Slogan>Inqalab Inqalab Inqalab</Slogan>

        <UserInfo>
          <p>
            <FontAwesomeIcon icon={faUser} /> {user.name}
          </p>
          <p>
            <FontAwesomeIcon icon={faCalendarAlt} /> {currentDate}
          </p>
          <p>
            <FontAwesomeIcon icon={faAsterisk} /> Joined with the help of Mehraj
            Malik
          </p>
        </UserInfo>

        <FooterText>
          Together, we stand with Aam Aadmi Party for a brighter future!
        </FooterText>

        <DownloadButton onClick={handleDownload}>Download Card</DownloadButton>
      </CardContainer>
    </CardWrapper>
  );
}

export default UserCard;
