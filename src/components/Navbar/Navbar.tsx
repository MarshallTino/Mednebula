import React, { useEffect, useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link, useLocation } from "react-router-dom";
import { NavbarWrapper, BurgerMenuWrapper } from "./NavbarStyled";

const Navbar: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const isLandingPage = location.pathname === "/";
    if (isLandingPage) {
      const handleScroll = () => {
        // Show the navbar after scrolling 100 pixels on the landing page
        setShowNavbar(window.scrollY > 100);
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      // Ensure the navbar is always shown if it's not the landing page
      setShowNavbar(true);
    }
  }, [location]);

  useEffect(() => {
    // Scroll to the top whenever the location changes
    window.scrollTo(0, 0);
    setIsMenuOpen(false); // Close the burger menu on route change
  }, [location]);

  return (
    <>
      <NavbarWrapper show={showNavbar}>
        {/* Logo */}
        <Link to="/">
          <img src="/logofullcolor.svg" alt="MedNebula logo" className="logo" />
        </Link>

        {/* Desktop Links */}
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/servicios">Servicios</Link>
          <Link to="/foro">Foro</Link>
          <Link to="/contacto">Contacto</Link>
        </div>
      </NavbarWrapper>

      {/* Render Burger Menu Only on Mobile */}
      {window.innerWidth <= 768 && (
        <BurgerMenuWrapper>
          <Menu
            right
            isOpen={isMenuOpen}
            onStateChange={({ isOpen }) => setIsMenuOpen(isOpen)}
            disableCloseOnEsc={false} // Ensure menu closes properly on interactions
          >
            <Link
              to="/"
              className="bm-item"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/servicios"
              className="bm-item"
              onClick={() => setIsMenuOpen(false)}
            >
              Servicios
            </Link>
            <Link
              to="/foro"
              className="bm-item"
              onClick={() => setIsMenuOpen(false)}
            >
              Foro
            </Link>
            <Link
              to="/contacto"
              className="bm-item"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
          </Menu>
        </BurgerMenuWrapper>
      )}
    </>
  );
};

export default Navbar;
