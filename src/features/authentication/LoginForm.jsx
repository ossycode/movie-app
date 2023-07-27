import { NavLink, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { useEffect } from "react";
import { useLogin } from "./useLogin";
import { useForm } from "react-hook-form";

import StyledHeading from "../../styles/StyledHeading";
import StyledInput from "../../styles/StyledInput";
import StyledButton from "../../styles/StyledButton";

import SpinnerMini from "../../ui/SpinnerMini";
import { useUser } from "./useUser";
import FormRow from "../../ui/FormRow";

const StyledForm = styled.form`
  background-color: var(--color-semi-darkBlue);
  padding: 3rem;
  width: 40rem;
  border-radius: 2rem;
  margin: 0 auto;

  @media only screen and (max-width: 75em) {
    max-width: 90%;
  }
`;
const StyledInputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2.4rem;
`;

const StyledP = styled.p`
  margin-top: 2.4rem;
  text-align: center;
`;
const StyledLink = styled(NavLink)`
  &:link,
  &:visited {
    color: var(--color-red-50);
    text-decoration: none;
    margin-left: 0.5rem;
    /* cursor: pointer; */
  }
`;

function LoginForm() {
  const navigate = useNavigate();

  const { user } = useUser();
  const { login, isLoading } = useLogin();
  const { register, formState, reset, handleSubmit } = useForm();

  const { errors } = formState;

  useEffect(() => {
    if (user) navigate("/", { replace: true });
  }, [user, navigate]);

  function onSubmit({ email, password }) {
    login(
      { email, password },
      {
        onSettled: () => reset(),
      }
    );
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledHeading as="h1">Login</StyledHeading>
      <StyledInputsContainer>
        <FormRow error={errors?.email?.message}>
          <StyledInput
            id="email"
            in={errors?.email?.message ? "error" : "text"}
            type="email"
            placeholder="Email address"
            autoComplete="username"
            disabled={isLoading}
            {...register("email", {
              required: "Can't be empty",
            })}
          />
        </FormRow>

        <FormRow error={errors?.password?.message}>
          <StyledInput
            id="password"
            in={errors?.password?.message ? "error" : "text"}
            type="password"
            placeholder="Password"
            disabled={isLoading}
            {...register("password", {
              required: "Can't be empty",
            })}
          />
        </FormRow>

        <StyledButton in="login" disabled={isLoading}>
          {" "}
          {!isLoading ? "Login to your account" : <SpinnerMini />}
        </StyledButton>
      </StyledInputsContainer>
      <StyledP>
        Don&apos;t have an account?{" "}
        <StyledLink to="/signup">Sign Up</StyledLink>
      </StyledP>
    </StyledForm>
  );
}

export default LoginForm;
