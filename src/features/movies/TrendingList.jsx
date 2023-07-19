import Movie from "./Movie";
import { styled } from "styled-components";
import StyledHeading from "../../styles/StyledHeading";
import MovieInfoContainer from "../../ui/MovieInfoContainer";
import BookmarkBtn from "../../ui/BookmarkBtn";
import PlayButton from "../../ui/PlayButton";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  margin-top: 2.5rem;
  margin-bottom: 5rem;
`;

function TrendingList({ movies }) {
  const trendingMovies = movies.filter((movie) => movie.isTrending === true);

  return (
    <>
      <StyledHeading as="h1">Trending</StyledHeading>
      <StyledContainer>
        {trendingMovies.map((movie, index) => (
          <Movie
            movie={movie}
            key={movie.title}
            divType="trending"
            imgType={movie.thumbnail.trending.large}
          >
            <BookmarkBtn movie={movie} index={index} />
            <PlayButton />
            <MovieInfoContainer movie={movie} headingType="h3" />
          </Movie>
        ))}
      </StyledContainer>
    </>
  );
}

export default TrendingList;
