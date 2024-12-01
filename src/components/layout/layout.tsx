import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";

const LayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  main {
    flex: 1; /* Pushes the footer to the bottom */
  }
`;

const MainContent = styled.div<{ addPadding: boolean }>`
  padding-top: ${({ addPadding }) => (addPadding ? "70px" : "0")};
`;

export const Layout = (): JSX.Element => {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  return (
    <>
      <LayoutStyled>
        <Navbar />
        <main>
          <MainContent addPadding={!isLandingPage}>
            <Outlet />
          </MainContent>
        </main>
        <Banner
          image="https://cdn.mednebula.com/static/landing/PaPOG7OSz0rIb76J2ynfH1sAcJARy6I7zs2Le17AlZ5hwYvdp1l5lIrI0Vd3iUZX/LJMrhdbRrlT8bIKW.svg"
          buttonPosition="left"
          buttonText="CONTACTAR"
          message="¿Quieres más información?"
        />
        <Footer />
      </LayoutStyled>
    </>
  );
};

export default Layout;
