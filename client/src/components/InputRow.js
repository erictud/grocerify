import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5rem;

  input {
    width: 40rem;
    height: 3rem;
    padding: 0.5rem;
    font-size: 2rem;
    outline: none;
    border: 1px solid var(--secondary-800);
    border-radius: 0.5rem;
    background-color: var(--grey);
  }

  label {
    font-size: 1.7rem;
    text-transform: lowercase;
  }

  @media (max-width: 550px) {
    input {
      width: 30rem;
    }
  }
`;

export default function InputRow({ type, labelText, name, handleChange, value }) {
  return (
    <Wrapper>
      <label htmlFor={name}>{name || labelText}</label>
      <input type={type} name={name} onChange={handleChange} value={value} />
    </Wrapper>
  );
}
