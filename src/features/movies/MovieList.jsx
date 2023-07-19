import Movie from "./Movie";
import MovieInfoContainer from "../../ui/MovieInfoContainer";
import StyledMovieCardDiv from "../../styles/StyledMovieCardDiv";
import BookmarkBtn from "../../ui/BookmarkBtn";
import StyledMovieGrid from "../../styles/StyledMovieGrid";
import { useMovies } from "./useMovies";
import Spinner from "../../ui/Spinner";
import { useSearchParams } from "react-router-dom";
import Searched from "./Searched";
import StyledHeading from "../../styles/StyledHeading";

function MovieList() {
  const { movies, isLoading } = useMovies();

  const [searchParams] = useSearchParams();

  const hasSearchParams = searchParams.has("search");

  if (hasSearchParams) return <Searched />;

  if (isLoading) return <Spinner />;

  const movieData = movies.filter((movie) => movie.category === "Movie");

  return (
    <>
      <StyledHeading as="h1">Movies</StyledHeading>
      <StyledMovieGrid>
        {movieData.map((movie, index) => (
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

export default MovieList;
