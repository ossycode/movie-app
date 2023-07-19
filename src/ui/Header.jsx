import { styled } from "styled-components";
import SearchInput from "../ui/SearchInput";

const StyledHeader = styled.header`
  /* padding: 1.2rem 4.8rem; */
  padding: 4.5rem 1rem 1.5rem 0rem;
`;

function Header() {
  return (
    <StyledHeader>
      <SearchInput />
    </StyledHeader>
  );
}

export default Header;
