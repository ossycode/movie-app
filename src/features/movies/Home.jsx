import { styled } from "styled-components";
import TrendingList from "./TrendingList";
import RecommendedList from "./RecommendedList";
import { useMovies } from "./useMovies";
import Spinner from "../../ui/Spinner";

const StyledTrendingContainer = styled.div`
  width: 100%;
  /* overflow: scroll; */
`;

function Home() {
  const { isLoading, movies } = useMovies();

  if (isLoading) return <Spinner />;

  return (
    <>
      <StyledTrendingContainer>
        <TrendingList movies={movies} />
      </StyledTrendingContainer>

      <RecommendedList movies={movies} />
    </>
  );
}

export default Home;
