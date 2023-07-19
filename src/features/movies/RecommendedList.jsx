import Movie from "./Movie";
import StyledHeading from "../../styles/StyledHeading";
import MovieInfoContainer from "../../ui/MovieInfoContainer";
import BookmarkBtn from "../../ui/BookmarkBtn";
import PlayButton from "../../ui/PlayButton";
import StyledMovieCardDiv from "../../styles/StyledMovieCardDiv";
import StyledMovieGrid from "../../styles/StyledMovieGrid";

function RecommendedList({ movies }) {
  return (
    <>
      <StyledHeading as="h1">Recommended for you</StyledHeading>

      <StyledMovieGrid>
        {movies.map((movie, index) => (
          <StyledMovieCardDiv key={movie.title}>
            <Movie
              movie={movie}
              divType="recommended"
              imgType={movie.thumbnail.regular.large}
            >
              <BookmarkBtn movie={movie} index={index} />
              <PlayButton />
            </Movie>
            <MovieInfoContainer movie={movie} headingType="h4" />
          </StyledMovieCardDiv>
        ))}
      </StyledMovieGrid>
    </>
  );
}

export default RecommendedList;
