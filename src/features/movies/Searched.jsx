import { useSearch } from "./useSearch";
import Spinner from "../../ui/Spinner";
import StyledMovieGrid from "../../styles/StyledMovieGrid";
import StyledMovieCardDiv from "../../styles/StyledMovieCardDiv";
import Movie from "./Movie";
import BookmarkBtn from "../../ui/BookmarkBtn";
import MovieInfoContainer from "../../ui/MovieInfoContainer";
import Empty from "../../ui/Empty";
import StyledHeading from "../../styles/StyledHeading";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useScreenSize } from "../../hooks/useScreenSize";
import StyledContainer from "./../../styles/StyledContainer";
import Header from "../../ui/Header";

function Searched() {
  const { isSearching, searchedMovies } = useSearch();
  const [searchParams] = useSearchParams();

  const query = searchParams.get("search");
  const { matches } = useScreenSize();
  const navigate = useNavigate();

  if (query.trim() == "") navigate("/");

  if (isSearching) return <Spinner />;

  const numberOfMoviesFound = searchedMovies.length;
  if (numberOfMoviesFound < 1) return <Empty resourceName="movies" />;

  const isMoreThanOne = numberOfMoviesFound > 1 ? "results" : "result";

  return (
    <StyledContainer>
      <Header />
      <StyledHeading as="h1">
        {`Found ${numberOfMoviesFound} ${isMoreThanOne} for '${query}'`}
      </StyledHeading>
      <StyledMovieGrid>
        {searchedMovies.map((movie, index) => (
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

export default Searched;
