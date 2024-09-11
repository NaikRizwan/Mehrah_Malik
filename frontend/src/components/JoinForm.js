// JoinForm.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const FormWrapper = styled.div`
  padding: 20px;
  background-color: #f0f8ff;
  border-radius: 8px;
  width: 50%;
  margin: auto;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const FormButton = styled.button`
  background-color: #d35400;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    background-color: #e67e22;
  }
`;

const JoinForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    photo: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/card", { state: { formData } });
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? URL.createObjectURL(files[0]) : value,
    });
  };

  return (
    <FormWrapper>
      <h2>Join Now</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            name="address"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Upload Photo</label>
          <input
            type="file"
            className="form-control"
            name="photo"
            accept="image/*"
            onChange={handleChange}
            required
          />
        </div>
        <FormButton type="submit">Submit</FormButton>
      </form>
    </FormWrapper>
  );
};

export default JoinForm;
