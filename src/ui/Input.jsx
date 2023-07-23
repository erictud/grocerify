import styled from "styled-components";
import { HiOutlineMinusCircle } from "react-icons/hi2";

const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.5rem;
  padding: 0.7rem;
`;

const StyledLabel = styled.label`
  color: var(--color-grey-600);
  font-size: 1.5rem;
  font-weight: 500;
  text-transform: lowercase;
  letter-spacing: 0.05rem;
`;

const StyledInput = styled.input`
  background-color: var(--color-grey-100);
  color: var(--color-grey-900);
  border: none;
  border-radius: var(--border-radius-sm);
  font-size: 1.4rem;
  padding: 0.2rem;
  padding-left: 0.8rem;
  min-width: 100%;
  box-shadow: var(--shadow-sm);

  &:focus {
    outline: 0.5px solid var(--color-brand-100);
  }
`;

const Error = styled.p`
  font-size: 1.2rem;
  color: var(--color-red-700);
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;

export default function Input({ label, value, onChange, type = "text", error = "", id }) {
  return (
    <StyledInputContainer>
      <StyledLabel htmlFor={id || label}>{label}</StyledLabel>
      <StyledInput type={type} value={value} onChange={onChange} id={id || label} />
      {error && (
        <Error>
          <HiOutlineMinusCircle />
          <span>{error}</span>
        </Error>
      )}
    </StyledInputContainer>
  );
}
