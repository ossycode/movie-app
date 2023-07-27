import { styled } from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8.3rem;
  padding: 7.4rem;
`;

function Login() {
  return (
    <StyledContainer>
      <Logo />
      <LoginForm />
    </StyledContainer>
  );
}

export default Login;
