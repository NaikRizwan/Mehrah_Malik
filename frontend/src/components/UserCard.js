import React, { useRef } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCalendarAlt,
  faAsterisk,
} from "@fortawesome/free-solid-svg-icons";
import domtoimage from "dom-to-image"; // Import the library

const CardWrapper = styled.div`
  width: 100%;
  height: 100vh; /* Full viewport height */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f4;
`;

const CardContainer = styled.div`
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  text-align: center;
  width: 350px;
  max-width: 100%;
  position: relative;
  min-height: 90vh; /* Adjust height to make it full and attractive */
`;

const Header = styled.h1`
  font-size: 2rem;
  color: #138808; /* Aam Aadmi Party color */
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;

  svg {
    color: #138808; /* Icon color */
  }
`;

const Slogan = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const UserInfo = styled.div`
  margin-bottom: 1.5rem;

  p {
    font-size: 1.1rem;
    margin: 0.5rem 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      color: #138808; /* Icon color */
    }
  }
`;

const FooterText = styled.div`
  font-size: 0.9rem;
  color: #555;
  text-align: center;
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
  const { state } = useLocation(); // Access the state object
  const user = state?.formData || {}; // Get user data from state

  // Handle the download functionality
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
