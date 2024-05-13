import styled from "styled-components";
// import { useStore } from "../store/useStore";

export const SingleTitle = ({ title, release, time, type }) => {
  // const titles = useStore((state) => state.titles);

  return (
    <div>
        <TitleDetails>
          <Name>Title: {title}</Name>
          <Release>{release}</Release>
          <Time>{time}</Time>
          <Type>{type}</Type>
        </TitleDetails>
    </div>
  );
};

const TitleDetails = styled.div`
display: flex;
flex-direction: column;
color: white;
padding: 10px 0;
font-size: 18px;
`;
const Name = styled.p`
font-weight: 600`;

const Release = styled.p``;
const Time = styled.p``;
const Type = styled.p``;
