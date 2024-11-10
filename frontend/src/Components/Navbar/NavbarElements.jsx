import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
    background: #8C1515;
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1200px) / 2); 
    z-index: 1000;
    position: fixed;
    top: 0px;


    @media screen and (max-width: 1024px) {
        padding: 0.5rem calc((100vw - 900px) / 2);
    }

    @media screen and (max-width: 768px) {
        padding: 0.5rem 1rem; 
    }

    @media screen and (max-width: 480px) {
        padding: 0.5rem 0.5rem; 
    }
`;

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        color: #15cdfc;
    }


    @media screen and (max-width: 1024px) {
        padding: 0 0.8rem; /* Adjust padding for laptops */
    }

    @media screen and (max-width: 768px) {
        padding: 0 0.5rem; /* Adjust padding for tablets */
    }

    @media screen and (max-width: 480px) {
        padding: 0 0.4rem; /* Adjust padding for smaller screens */
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #fff;

    @media screen and (max-width: 870px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }

    @media screen and (max-width: 480px) {
        font-size: 1.6rem; /* Adjust font size for smaller screens */
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin: auto;
    flex: 1;

    

    @media screen and (max-width: 1024px) {
        // margin-left: 100px; /* Adjust margin for laptops */
    }

    @media screen and (max-width: 870px) {
        display: none; 
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    gap: 10px;

    @media screen and (max-width: 1024px) {
        // margin-right: -30px; /* Adjust margin for laptops */
    }

    // @media screen and (max-width: 768px) {
    //     display: none; 
    // }

    @media screen and (max-width: 870px) {
        display: none; /* Hide NavBtn on tablets and smaller screens */
    }
`;

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #256ce1;
    padding: 10px 15px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

  

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }

    @media screen and (max-width: 1024px) {
        padding: 6px 6px;
        font-size: 13px; 
    }

    @media screen and (max-width: 892px) {
        padding: 4px 4px;
        font-size: 12px; 
    }

    @media screen and (max-width: 768px) {
        // padding: 8px 12px; 
    }

    @media screen and (max-width: 480px) {
        padding: 6px 12px; 
    }
`;


// export const StyledBurger = styled.div`
//   width: 2rem;
//   height: 2rem;
//   position: fixed;
//   top: 15px;
//   right: 20px;
//   z-index: 20;
//   display: none;

//   @media (max-width: 870px) {
//     display: flex;
//     justify-content: space-around;
//     flex-flow: column nowrap;
//   }

//   div {
//     width: 2rem;
//     height: 0.25rem;
//     background-color: ${({ open }) => (open ? "#ccc" : "#333")};
//     border-radius: 10px;
//     transform-origin: 1px;
//     transition: all 0.3s linear;

//     &:nth-child(1) {
//       transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
//     }

//     &:nth-child(2) {
//       transform: ${({ open }) =>
//         open ? "translateX(100%)" : "translateX(0)"};
//       opacity: ${({ open }) => (open ? 0 : 1)};
//     }

//     &:nth-child(3) {
//       transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
//     }
//   }
// `;