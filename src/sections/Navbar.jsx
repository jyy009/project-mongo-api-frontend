import styled from "styled-components";

export const Navbar = () => {
  return (
    <StyledSection>
      <Header>Netflix Titles</Header>
    </StyledSection>
  );
};

const StyledSection = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const Header = styled.h2`
  font-size: 40px;

  @media (min-width: 668px) {
    font-size: 50px;
  }
`;
