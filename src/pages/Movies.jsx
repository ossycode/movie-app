import MovieList from "../features/movies/MovieList";
import StyledHeading from "../styles/StyledHeading";

function movies() {
  return (
    <div>
      <StyledHeading as="h1">Movies</StyledHeading>
      <MovieList />
    </div>
  );
}

export default movies;
