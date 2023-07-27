import { styled } from "styled-components";
import { StyledItem } from "../../styles/StyledButtonIcon";

const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.8rem;
  width: 100%;
`;

function Movie({ imgType, divType, children }) {
  return (
    <MovieContainer>
      <StyledItem img={imgType} type={divType}>
        {children}
      </StyledItem>
    </MovieContainer>
  );
}

export default Movie;
