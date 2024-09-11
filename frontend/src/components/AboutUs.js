import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

// Custom CSS for styling
const PageWrapper = styled.div`
  background-color: #f8f9fa;
  padding: 30px;

  h1,
  h2 {
    text-align: center;
    color: #2c3e50;
  }

  p {
    color: #555;
    line-height: 1.7;
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
  }

  .vote-banner .btn:hover {
    background-color: #e67e22;
  }

  .vote-banner {
    text-align: left;
    padding: 20px;
  }

  .slogan-heading {
    font-size: 2.5rem;
    color: #138808; /* Green color for the heading */
    font-weight: bold;
    font-family: monospace;
    margin-bottom: 20px;
  }

  .slogan-text {
    font-size: 1.2rem;
    line-height: 1.8;
    font-family: monospace;
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

function AboutUs() {
  return (
    <PageWrapper>
      <div className="container">
        {/* Introduction Section */}
        <div className="row">
          <div className="col-md-12 text-center">
            <h1>About Mehraj Din Malik</h1>
            <hr className="mb-5" />
            <p>
              Mehraj Din Malik (born in 1988) is an Indian politician and Aam
              Aadmi Party leader from Jammu and Kashmir. He was the AAP's first
              and only winning candidate in J&K as of 2022. He is an elected
              District Development Council (DDC) Councilor from the Kahara
              constituency. On 17 October 2022, the Aam Aadmi Party appointed
              him as co-chairman of the J&K State Coordination Committee.
            </p>
          </div>
        </div>

        {/* Career Section */}
        <div className="row">
          <div className="col-md-12">
            <h2>Career</h2>
            <p>
              Mehraj Malik began his political career after joining the AAP in
              2013 and running as an Independent Candidate in the 2014 Assembly
              elections. In 2020, he won DDC polls as an independent candidate
              with a margin of 3511 votes and was elected as a DDC Councillor
              for the Kahara constituency. Mehraj Malik has made a significant
              impact on his constituency, especially with his contributions to
              raising the slogan "Inquilab Zindabad" in Jammu and Kashmir.
            </p>
            <p>
              Another popular slogan, "Majja Majja Raj Karega" (transl. Mehraj
              will rule), is raised at every rally organized by Mehraj Malik.
              His deep connection with the people of his constituency, combined
              with his relentless efforts for change, makes him a powerful
              political leader in Jammu and Kashmir.
            </p>
          </div>
        </div>

        {/* Education Section */}
        <div className="row">
          <div className="col-md-12">
            <h2>Education</h2>
            <p>
              Mehraj Malik pursued his higher education at the University of
              Jammu, where he completed his M.A. in Political Science and later
              earned a B.Ed degree. His academic background in political science
              has helped shape his understanding of governance, public service,
              and social justice, which he applies to his political career.
            </p>
          </div>
        </div>

        {/* Slogan Section */}
        <div className="row vote-banner">
          <div className="col-md-12">
            <h2 className="slogan-heading">"Inqalab Inqalab Inqalab"</h2>
            <p className="slogan-text">
              The powerful slogan "Inqalab Inqalab Inqalab" has become the
              rallying cry of Mehraj Malik's movement, resonating with the hopes
              and aspirations of the youth across Jammu and Kashmir. With its
              roots in the historic struggles for freedom and justice, Mehraj
              Malik has redefined this slogan to symbolize a new era of change,
              empowerment, and progress for his people. His unwavering
              dedication to the cause of social justice, development, and
              equality has inspired countless young voters to stand firmly
              behind him, recognizing him as the true voice of the people. This
              slogan now echoes through every rally and gathering, a symbol of
              revolution, hope, and a better future under his leadership.
              Together with the youth, Mehraj Malik is leading the charge toward
              a brighter tomorrow.
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

export default AboutUs;
