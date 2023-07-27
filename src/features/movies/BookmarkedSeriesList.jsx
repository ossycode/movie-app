import Movie from "./Movie";
import StyledMovieGrid from "../../styles/StyledMovieGrid";
import BookmarkBtn from "../../ui/BookmarkBtn";
import MovieInfoContainer from "../../ui/MovieInfoContainer";
import Empty from "../../ui/Empty";

import StyledMovieCardDiv from "../../styles/StyledMovieCardDiv";
import { useScreenSize } from "../../hooks/useScreenSize";

function BookmarkedSeriesList({ movies }) {
  const { matches } = useScreenSize();

  const tvSeries = movies.filter(
    (movie) => movie.category === "TV Series" && movie.isBookmarked === true
  );
  if (tvSeries.length === 0) return <Empty resourceName="tv series" />;

  return (
    <StyledMovieGrid>
      {tvSeries.map((movie) => (
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

export default BookmarkedSeriesList;
