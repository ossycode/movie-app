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
import { useScreenSize } from "../../hooks/useScreenSize";
import StyledContainer from "../../styles/Styledcontainer";
import Header from "../../ui/Header";

function MovieList() {
  const { movies, isLoading } = useMovies();

  const [searchParams] = useSearchParams();

  const hasSearchParams = searchParams.has("search");

  const { matches } = useScreenSize();

  if (hasSearchParams) return <Searched />;

  if (isLoading) return <Spinner />;

  const movieData = movies.filter((movie) => movie.category === "Movie");

  return (
    <StyledContainer>
      <Header resourceName="Search for movies" />
      <StyledHeading as="h1">Movies</StyledHeading>
      <StyledMovieGrid>
        {movieData.map((movie, index) => (
          <StyledMovieCardDiv key={movie.title}>
            <Movie
              movie={movie}
              // imgType = {`${movie.thumbnail.regular.matches}`}
              imgType={movie.thumbnail.regular[matches]}
              divType="recommended"
            >
              <BookmarkBtn movie={movie} index={index} />
            </Movie>
            <MovieInfoContainer movie={movie} headingType="h4" />
          </StyledMovieCardDiv>
        ))}
      </StyledMovieGrid>
    </StyledContainer>
  );
}

export default MovieList;
