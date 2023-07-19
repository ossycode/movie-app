import { useSearch } from "./useSearch";
import Spinner from "../../ui/Spinner";
import StyledMovieGrid from "../../styles/StyledMovieGrid";
import StyledMovieCardDiv from "../../styles/StyledMovieCardDiv";
import Movie from "./Movie";
import BookmarkBtn from "../../ui/BookmarkBtn";
import MovieInfoContainer from "../../ui/MovieInfoContainer";
import Empty from "../../ui/Empty";
import StyledHeading from "../../styles/StyledHeading";

function Searched() {
  const { isSearching, searchedMovies } = useSearch();

  if (isSearching) return <Spinner />;

  const numberofMoviesFound = searchedMovies.length;
  if (numberofMoviesFound < 1) return <Empty resourceName="movies" />;

  return (
    <>
      <StyledHeading as="h1">
        {numberofMoviesFound}{" "}
        {numberofMoviesFound > 1 ? "Movies found" : "Movie found"}{" "}
      </StyledHeading>
      <StyledMovieGrid>
        {searchedMovies.map((movie, index) => (
          <StyledMovieCardDiv key={movie.title}>
            <Movie
              movie={movie}
              imgType={movie.thumbnail.regular.large}
              divType="recommended"
            >
              <BookmarkBtn movie={movie} index={index} />
            </Movie>
            <MovieInfoContainer movie={movie} headingType="h4" />
          </StyledMovieCardDiv>
        ))}
      </StyledMovieGrid>
    </>
  );
}

export default Searched;
