import { styled } from "styled-components";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useLogout } from "./useLogout";
import SpinnerMini from "../../ui/SpinnerMini";

const ButtonIcon = styled.button`
  background: none;
  border: none;
  padding: 0.6rem;
  border-radius: 1rem;
  transition: all 0.2s;

  &:hover {
  }

  & svg {
    width: 3rem;
    height: 3rem;

    @media only screen and (max-width: 37.5em) {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
`;

function Logout() {
  const { logout, isLoading } = useLogout();
  return (
    <ButtonIcon
      disabled={isLoading}
      onClick={logout}
      data-tooltip-id="my-tooltip"
      data-tooltip-content="Logout"
      data-tooltip-variant="light"
    >
      {!isLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
    </ButtonIcon>
  );
}

export default Logout;
