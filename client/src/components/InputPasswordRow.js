import styled from "styled-components";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useState } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5rem;

  .input-visibility-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }
  input {
    width: 36.5rem;
    height: 3rem;
    padding: 0.5rem;
    font-size: 2rem;
    outline: none;
    border: 1px solid var(--secondary-800);
    border-radius: 0.5rem;
    background-color: var(--grey);
  }

  svg {
    font-size: 2.5rem;
  }

  label {
    font-size: 1.7rem;
    text-transform: lowercase;
  }
  @media (max-width: 550px) {
    input {
      width: 26.5rem;
    }
  }
`;

export default function InputPasswordRow({ handleChange, value, name }) {
  const [passwordIsShown, setPasswordIsShown] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordIsShown((prev) => !prev);
  };
  return (
    <Wrapper>
      <label htmlFor="password">password</label>
      <div className="input-visibility-row">
        <input
          name={name}
          id="password"
          type={passwordIsShown ? "text" : "password"}
          onChange={handleChange}
          value={value}
        />
        <div onClick={togglePasswordVisibility}>
          {!passwordIsShown ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
        </div>
      </div>
    </Wrapper>
  );
}
