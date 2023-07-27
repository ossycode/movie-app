import { styled } from "styled-components";
import SearchInput from "../ui/SearchInput";

const StyledHeader = styled.header`
  /* padding: 1.2rem 4.8rem; */
  padding: 4.5rem 1rem 1.5rem 0rem;

  @media only screen and (max-width: 75em) {
    padding: 2.3rem 0rem 2.5rem 2.5rem;
  }
  @media only screen and (max-width: 37.5em) {
    padding: 1.6rem 0rem 1.6rem 1.6rem;
  }
`;

function Header({ resourceName }) {
  return (
    <StyledHeader>
      <SearchInput resourceName={resourceName} />
    </StyledHeader>
  );
}

export default Header;
