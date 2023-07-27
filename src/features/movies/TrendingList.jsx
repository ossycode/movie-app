import Movie from "./Movie";
import { styled } from "styled-components";
import StyledHeading from "../../styles/StyledHeading";
import MovieInfoContainer from "../../ui/MovieInfoContainer";
import BookmarkBtn from "../../ui/BookmarkBtn";
import PlayButton from "../../ui/PlayButton";
import { useScreenSize } from "../../hooks/useScreenSize";
import Empty from "../../ui/Empty";

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  margin-top: 2.5rem;
  margin-bottom: 5rem;
  width: 100vw;
  /* overflow: scroll; */
`;

function TrendingList({ movies }) {
  const { matches } = useScreenSize();

  const trendingMovies = movies.filter((movie) => movie.isTrending === true);

  if (trendingMovies.length === 0)
    return <Empty resourceName="Trending movies" />;

  return (
    <>
      <StyledHeading as="h1">Trending</StyledHeading>
      <StyledDiv>
        {trendingMovies.map((movie, index) => (
          <Movie
            movie={movie}
            key={movie.title}
            divType="trending"
            imgType={
              matches === "small"
                ? movie.thumbnail.trending.small
                : movie.thumbnail.trending.large
            }
          >
            <BookmarkBtn movie={movie} index={index} />
            <PlayButton />
            <MovieInfoContainer movie={movie} headingType="h3" />
          </Movie>
        ))}
      </StyledDiv>
    </>
  );
}

export default TrendingList;
