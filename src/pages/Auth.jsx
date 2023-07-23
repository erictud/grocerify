import styled from "styled-components";

import LoginForm from "../features/auth/LoginForm";
import Logo from "../ui/Logo";
import Tabbed from "../ui/Tabbed";
import SignupForm from "../features/auth/SignupForm";

const Container = styled.main`
  min-height: 100dvh;
  padding: 1rem;
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1080px) {
    width: 80rem;
    margin: 0 auto;
  }
`;

export default function Auth() {
  return (
    <Container>
      <Logo />
      <Tabbed defaultTab="loginForm">
        <Tabbed.ButtonsRow>
          <Tabbed.OpenTabButton opens="loginForm">Log in</Tabbed.OpenTabButton>
          <Tabbed.OpenTabButton opens="signUpForm">Sign up</Tabbed.OpenTabButton>
        </Tabbed.ButtonsRow>
        <Tabbed.Tab name="loginForm">
          <LoginForm />
        </Tabbed.Tab>
        <Tabbed.Tab name="signUpForm">
          <SignupForm />
        </Tabbed.Tab>
      </Tabbed>
    </Container>
  );
}
