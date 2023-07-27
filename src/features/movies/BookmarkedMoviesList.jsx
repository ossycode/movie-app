import Movie from "./Movie";
import StyledMovieGrid from "../../styles/StyledMovieGrid";
import BookmarkBtn from "../../ui/BookmarkBtn";
import Empty from "../../ui/Empty";

// import { useMovies } from "../../context/MoviesContext";
import StyledMovieCardDiv from "../../styles/StyledMovieCardDiv";
import MovieInfoContainer from "../../ui/MovieInfoContainer";
import { useScreenSize } from "../../hooks/useScreenSize";

function BookmarkedMoviesList({ movies }) {
  const { matches } = useScreenSize();

  const moviesList = movies.filter(
    (movie) => movie.category === "Movie" && movie.isBookmarked === true
  );

  if (moviesList.length === 0) return <Empty resourceName="movies" />;
  return (
    <StyledMovieGrid>
      {moviesList.map((movie) => (
        <StyledMovieCardDiv key={movie.title}>
          <Movie
            movie={movie}
            imgType={movie.thumbnail.regular[matches]}
            divType="recommended"
          >
            <BookmarkBtn movie={movie} />
          </Movie>
          <MovieInfoContainer movie={movie} headingType="h4" />
        </StyledMovieCardDiv>
      ))}
    </StyledMovieGrid>
  );
}

export default BookmarkedMoviesList;
