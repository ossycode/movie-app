import { styled } from "styled-components";
import StyledHeading from "../../styles/StyledHeading";
import Spinner from "../../ui/Spinner";
import BookmarkedMoviesList from "./BookmarkedMoviesList";
import BookmarkedSeriesList from "./BookmarkedSeriesList";
import { useMovies } from "./useMovies";
import { useSearchParams } from "react-router-dom";
import Searched from "./Searched";

const StyledContainer = styled.div`
  margin-top: 4rem;
`;

function BookmarkedMovies() {
  const { movies, isLoading } = useMovies();

  const [searchParams] = useSearchParams();

  const hasSearchParams = searchParams.has("search");

  if (hasSearchParams) return <Searched />;

  if (isLoading) return <Spinner />;

  return (
    <>
      <div>
        <StyledHeading as="h1">Bookmarked Movies</StyledHeading>
        <BookmarkedMoviesList movies={movies} />
      </div>

      <StyledContainer>
        <StyledHeading as="h1">Bookmarked TV Series</StyledHeading>
        <BookmarkedSeriesList movies={movies} />
      </StyledContainer>
    </>
  );
}

export default BookmarkedMovies;
