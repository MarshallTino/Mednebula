import styled, { keyframes } from "styled-components";

// Subtle fade-in animation for navbar
const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Line animation for navbar links
const navLinkAnimation = keyframes`
  0% {
    width: 0%;
    left: 50%;
  }
  100% {
    width: 80%;
    left: 10%;
  }
`;

export const NavbarWrapper = styled.nav<{ $show: boolean }>`
  display: ${({ $show }) => ($show ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  z-index: 1000;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  box-shadow: ${props => props.theme.shadows.small};
  transition: all 0.3s ease-in-out;
  animation: ${fadeInDown} 0.5s ease-out;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(to right, ${props => props.theme.colors.base}, ${props => props.theme.colors.accent});
  }

  .nav-links {
    display: flex;
    gap: 30px;
    margin-right: 20px;

    a {
      text-decoration: none;
      color: ${props => props.theme.colors.gray800};
      font-weight: 600;
      position: relative;
      padding: 5px 0;
      font-size: 1rem;
      letter-spacing: 0.5px;
      transition: all 0.3s ease;
      
      &:hover {
        color: ${props => props.theme.colors.accent};
        
        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 10%;
          width: 80%;
          height: 2px;
          background: linear-gradient(to right, ${props => props.theme.colors.base}, ${props => props.theme.colors.accent});
          animation: ${navLinkAnimation} 0.3s ease forwards;
        }
      }
    }
  }

  .logo {
    height: 50px;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.05);
    }
  }

  @media (max-width: 768px) {
    height: 60px;
    padding: 0 20px;
    
    .nav-links {
      display: none; // Hide desktop nav links on mobile
    }
    
    .logo {
      height: 40px;
    }
  }
`;

export const BurgerMenuWrapper = styled.div`
  @media (max-width: 768px) {
    .bm-burger-button {
      position: fixed;
      width: 30px;
      height: 24px;
      right: 20px;
      top: 18px;
      transition: all 0.3s ease;
      
      &:hover {
        transform: scale(1.1);
      }
    }
    
    /* Color/shape of burger icon bars */
    .bm-burger-bars {
      background: ${props => props.theme.colors.mainDark};
      height: 3px !important;
      border-radius: 3px;
      transition: all 0.3s ease;
    }

    /* Position and sizing of clickable cross button */
    .bm-cross-button {
      height: 24px;
      width: 24px;
      right: 20px !important;
      top: 20px !important;
    }

    /* Color/shape of close button cross */
    .bm-cross {
      background: ${props => props.theme.colors.accent};
      height: 20px !important;
    }

    /* General sidebar styles */
    .bm-menu {
      background: linear-gradient(145deg, ${props => props.theme.colors.mainDark}, ${props => props.theme.colors.gray900});
      padding: 2.5em 1.5em 0;
      font-size: 1.15em;
      box-shadow: ${props => props.theme.shadows.large};
      border-radius: ${props => props.theme.borderRadius.medium} 0 0 ${props => props.theme.borderRadius.medium};
    }

    /* Wrapper for item list */
    .bm-item-list {
      color: ${props => props.theme.colors.mainLight};
      padding: 0.8em;
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    /* Individual item */
    .bm-item {
      display: inline-block;
      color: ${props => props.theme.colors.mainLight};
      text-decoration: none;
      font-weight: 600;
      padding: 12px 5px;
      position: relative;
      letter-spacing: 0.5px;
      transition: all 0.3s ease;
      border-bottom: 1px solid rgba(255,255,255,0.1);
      
      &:hover {
        color: ${props => props.theme.colors.accent};
        background: rgba(255,255,255,0.05);
        border-radius: ${props => props.theme.borderRadius.small};
        padding-left: 10px;
      }
    }

    /* Styling of overlay */
    .bm-overlay {
      background: rgba(0, 0, 0, 0.7) !important;
      backdrop-filter: blur(3px);
    }
    
    /* Morph burger into cross */
    .bm-burger-button.cross .bm-burger-bars {
      background-color: ${props => props.theme.colors.accent};
    }
      top: 20px;
    }

    .bm-burger-bars {
      background: #0071bc;
    }

    .bm-burger-bars-hover {
      background: #31a467;
    }

    .bm-menu {
      background: #ffffff;
      height: 100vh; /* Ensure the menu covers full height */
      padding: 2.5em 1.5em 0;
      font-size: 1.2em;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .bm-item {
      display: block;
      text-align: left;
      padding: 10px 0;
      color: #00253d;
      font-size: 1.2rem;
      font-weight: bold;
      text-decoration: none;

      &:hover {
        color: #31a467;
      }
    }

    .bm-overlay {
      background: rgba(0, 0, 0, 0.3);
    }
  }
`;
