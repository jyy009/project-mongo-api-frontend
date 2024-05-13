import { Navbar } from "./Navbar";
import { Titles } from "./Titles";
import { Search } from "../sections/Search";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const Home = () => {
  return (
    <>
      <GlobalStyle />
      <Main>
        <Navbar />
        <Search />
        <Titles />
      </Main>
    </>
  );
};

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  list-style: none;
}

body {
  font-family: "Montserrat", sans-serif;
}
`;

const Main = styled.section`
  background-color: #e7e6e6;
  display: flex;
  flex-direction: column;
  align-items: center;

`;
