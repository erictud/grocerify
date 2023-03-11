import styled from "styled-components";

const Wrapper = styled.header`
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0.5rem;
  border-bottom: 2px solid;
  border-image: linear-gradient(90deg, var(--primary-800), var(--primary-500)) 1;

  .nav-button,
  .flag {
    background-color: transparent;
    border: none;
    color: black;
  }

  .nav-button {
    display: block;
    width: 4rem;
    font-size: 3rem;
    z-index: 10;
    color: black;
    cursor: pointer;
  }

  .logo-container {
    img {
      width: 4rem;
    }
  }

  .info-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 3rem;
  }

  .user-container {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    padding-right: 1.5rem;

    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      font-size: 1.5rem;
    }
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
