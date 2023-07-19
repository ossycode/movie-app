import Movie from "./Movie";
import MovieInfoContainer from "../../ui/MovieInfoContainer";
import StyledMovieCardDiv from "../../styles/StyledMovieCardDiv";
import BookmarkBtn from "../../ui/BookmarkBtn";
import StyledMovieGrid from "../../styles/StyledMovieGrid";
import { useMovies } from "./useMovies";
import Spinner from "../../ui/Spinner";

function MovieList() {
  const { movies, isLoading } = useMovies();

  if (isLoading) return <Spinner />;

  const movieData = movies.filter((movie) => movie.category === "Movie");

  return (
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
  );
}

export default MovieList;
