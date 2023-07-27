import MovieInfoContainer from "../../ui/MovieInfoContainer";
import BookmarkBtn from "../../ui/BookmarkBtn";
import Movie from "./Movie";
import StyledMovieCardDiv from "../../styles/StyledMovieCardDiv";
import StyledMovieGrid from "../../styles/StyledMovieGrid";
import Spinner from "../../ui/Spinner";
import { useMovies } from "./useMovies";
import { useSearchParams } from "react-router-dom";
import Searched from "./Searched";
import StyledHeading from "../../styles/StyledHeading";
import { useScreenSize } from "../../hooks/useScreenSize";
import StyledContainer from "../../styles/Styledcontainer";
import Header from "../../ui/Header";

function SeriesList() {
  const { movies, isLoading } = useMovies();

  const [searchParams] = useSearchParams();

  const { matches } = useScreenSize();

  const hasSearchParams = searchParams.has("search");

  if (hasSearchParams) return <Searched />;

  if (isLoading) return <Spinner />;

  const series = movies.filter((movie) => movie.category === "TV Series");

  return (
    <StyledContainer>
      <Header resourceName="Search for TV series" />
      <StyledHeading as="h1">TV Series</StyledHeading>
      <StyledMovieGrid>
        {series.map((movie, index) => (
          <StyledMovieCardDiv key={movie.title}>
            <Movie
              movie={movie}
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

export default SeriesList;
