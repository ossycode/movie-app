import { styled } from "styled-components";
import SignUpForm from "../features/authentication/SignUpForm";
import Logo from "../ui/Logo";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8.3rem;
  padding: 7.4rem;
`;

function SignUp() {
  return (
    <StyledContainer>
      <Logo />
      <SignUpForm />
    </StyledContainer>
  );
}

export default SignUp;
