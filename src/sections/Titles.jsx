import styled from "styled-components";
import { useStore } from "../store/useStore";
import { useEffect } from "react";
import { SingleTitle } from "../components/SingleTitle";

export const Titles = () => {
  const setTitleState = useStore((state) => state.setTitleState);
  const titles = useStore((state) => state.titles);
  const searchTerm = useStore((state) => state.searchTerm);
  const searchResults = useStore((state) => state.searchResults);

  useEffect(() => {
    setTitleState();
  }, [setTitleState]);

  return (
    <TitleSection>
      {searchTerm !== "" && searchResults.length === 0 ? (
        <TitleContainer>
          <NoTitles>No titles found based on search</NoTitles>
        </TitleContainer>
      ) : (
        <>
          {searchTerm !== ""
            ? searchResults.map((item) => (
                <TitleContainer key={item._id}>
                  <SingleTitle
                    title={item.title}
                    release={item.release_year}
                    time={item.duration}
                    type={item.type}
                  />
                </TitleContainer>
              ))
            : titles.map((item) => (
                <TitleContainer key={item._id}>
                  <SingleTitle
                    title={item.title}
                    release={item.release_year}
                    time={item.duration}
                    type={item.type}
                  />
                </TitleContainer>
              ))}
        </>
      )}
   </TitleSection> 
  );
};

const TitleSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 400px;


  @media (min-width: 668px) {
    width: 600px;
  }

`
const TitleContainer = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: #5d7458;
border-radius: 20px;
 

`;

const NoTitles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 400px;
  height: 100px;
  color: white;
  font-size: 20px;
`