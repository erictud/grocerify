import styled from "styled-components";

import { HiOutlineEyeSlash, HiOutlineEye, HiOutlineMinusCircle } from "react-icons/hi2";
import { useState } from "react";

const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.5rem;
  padding: 0.7rem;
`;

const Label = styled.label`
  color: var(--color-grey-600);
  font-size: 1.5rem;
  font-weight: 500;
  text-transform: lowercase;
  letter-spacing: 0.05rem;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  min-width: 100%;
`;

const Input = styled.input`
  background-color: var(--color-grey-100);
  color: var(--color-grey-900);
  border: none;
  border-radius: var(--border-radius-sm);
  font-size: 1.4rem;
  padding: 0.2rem;
  padding-left: 0.8rem;
  width: 100%;
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

export default function PasswordInput({
  label = "password",
  value,
  onChange,
  error = "",
  id,
  disabled,
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <StyledInputContainer>
      <Label htmlFor={id}>{label}</Label>
      <InputContainer>
        <Input
          type={!showPassword ? "password" : "text"}
          value={value}
          onChange={onChange}
          id={id}
          disabled={disabled}
        />
        <span role="button" onClick={() => setShowPassword((prev) => !prev)}>
          {showPassword ? <HiOutlineEyeSlash /> : <HiOutlineEye />}
        </span>
      </InputContainer>
      {error && (
        <Error>
          <HiOutlineMinusCircle />
          <span>{error}</span>
        </Error>
      )}
    </StyledInputContainer>
  );
}
