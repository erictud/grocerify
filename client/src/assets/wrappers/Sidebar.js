import styled from "styled-components";

const Wrapper = styled.nav`
  .nav-container {
    /* background: linear-gradient(45deg, var(--primary-50), var(--primary-100)); */
    background-color: var(--back-col);
    z-index: 5;
    position: fixed;
    top: 0;
    padding: 1rem;
    width: 20vw;
    height: 100vh;
    flex-direction: column;
    display: none;
    border-right: 2px solid var(--primary-500);
  }

  .show-nav {
    display: flex;
    animation: showNav 0.5s ease;
  }

  .logo-container {
    text-align: center;
    text-transform: lowercase;
    font-style: italic;
    gap: 1rem;
    font-size: 2rem;
  }

  /* LINKS LIST */

  .link-list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    list-style: none;

    a {
      text-decoration: none;
      color: black;
      width: 100%;
    }

    .link-item {
      width: 100%;
      padding: 1rem 0;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0.2rem;
      font-size: 2rem;
      text-transform: lowercase;
    }

    .link-item:hover {
      background-color: rgba(255, 255, 255, 0.5);
      transition: all 0.2s ease;
    }
  }

  .lists {
    padding-left: 1.5rem;
    width: 90%;

    .link-item {
      font-size: 1.7rem;
    }
  }

  .credits {
    font-size: 1.2rem;
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
  }

  @keyframes showNav {
    from {
      opacity: 0;
      transform: translateX(-20rem);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export default Wrapper;
