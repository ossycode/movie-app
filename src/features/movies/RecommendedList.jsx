import Movie from "./Movie";
import StyledHeading from "../../styles/StyledHeading";
import MovieInfoContainer from "../../ui/MovieInfoContainer";
import BookmarkBtn from "../../ui/BookmarkBtn";
import PlayButton from "../../ui/PlayButton";
import StyledMovieCardDiv from "../../styles/StyledMovieCardDiv";
import StyledMovieGrid from "../../styles/StyledMovieGrid";
import { useScreenSize } from "../../hooks/useScreenSize";
import StyledContainer from "../../styles/Styledcontainer";
import Empty from "../../ui/Empty";

function RecommendedList({ movies }) {
  const { matches } = useScreenSize();

  const moviesList = movies.filter((movie) => movie.isTrending === false);

  if (moviesList.length === 0)
    return <Empty resourceName="Recommended movies" />;

  return (
    <StyledContainer>
      <StyledHeading as="h1">Recommended for you</StyledHeading>

      <StyledMovieGrid>
        {moviesList.map((movie) => (
          <StyledMovieCardDiv key={movie.title}>
            <Movie
              movie={movie}
              divType="recommended"
              imgType={movie.thumbnail.regular[matches]}
            >
              <BookmarkBtn movie={movie} />
              <PlayButton />
            </Movie>
            <MovieInfoContainer movie={movie} headingType="h4" />
          </StyledMovieCardDiv>
        ))}
      </StyledMovieGrid>
    </StyledContainer>
  );
}

export default RecommendedList;
