import styled from "styled-components";

const Wrapper = styled.nav`
  .nav-container {
    width: 20vw;
    height: 100vh;
    background-color: white;
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    animation: showNav 0.5s ease;
  }

  .show-nav {
    display: block;
  }

  .btn-close {
    cursor: pointer;
    position: absolute;
    top: 2%;
    left: 5.5%;
    font-size: 4rem;
    font-weight: 700;
    background-color: transparent;
    border: none;
  }

  .container {
    display: grid;
    grid-template-rows: 1fr 2fr;
    justify-items: center;
    padding: 0.5rem 0;
  }

  /* TOP PART - LOGO + NAME */

  .logo-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    font-size: 3rem;
    font-weight: 900;
    text-transform: lowercase;
    color: var(--primary-700);

    img {
      padding-top: 0.5rem;
      width: 3rem;
    }
  }

  /* MIDDLE PART - LINKS */

  .link-container {
    width: 100%;
    padding-top: 10rem;
    padding-left: 30%;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    a {
      color: black;
      text-decoration: none;
    }

    .link-item {
      padding-bottom: 2rem;
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      gap: 0.3rem;
      font-size: 2.5rem;

      svg {
        font-size: 3rem;
      }
    }

    .sub-link-container {
      padding-bottom: 2rem;
      padding-left: 10%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 1rem;

      .link-item {
        font-size: 2rem;
        padding-bottom: 0;

        svg {
          font-size: 2.5rem;
        }
      }
    }
  }

  /* BOTTOM PART - CREDITS */
  .credits-container {
    position: fixed;
    bottom: 0;
    font-size: 1.1rem;
    text-align: center;
    padding-bottom: 1rem;
  }

  @keyframes showNav {
    from {
      opacity: 0;
      transform: translateX(-20rem);
    }
    to {
      opacity: 1;
      transform: translateX(0rem);
    }
  }

  /* MEDIA QUERIES */

  @media (max-width: 1200px) {
    .nav-container {
      width: 30vw;
    }
  }

  @media (max-width: 900px) {
    .nav-container {
      width: 40vw;
    }
  }

  @media (max-width: 600px) {
    .nav-container {
      width: 50vw;
    }
  }

  @media (max-width: 450px) {
    .nav-container {
      width: 80vw;
    }
  }
`;

export default Wrapper;
