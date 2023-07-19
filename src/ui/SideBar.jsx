import { styled } from "styled-components";
import MainNav from "./MainNav";
import UserAvatar from "./UserAvatar";

const StyledSidebar = styled.aside`
  padding: 3rem 2.8rem;

  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
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
`;
const InfoContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

function SideBar() {
  return (
    <StyledSidebar>
      <Container>
        <img src="/assets/logo.svg" />
        <InfoContainer>
          <MainNav />
          <UserAvatar />
        </InfoContainer>
      </Container>
    </StyledSidebar>
  );
}

export default SideBar;
