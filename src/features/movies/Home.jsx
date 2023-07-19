import { styled } from "styled-components";
import TrendingList from "./TrendingList";
import RecommendedList from "./RecommendedList";
import { useMovies } from "./useMovies";
import Spinner from "../../ui/Spinner";
import { useSearchParams } from "react-router-dom";
import Searched from "./Searched";

const StyledTrendingContainer = styled.div`
  width: 100%;
  /* overflow: scroll; */
`;

function Home() {
  const { isLoading, movies } = useMovies();

  const [searchParams] = useSearchParams();

  const hasSearchParams = searchParams.has("search");

  if (hasSearchParams) return <Searched />;

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
