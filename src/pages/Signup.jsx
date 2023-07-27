import { styled } from "styled-components";
import SignupForm from "../features/authentication/signupForm";
import Logo from "../ui/Logo";

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
