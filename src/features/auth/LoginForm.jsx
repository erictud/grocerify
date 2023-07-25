import styled from "styled-components";
import { useState } from "react";

import Input from "../../ui/Input";
import PasswordInput from "../../ui/PasswordInput";
import Button from "../../ui/Button";
import { useLogin } from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2rem;

  & button {
    margin-top: 1rem;
    align-self: flex-end;
  }
`;

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("12345678");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");

    if (!email.trim() || !email.includes("@")) {
      setEmailError("Please introduce a valid email!");
      return;
    }

    if (!password.trim()) {
      setPasswordError("Please introduce a valid password!");
      return;
    }

    login({ email, password });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        label="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={emailError}
        disabled={isLoading}
      />
      <PasswordInput
        value={password}
        label="password"
        onChange={(e) => setPassword(e.target.value)}
        error={passwordError}
        disabled={isLoading}
      />
      <Button size="small" variation="primary">
        {isLoading ? <SpinnerMini /> : "Log in"}
      </Button>
    </Form>
  );
}
