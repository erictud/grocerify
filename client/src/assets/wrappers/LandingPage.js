import styled from "styled-components";

const Wrapper = styled.div`
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;

  /* TOP PART - LOGO CONTAINER */
  .logo-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    margin-bottom: 8rem;

    img {
      width: 4rem;
    }

    h2 {
      font-size: 3rem;
      font-weight: 900;
      color: var(--primary-800);
    }
  }

  /* BOTTOM PART  */
  .main-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;

    .main-section__column-1 {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      h1 {
        font-size: 6rem;
        margin-bottom: 3rem;
        text-align: start;
      }

      p {
        font-size: 2rem;
        font-weight: 300;
        color: var(--primary-800);
        margin-bottom: 3rem;
      }
    }

    .main-section__column-2 {
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 60%;
      }
    }
  }

  @media (max-width: 1200px) {
    .main-section {
      .main-section__column-1 {
        h1 {
          font-size: 4rem;
        }
        p {
          font-size: 1.8rem;
        }
      }
    }
  }

  @media (max-width: 800px) {
    .main-section {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;

      .main-section__column-1 {
        align-items: center;
        margin-bottom: 2rem;
      }
    }
  }
`;

export default Wrapper;
