import { styled } from "styled-components";
// import Header from "./Header";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 15rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
  width: 100vw;

  @media only screen and (max-width: 75em) {
    display: flex;
    flex-direction: column;
  }
`;

const Main = styled.main`
  /* padding-left: 1.5rem; */
  /* overflow: scroll; */

  /* @media only screen and (max-width: 75em) {
    padding-left: 2.5rem;
  }
  @media only screen and (max-width: 37.5em) {
    padding-left: 1.5rem;
  } */
`;

const Container = styled.div`
  max-height: 96rem;

  @media only screen and (max-width: 37.5em) {
    /* padding: 0rem 2rem; */
  }
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      {/* <Header /> */}
      <SideBar />

      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
