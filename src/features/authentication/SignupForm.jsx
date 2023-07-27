import { styled } from "styled-components";

import { NavLink } from "react-router-dom";
import { useSignUp } from "./useSignUp";
import { useForm } from "react-hook-form";

import StyledInput from "../../styles/StyledInput";
import StyledHeading from "../../styles/StyledHeading";
import StyledButton from "../../styles/StyledButton";
import FormRow from "../../ui/FormRow";
import SpinnerMini from "../../ui/SpinnerMini";

const StyledForm = styled.form`
  background-color: var(--color-semi-darkBlue);
  padding: 3rem;
  min-width: 40rem;
  border-radius: 2rem;
  margin: 0 auto;
`;
const StyledInputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
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
  }
`;

function SignUpForm() {
  const { register, formState, getValues, reset, handleSubmit } = useForm();
  const { signUp, isLoading } = useSignUp();

  const { errors } = formState;

  function onSubmit({ name, email, password }) {
    signUp({ name, email, password }, { onSettled: () => reset() });
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledHeading as="h1">Sign Up</StyledHeading>
      <StyledInputsContainer>
        <FormRow error={errors?.name?.message}>
          <StyledInput
            in={errors?.name?.message ? "error" : "text"}
            type="text"
            id="name"
            disabled={isLoading}
            placeholder="Username"
            {...register("name", {
              required: "Can't be empty",
            })}
          />
        </FormRow>

        <FormRow error={errors?.email?.message}>
          <StyledInput
            in={errors?.email?.message ? "error" : "text"}
            type="email"
            id="email"
            disabled={isLoading}
            placeholder="Email address"
            {...register("email", {
              required: "Can't be empty",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "email address not valid",
              },
            })}
          />
        </FormRow>

        <FormRow error={errors?.password?.message}>
          <StyledInput
            in={errors?.password?.message ? "error" : "text"}
            type="password"
            id="password"
            placeholder="Password"
            {...register("password", {
              required: "Can't be empty",
              minLength: {
                value: 6,
                message: "Minimum length of 6 characters",
              },
            })}
            disabled={isLoading}
          />
        </FormRow>

        <FormRow error={errors?.repeatPassword?.message}>
          <StyledInput
            in={errors?.repeatPassword?.message ? "error" : "text"}
            type="password"
            id="repeatPassword"
            placeholder="Repeat password"
            {...register("repeatPassword", {
              required: "Can't be empty",
              validate: (value) =>
                value === getValues().password || "Password needs to match",
            })}
          />
        </FormRow>

        <StyledButton>
          {" "}
          {!isLoading ? "Create an account" : <SpinnerMini />}{" "}
        </StyledButton>
      </StyledInputsContainer>
      <StyledP>
        Already have an account? <StyledLink to="/login">Login</StyledLink>
      </StyledP>
    </StyledForm>
  );
}

export default SignUpForm;
