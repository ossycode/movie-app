import { styled, css } from "styled-components";

const StyledBtnIcon = styled.button`
  ${(props) =>
    props.type === "bookmark" &&
    css`
      width: 3.2rem;
      height: 3.2rem;
      background-color: rgba(90, 105, 143, 0.5);
      border: none;
      outline: none;
      border-radius: 50%;
      align-self: flex-end;
    `}
  ${(props) =>
    props.type === "play" &&
    css`
      border: none;
      outline: none;
      margin-top: 0.5rem;
      position: absolute;
      top: 40%;
      left: 40%;
      display: flex;
      gap: 1.9rem;
      padding-left: 0.9rem;
      /* justify-content: space-evenly; */
      align-items: center;
      width: 11.7rem;
      height: 4.8rem;
      background-color: rgba(255, 255, 255, 0.25);
      border-radius: 2.85rem;
      visibility: hidden;
    `}
`;

const StyledItem = styled.div`
  ${(props) =>
    props.type === "trending" &&
    css`
      min-width: 47rem;
      min-height: 23rem;
    `}
  ${(props) =>
    props.type === "recommended" &&
    css`
      width: 28rem;
      height: 17.4rem;
    `}
  position: relative;
  background-image: ${(props) => `url(${props.img})`};

  &:hover ${StyledBtnIcon} {
    visibility: visible;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.6rem;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0.8rem;
  cursor: pointer;
`;
export { StyledBtnIcon, StyledItem };
