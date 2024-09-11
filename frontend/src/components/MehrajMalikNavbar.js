// import React from "react";
// import { NavLink } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import styled, { keyframes } from "styled-components";
// import logo from "../mehraj_malik111.jpg"; // Update the correct path for the image

// // Animation for the Mehraj Malik text
// const fadeIn = keyframes`
//   from {
//     opacity: 0;
//     transform: translateX(-20px);
//   }
//   to {
//     opacity: 1;
//     transform: translateX(0);
//   }
// `;

// // Styled components
// const NavbarWrapper = styled.nav`
//   background-color: cadetblue;
//   padding: 1rem;

//   .navbar-brand {
//     display: flex;
//     align-items: center;
//     color: #fff;

//     img {
//       border-radius: 50%;
//       width: 50px;
//       height: 50px;
//       margin-right: 15px;
//     }

//     .brand-text {
//       font-family: monospace;
//       font-size: 1.8rem;
//       font-weight: bold;
//       animation: ${fadeIn} 1s ease-in-out;

//       &:hover {
//         color: #f8f9fa;
//         transition: color 0.3s ease;
//       }
//     }
//   }

//   .nav-link {
//     color: #fff;
//     font-size: 1.2rem;
//     margin-left: 20px;
//     transition: all 0.3s ease;

//     &:hover {
//       color: #f8f9fa;
//     }

//     &.active {
//       background-color: #005b6e;
//       border-radius: 5px;
//       padding: 0.5rem 1rem;
//     }
//   }

//   .navbar-toggler {
//     border: none;

//     .navbar-toggler-icon {
//       background-color: #fff;
//     }
//   }

//   .navbar-collapse {
//     justify-content: flex-end; /* This will push the nav items to the right */
//   }

//   @media (max-width: 768px) {
//     .navbar-nav {
//       justify-content: center;
//     }
//     .navbar-brand {
//       justify-content: center;
//     }
//   }
// `;

// function MehrajMalikNavbar() {
//   return (
//     <NavbarWrapper className="navbar navbar-expand-lg">
//       <NavLink className="navbar-brand" to="/">
//         <img src={logo} alt="Mehraj Malik Logo" />
//         <span className="brand-text">Mehraj Malik</span>
//       </NavLink>
//       <button
//         className="navbar-toggler"
//         type="button"
//         data-toggle="collapse"
//         data-target="#navbarNav"
//         aria-controls="navbarNav"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarNav">
//         <ul className="navbar-nav ml-auto">
//           {" "}
//           {/* Added ml-auto to push it to the right */}
//           <li className="nav-item">
//             <NavLink className="nav-link" exact to="/" activeClassName="active">
//               Home
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink
//               className="nav-link"
//               to="/aboutus"
//               activeClassName="active"
//             >
//               About
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink
//               className="nav-link"
//               to="/contact"
//               activeClassName="active"
//             >
//               Contact
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink
//               className="nav-link"
//               to="/AchievementsPage"
//               activeClassName="active"
//             >
//               Achievements
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink
//               className="nav-link"
//               to="/grievance"
//               activeClassName="active"
//             >
//               Grievance
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink
//               className="nav-link"
//               to="/InitiativesPage "
//               activeClassName="active"
//             >
//               Initiatives
//             </NavLink>
//           </li>
//         </ul>
//       </div>
//     </NavbarWrapper>
//   );
// }

// export default MehrajMalikNavbar;
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styled, { keyframes } from "styled-components";
import logo from "../mehraj_malik111.jpg"; // Update the correct path for the image

// Animation for the Mehraj Malik text
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

// Styled components
const NavbarWrapper = styled.nav`
  background-color: cadetblue;
  padding: 1rem;

  .navbar-brand {
    display: flex;
    align-items: center;
    color: #fff;

    img {
      border-radius: 50%;
      width: 50px;
      height: 50px;
      margin-right: 15px;
    }

    .brand-text {
      font-family: monospace;
      font-size: 1.8rem;
      font-weight: bold;
      animation: ${fadeIn} 1s ease-in-out;

      &:hover {
        color: #f8f9fa;
        transition: color 0.3s ease;
      }
    }
  }

  .nav-link {
    color: #fff;
    font-size: 1.2rem;
    margin-left: 20px;
    transition: all 0.3s ease;

    &:hover {
      color: #f8f9fa;
    }

    &.active {
      background-color: #005b6e;
      border-radius: 5px;
      padding: 0.5rem 1rem;
    }
  }

  .navbar-toggler {
    border: none;
    color: #fff;

    .navbar-toggler-icon {
      background-color: #fff;
    }
  }

  .navbar-collapse {
    justify-content: flex-end;
  }

  @media (max-width: 768px) {
    .navbar-nav {
      justify-content: center;
    }
    .navbar-brand {
      justify-content: center;
    }
  }
`;

function MehrajMalikNavbar() {
  // State to manage navbar toggle in mobile view
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Function to toggle the navbar
  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Function to close navbar after clicking a link in mobile view
  const closeNavbar = () => {
    setIsNavOpen(false);
  };

  return (
    <NavbarWrapper className="navbar navbar-expand-lg">
      <NavLink className="navbar-brand" to="/">
        <img src={logo} alt="Mehraj Malik Logo" />
        <span className="brand-text">Mehraj Malik</span>
      </NavLink>
      <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
        <span className="navbar-toggler-icon">☰</span>
      </button>
      <div
        className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
        id="navbarNav"
      >
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink
              className="nav-link"
              exact
              to="/"
              activeClassName="active"
              onClick={closeNavbar}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/aboutus"
              activeClassName="active"
              onClick={closeNavbar}
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/contact"
              activeClassName="active"
              onClick={closeNavbar}
            >
              Contact
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/AchievementsPage"
              activeClassName="active"
              onClick={closeNavbar}
            >
              Achievements
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/grievance"
              activeClassName="active"
              onClick={closeNavbar}
            >
              Grievance
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/InitiativesPage"
              activeClassName="active"
              onClick={closeNavbar}
            >
              Initiatives
            </NavLink>
          </li>
        </ul>
      </div>
    </NavbarWrapper>
  );
}

export default MehrajMalikNavbar;
