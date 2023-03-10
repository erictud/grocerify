import styled from "styled-components";

const Wrapper = styled.nav`
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;

  .nav-button,
  .flag {
    background-color: transparent;
    border: none;
    color: black;
  }

  .nav-button {
    display: block;
    font-size: 3rem;
    color: black;
    cursor: pointer;
  }

  .logo-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 2.5rem;
    font-weight: 700;
    font-style: italic;
    gap: 0.3rem;
    text-transform: lowercase;
    color: green;

    span {
      padding-top: 1.2rem;
      font-size: 3rem;
    }
  }

  .info-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 3rem;
  }

  .user-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
  }

  .user-img {
    font-size: 2rem;
    color: white;
    background-color: teal;
    padding: 0.5rem 1rem;
    border-radius: 100%;
  }

  .username {
    font-size: 1.5rem;
  }

  .language-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
  }

  .flag img {
    width: 2rem;
    height: 1rem;
  }
`;

export default Wrapper;
