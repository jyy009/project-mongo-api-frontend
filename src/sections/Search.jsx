import styled from "styled-components";
import { useStore } from "../store/useStore";

export const Search = () => {
  const {
    setError,
    setLoading,
    searchTerm,
    setSearchTerm,
    setSearchResults,
  } = useStore();

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(false);
    setSearchResults([]);

    try {
      const response = await fetch(
        `https://project-mongo-api-z0mw.onrender.com/titles?name=${searchTerm}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch titles");
      }

      const data = await response.json();
      console.log("filtered data:", data);
      setSearchResults(data);
      setSearchTerm(searchTerm);
      console.log("search term:", searchTerm);
    } catch (error) {
      console.error(error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SearchSection>
      <SearchForm onSubmit={handleSearch}>
        <SearchInput
          type="search"
          placeholder="search titles..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          required={true}
        />
        <SearchButton type="submit">Search</SearchButton>
      </SearchForm>
    </SearchSection>
  );
};

const SearchSection = styled.section`
display: flex;
justify-content: center;
padding: 10px;
margin-bottom: 20px;
`;

const SearchForm = styled.form`
display: flex;
`;

const SearchInput = styled.input`
border-radius: 5px;
border: none;
cursor: pointer;
padding: 10px;
padding-left: 10px;
font-weight: 700;
font-size: 18px;

`;

const SearchButton = styled.button`
flex-shrink: 0; 
cursor: pointer;
border-radius: 5px;
padding: 13px;
background-color: #6a8e6a;
color: white;
font-weight: 700;
font-size: 18px;
border: none;
margin-left: 5px;

&:hover {background-color: #1d431d}
`;
