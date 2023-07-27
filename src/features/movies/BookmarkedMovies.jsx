import { styled } from "styled-components";
import StyledHeading from "../../styles/StyledHeading";
import Spinner from "../../ui/Spinner";
import BookmarkedMoviesList from "./BookmarkedMoviesList";
import BookmarkedSeriesList from "./BookmarkedSeriesList";
import { useMovies } from "./useMovies";
import { useSearchParams } from "react-router-dom";
import Searched from "./Searched";
import StyledContainer from "../../styles/Styledcontainer";
import Header from "../../ui/Header";

const StyledDiv = styled.div`
  margin-top: 4rem;
`;

function BookmarkedMovies() {
  const { movies, isLoading } = useMovies();

  const [searchParams] = useSearchParams();

  const hasSearchParams = searchParams.has("search");

  if (hasSearchParams) return <Searched />;

  if (isLoading) return <Spinner />;

  return (
    <StyledContainer>
      <Header resourceName="Search for bookmarked shows" />
      <div>
        <StyledHeading as="h1">Bookmarked Movies</StyledHeading>
        <BookmarkedMoviesList movies={movies} />
      </div>

      <StyledDiv>
        <StyledHeading as="h1">Bookmarked TV Series</StyledHeading>
        <BookmarkedSeriesList movies={movies} />
      </StyledDiv>
    </StyledContainer>
  );
}

export default BookmarkedMovies;
