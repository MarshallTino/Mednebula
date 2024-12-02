import styled from "styled-components";

export const NavbarWrapper = styled.nav<{ $show: boolean }>`
  display: ${({ $show }) => ($show ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: #ffffff;
  z-index: 1000;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  border-bottom: 1px solid #e0e0e0;
  transition: transform 0.3s ease-in-out;

  .nav-links {
    display: flex;
    gap: 20px;

    a {
      text-decoration: none;
      color: #00253d;
      font-weight: bold;
      transition: color 0.3s;

      &:hover {
        color: #31a467;
      }
    }
  }

  .logo {
    height: 50px;
  }

  @media (max-width: 768px) {
    .nav-links {
      display: none; // Hide desktop nav links on mobile
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
