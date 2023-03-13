import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    background-color: white;
    padding: 6rem 4rem;
    padding-bottom: 2rem;
    border-radius: 2rem;
    border-top-right-radius: 0rem;
    border-top-left-radius: 0rem;
    border-top: 0.5rem solid var(--primary-600);
  }

  h2 {
    font-size: 3rem;
    font-weight: 900;
    letter-spacing: 0.1rem;
    text-transform: lowercase;
  }

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;

    .inputs-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }
    p,
    .member-btn {
      font-size: 2rem;
      font-weight: 400;
    }

    .member-btn {
      color: var(--primary-600);
      background-color: transparent;
      border: none;
      cursor: pointer;
    }
  }

  @media (max-width: 600px) {
    .form-container {
      padding: 2rem 1rem;
    }

    .form {
      p,
      .member-btn {
        font-size: 1.3rem;
      }
    }
  }
`;

export default Wrapper;
