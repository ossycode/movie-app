import { Form, useParams } from "react-router-dom";
import StyledHeading from "../../styles/StyledHeading";
import Logo from "../../ui/Logo";
import StyledInput from "../../styles/StyledInput";
import FormRow from "../../ui/FormRow";
import FileInput from "../../styles/FileInput";
import StyledButton from "../../styles/StyledButton";
import { useUser } from "./useUser";
import { styled } from "styled-components";
import { useUpdateUser } from "./useUpdateUser";
import { usePasswordUpdate } from "./usePasswordUpdate";
import { useState } from "react";
import { useForm } from "react-hook-form";

const StyledMainContainer = styled.div`
  /* width: 90%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 7rem;

  @media only screen and (max-width: 52.25em) {
    padding: 5rem;
  }
`;

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10rem;
  margin-top: 8%;

  @media only screen and (max-width: 52.25em) {
    flex-direction: column;
    gap: 5rem;
    padding: 0rem 3rem;
  }
`;

const StyledForm = styled(Form)`
  background-color: var(--color-semi-darkBlue);
  padding: 3rem;
  max-width: 40rem;
  max-height: 40rem;
  border-radius: 2rem;
  margin: 0 auto;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 52.25em) {
    justify-content: space-around;
  }
`;

function UpdateUserData() {
  const {
    user: { displayName: currentName, email, providerData },
  } = useUser();

  const { providerId } = providerData[0];
  // console.log(providerId);

  const { register, formState, reset, handleSubmit, getValues } = useForm();

  const [userName, setUserName] = useState(
    currentName === null ? "" : currentName
  );
  const { username } = useParams();

  const [avatar, setAvatar] = useState(null);

  const { updateUser, isUpdating } = useUpdateUser();
  const { updatePassword, isUpdating: isUpdatingPassword } =
    usePasswordUpdate();

  const { errors } = formState;

  function handleProfileUpdate(e) {
    e.preventDefault();
    if (userName === username && avatar === null) return;

    updateUser(
      { userName, avatar },
      {
        onSuccess: () => {
          setAvatar(null);
          e.target.reset();
        },
      }
    );
  }

  function onSubmitPassword({ oldPassword, newPassword }) {
    updatePassword({ oldPassword, newPassword }, { onSettled: () => reset() });
  }
  function handleCancel() {
    setUserName(currentName === null ? "" : currentName);
    setAvatar(null);
  }

  return (
    <StyledMainContainer>
      <Logo />

      <FormContainer>
        <StyledForm onSubmit={handleProfileUpdate}>
          <StyledHeading as="h1">Update Profile</StyledHeading>

          <FormRow>
            <StyledInput
              in="text"
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              id="displayName"
              disabled={isUpdating}
            />
          </FormRow>

          <FormRow>
            <StyledInput
              in="text"
              type="email"
              value={email}
              disabled
              id="email"
            />
          </FormRow>

          <FormRow>
            <FileInput
              id="avatar"
              accept="image/*"
              onChange={(e) => setAvatar(e.target.files[0])}
              disabled={isUpdating}
            />
          </FormRow>

          <ButtonContainer>
            <StyledButton
              size="small"
              variation="danger"
              onClick={handleCancel}
              disabled={isUpdating}
            >
              Cancel
            </StyledButton>
            <StyledButton size="small">Update account</StyledButton>
          </ButtonContainer>
        </StyledForm>

        <StyledForm onSubmit={handleSubmit(onSubmitPassword)}>
          <StyledHeading as="h1">Update password</StyledHeading>

          <FormRow error={errors?.oldPassword?.message}>
            <StyledInput
              in={errors?.oldPassword?.message ? "error" : "text"}
              type="password"
              placeholder="Old password"
              {...register("oldPassword", {
                required: "Can't be empty",
              })}
            />
          </FormRow>

          <FormRow error={errors?.newPassword?.message}>
            <StyledInput
              in={errors?.newPassword?.message ? "error" : "text"}
              type="password"
              placeholder="New password"
              {...register("newPassword", {
                required: "Can't be empty",
                minLength: {
                  value: 6,
                  message: "Minimum length of 6 characters",
                },
              })}
            />
          </FormRow>
          <FormRow error={errors?.confirmNewPassword?.message}>
            <StyledInput
              in={errors?.confirmNewPassword?.message ? "error" : "text"}
              type="password"
              placeholder=" Confirm password"
              {...register("confirmNewPassword", {
                required: "Can't be empty",
                validate: (value) =>
                  value === getValues().newPassword ||
                  "Password needs to match",
              })}
            />
          </FormRow>

          <ButtonContainer>
            <StyledButton
              size="small"
              variation="danger"
              type="reset"
              onClick={reset}
              disabled={isUpdatingPassword}
            >
              Cancel
            </StyledButton>
            <StyledButton size="small" disabled={isUpdatingPassword}>
              Update account
            </StyledButton>
          </ButtonContainer>
        </StyledForm>
      </FormContainer>
    </StyledMainContainer>
  );
}

export default UpdateUserData;
