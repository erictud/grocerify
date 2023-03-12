import styled from "styled-components";

const Wrapper = styled.header`
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    padding: 0 2rem;
    width: calc(100% - 3rem);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: white;
  }

  .btn-open {
    background-color: transparent;
    border: none;
    cursor: pointer;

    svg {
      font-size: 3.5rem;
    }
  }

  .title {
    font-size: 2.3rem;
    font-weight: 900;
  }

  .user-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    cursor: pointer;

    h4 {
      font-size: 2rem;
      font-weight: 400;
    }

    h3 {
      font-size: 2rem;
      background-color: var(--primary-400);
      padding: 1rem 1.5rem;
      border-radius: 100%;
    }

    svg {
      font-size: 2rem;
    }
  }
`;

export default Wrapper;
