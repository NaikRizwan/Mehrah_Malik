import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

const GrievanceWrapper = styled.div`
  background-color: #f8f9fa;
  padding: 40px;

  .grievance-container {
    max-width: 800px;
    margin: 0 auto;
    background-color: #fff;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  }

  h1 {
    font-family: "Montserrat", sans-serif;
    font-size: 36px;
    font-weight: bold;
    color: #2c3e50;
    text-align: center;
    margin-bottom: 20px;
  }

  label {
    font-size: 16px;
    color: #34495e;
    margin-bottom: 5px;
  }

  .form-control {
    border-radius: 8px;
    font-size: 14px;
  }

  .textarea-grievance {
    height: 200px;
    resize: none;
  }

  button {
    background-color: #3498db;
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-top: 20px;
  }

  button:hover {
    background-color: #2980b9;
  }

  .alert {
    font-size: 14px;
    color: #2980b9;
  }
`;

const GrievanceForm = () => {
  return (
    <GrievanceWrapper>
      <div className="grievance-container">
        <h1>Submit Your Grievance</h1>
        <form action="https://formspree.io/f/mdknvkyj" method="post">
          <div className="form-group mb-3">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="Name"
              required
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              className="form-control"
              id="phone"
              name="Phone"
              required
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="Email"
              required
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              className="form-control"
              id="location"
              name="Location"
              required
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="grievanceType">Type of Grievance</label>
            <select
              className="form-control"
              id="grievanceType"
              name="GrievanceType"
              required
            >
              <option>Education</option>
              <option>Road</option>
              <option>Health</option>
              <option>Water Supply</option>
              <option>Electricity</option>
              <option>Other</option>
            </select>
          </div>

          <div className="form-group mb-3">
            <label htmlFor="grievance">Grievance Details</label>
            <textarea
              className="form-control textarea-grievance"
              id="grievance"
              name="Grievance"
              required
            ></textarea>
          </div>

          <button type="submit">Submit</button>

          <div className="alert mt-3">
            Your grievance will be addressed via email.
          </div>
        </form>
      </div>
    </GrievanceWrapper>
  );
};

export default GrievanceForm;
