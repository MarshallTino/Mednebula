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


export const Layout = (): JSX.Element => {

  return (
    <>
      <LayoutStyled>
        <Navbar />
        <main>
            <Outlet />
        </main>

        <Footer />
      </LayoutStyled>
    </>
  );
};

export default Layout;
