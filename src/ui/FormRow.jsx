import { styled } from "styled-components";

const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

const Error = styled.span`
  font-size: 1.3rem;
  text-align: right;
  transform: translateY(-200%);
  color: var(--color-red-50);
  padding-right: 1.5rem;
`;

function FormRow({ error, children }) {
  return (
    <Label htmlFor={children.props.id} err="active">
      {children}
      {error && <Error>{error}</Error>}
    </Label>
  );
}

export default FormRow;
