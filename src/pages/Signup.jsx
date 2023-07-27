import { styled } from "styled-components";
import Logo from "../ui/Logo";
import SignupForm from "../features/authentication/signupForm";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8.3rem;
  padding: 7.4rem;
`;

function Signup() {
  return (
    <StyledContainer>
      <Logo />
      <SignupForm />
    </StyledContainer>
  );
}

export default Signup;
