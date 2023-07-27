import { styled } from "styled-components";
import TrendingList from "./TrendingList";
import RecommendedList from "./RecommendedList";
import { useMovies } from "./useMovies";
import Spinner from "../../ui/Spinner";
import { useSearchParams } from "react-router-dom";
import Searched from "./Searched";
import Header from "../../ui/Header";

const StyledTrendingContainer = styled.div`
  width: 100%;
  padding-left: 1.5rem;
  overflow: scroll;
`;

function Home() {
  const { movies, isLoading } = useMovies();

  const [searchParams] = useSearchParams();

  const hasSearchParams = searchParams.has("search");

  if (hasSearchParams) return <Searched />;

  if (isLoading) return <Spinner />;

  return (
    <>
      <Header resourceName="Search for movies or TV series" />
      <StyledTrendingContainer>
        <TrendingList movies={movies} />
      </StyledTrendingContainer>

      <RecommendedList movies={movies} />
    </>
  );
}

export default Home;
