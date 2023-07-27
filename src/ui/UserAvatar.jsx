import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import { useNavigate } from "react-router-dom";

const Avatar = styled.img`
  display: block;
  width: 4rem;
  height: 3.6rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-white);
  cursor: pointer;

  @media only screen and (max-width: 37.5em) {
    width: 2.5rem;
    height: 2.5rem;
  }
`;
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & span {
    color: var(--color-red-50);
    font-weight: 500;
  }
`;

function UserAvatar() {
  const { user } = useUser();

  const { displayName: currentName, photoURL } = user;

  const navigate = useNavigate();

  // let { username } = useParams();

  return (
    // <Avatar src={avatar || "default-user.jpg"} alt={`Avatar of ${fullName}`} />

    <StyledDiv>
      <Avatar
        src={photoURL || "/assets/default-user.jpg"}
        onClick={() =>
          navigate(
            `/settings/${currentName === null ? "username" : currentName}`
          )
        }
      />
      <span> {currentName} </span>
    </StyledDiv>
  );
}

export default UserAvatar;
