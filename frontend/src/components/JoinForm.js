// // JoinForm.js
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import styled from "styled-components";

// const FormWrapper = styled.div`
//   padding: 20px;
//   background-color: #f0f8ff;
//   border-radius: 8px;
//   width: 50%;
//   margin: auto;
//   box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
// `;

// const FormButton = styled.button`
//   background-color: #d35400;
//   color: white;
//   padding: 10px 20px;
//   border: none;
//   border-radius: 5px;
//   margin-top: 10px;
//   cursor: pointer;

//   &:hover {
//     background-color: #e67e22;
//   }
// `;

// const JoinForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     address: "",
//     photo: "",
//   });
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     navigate("/card", { state: { formData } });
//   };

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData({
//       ...formData,
//       [name]: files ? URL.createObjectURL(files[0]) : value,
//     });
//   };

//   return (
//     <FormWrapper>
//       <h2>Join Now</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label className="form-label">Full Name</label>
//           <input
//             type="text"
//             className="form-control"
//             name="name"
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Address</label>
//           <input
//             type="text"
//             className="form-control"
//             name="address"
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Upload Photo</label>
//           <input
//             type="file"
//             className="form-control"
//             name="photo"
//             accept="image/*"
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <FormButton type="submit">Submit</FormButton>
//       </form>
//     </FormWrapper>
//   );
// };

// export default JoinForm;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const FormWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #74ebd5, #acb6e5);
  padding: 20px;
`;

const FormContainer = styled.div`
  background-color: #fff;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  max-width: 500px;
  width: 100%;
  text-align: center;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }

  h2 {
    margin-bottom: 20px;
    font-size: 2rem;
    color: #333;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }

  .form-label {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 5px;
    display: block;
    text-align: left;
    color: #555;
  }

  .form-control {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ddd;
    width: 100%;
    margin-bottom: 15px;
    transition: border-color 0.3s ease;

    &:focus {
      outline: none;
      border-color: #74b9ff;
      box-shadow: 0 0 5px rgba(116, 185, 255, 0.6);
    }
  }

  .mb-3 {
    text-align: left;
  }
`;

const FormButton = styled.button`
  background-color: #d35400;
  color: white;
  padding: 12px 25px;
  border: none;
  border-radius: 50px;
  margin-top: 15px;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: bold;
  letter-spacing: 1px;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #e67e22;
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(1px);
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
      <FormContainer>
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
      </FormContainer>
    </FormWrapper>
  );
};

export default JoinForm;
