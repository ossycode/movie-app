import SeriesList from "../features/movies/SeriesList";
import StyledHeading from "../styles/StyledHeading";

function TvSeries() {
  return (
    <div>
      <StyledHeading as="h1">TV Series</StyledHeading>
      <SeriesList />
    </div>
  );
}

export default TvSeries;
