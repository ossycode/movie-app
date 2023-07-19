import { styled } from "styled-components";
import Header from "./Header";
import SideBar from "./SideBar";
import { Outlet, useNavigation } from "react-router-dom";
import Spinner from "./Spinner";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 15rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100dvh;
  width: 100vw;
`;

const Main = styled.main`
  padding: 0rem 4.8rem 6.8rem 1rem;
  /* overflow: scroll; */
`;

const Container = styled.div`
  max-height: 96rem;
  /* max-width: 120rem; */
  /* max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem; */
`;

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  if (isLoading) return <Spinner />;

  return (
    <StyledAppLayout>
      <Header />
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
