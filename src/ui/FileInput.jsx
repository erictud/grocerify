import styled from "styled-components";

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

const StyledFileInput = styled.input.attrs({ type: "file" })`
  font-size: 1.4rem;
  border-radius: var(--border-radius-sm);

  &::file-selector-button {
    font: inherit;
    font-weight: 500;
    padding: 0.4rem 0.8rem;
    margin-right: 1.2rem;
    border-radius: var(--border-radius-sm);
    border: none;
    color: var(--color-brand-50);
    background-color: var(--color-brand-700);
    cursor: pointer;
    transition: color 0.2s, background-color 0.2s;

    &:hover {
      background-color: var(--color-brand-700);
    }
  }
`;

export default function FillInput({ onChange, value, id, label, accept, disabled }) {
  return (
    <StyledInputContainer>
      <StyledLabel htmlFor={id || label}>{label}</StyledLabel>
      <StyledFileInput
        id={id || label}
        value={value}
        onChange={onChange}
        type="file"
        disabled={disabled}
        accept={accept}
      />
    </StyledInputContainer>
  );
}
