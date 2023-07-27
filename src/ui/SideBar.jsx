import { styled } from "styled-components";
import MainNav from "./MainNav";
import UserAvatar from "./UserAvatar";
import Logo from "./Logo";
import Logout from "../features/authentication/Logout";

const StyledSidebar = styled.aside`
  padding: 3rem 2.8rem;

  grid-row: 1 / -1;

  @media only screen and (max-width: 75em) {
    flex-direction: row;
    order: -1;
  }
  @media only screen and (max-width: 37.5em) {
    padding: 0rem;
    width: 100vw;
  }
`;

const Container = styled.div`
  background-color: var(--color-semi-darkBlue);
  padding: 3.2rem 0rem;
  height: 100%;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7.5rem;
  @media only screen and (max-width: 75em) {
    flex-direction: row;
    gap: 0rem;
    padding: 2.4rem;
    justify-content: space-between;
    width: 100%;
  }
  @media only screen and (max-width: 56.25em) {
    /* gap: 21rem; */
  }

  @media only screen and (max-width: 37.5em) {
    border-radius: 0rem;
    padding: 1.3rem;
  }
`;
// const InfoContainer = styled.div`
//   height: 100%;
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-between;

//   @media only screen and (max-width: 75em) {
//     flex-direction: row;
//     justify-content: space-evenly;
//   }
// `;

const StyledUserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  /* margin: auto; */
  @media only screen and (max-width: 75em) {
    flex-direction: row;
  }
  @media only screen and (max-width: 37.5em) {
    gap: 0.5rem;
  }
`;

function SideBar() {
  return (
    <StyledSidebar>
      <Container>
        <Logo />
        <MainNav />
        <StyledUserContainer>
          <UserAvatar />
          <Logout />
        </StyledUserContainer>
      </Container>
    </StyledSidebar>
  );
}

export default SideBar;
