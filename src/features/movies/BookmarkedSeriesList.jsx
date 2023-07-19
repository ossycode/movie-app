import Movie from "./Movie";
import StyledMovieGrid from "../../styles/StyledMovieGrid";
import BookmarkBtn from "../../ui/BookmarkBtn";
import MovieInfoContainer from "../../ui/MovieInfoContainer";
import StyledMovieCardDiv from "../../styles/StyledMovieCardDiv";
// import { useEffect, useState } from "react";

function BookmarkedSeriesList({ movies }) {
  // const { movies } = useMovies();
  // const [tvSeries, setTvSeries] = useState(
  //   movies.filter(
  //     (movie) => movie.category === "TV Series" && movie.isBookmarked === true
  //   )
  // );

  const tvSeries = movies.filter(
    (movie) => movie.category === "TV Series" && movie.isBookmarked === true
  );

  return (
    <StyledMovieGrid>
      {tvSeries.map((movie) => (
        <StyledMovieCardDiv key={movie.title}>
          <Movie
            movie={movie}
            imgType={movie.thumbnail.regular.large}
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
