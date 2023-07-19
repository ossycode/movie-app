import MovieInfoContainer from "../../ui/MovieInfoContainer";
import BookmarkBtn from "../../ui/BookmarkBtn";
import Movie from "./Movie";
import StyledMovieCardDiv from "../../styles/StyledMovieCardDiv";
import StyledMovieGrid from "../../styles/StyledMovieGrid";
import Spinner from "../../ui/Spinner";
import { useMovies } from "./useMovies";

function SeriesList() {
  const { movies, isLoading } = useMovies();

  if (isLoading) return <Spinner />;

  const series = movies.filter((movie) => movie.category === "TV Series");

  return (
    <StyledMovieGrid>
      {series.map((movie, index) => (
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

export default SeriesList;
