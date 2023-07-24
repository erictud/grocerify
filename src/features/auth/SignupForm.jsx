import styled from "styled-components";
import { useState } from "react";

import Input from "../../ui/Input";
import FileInput from "../../ui/FileInput";
import PasswordInput from "../../ui/PasswordInput";
import Button from "../../ui/Button";

import { useSignUp } from "./useSignUp";
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

export default function SignupForm() {
  // form state
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("12345678");
  const [passwordConfirm, setPasswordConfirm] = useState("12345678");
  const [pfp, setPfp] = useState("");

  // error state
  const [emailError, setEmailError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordConfirmError, setPasswordConfirmError] = useState("");

  // signup functionality
  const { signup, isLoading } = useSignUp();

  function handleSubmit(e) {
    e.preventDefault();
    setEmailError("");
    setUsernameError("");
    setPasswordError("");
    setPasswordConfirmError("");

    if (!email.trim() || !email.includes("@")) {
      setEmailError("enter a valid email!");
      return;
    }
    if (!username.trim() || username.length <= 2) {
      setUsernameError("min password length is 3 characters");
      return;
    }
    if (!password.trim() || password.length < 8) {
      setPasswordError("min password length is 8 characters");
      return;
    }
    if (passwordConfirm !== password) {
      setPasswordConfirmError("Passwords must match");
      return;
    }

    let user;
    if (!pfp)
      user = {
        username,
        email,
        password,
      };
    else
      user = {
        username,
        email,
        password,
        pfp,
      };

    signup(user);
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
      <Input
        label="username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        error={usernameError}
        disabled={isLoading}
      />
      <PasswordInput
        value={password}
        label="password"
        onChange={(e) => setPassword(e.target.value)}
        error={passwordError}
        disabled={isLoading}
      />
      <PasswordInput
        value={passwordConfirm}
        label="password confirm"
        id="passwordConfirm"
        onChange={(e) => setPasswordConfirm(e.target.value)}
        error={passwordConfirmError}
        disabled={isLoading}
      />
      <FileInput
        id="pfp"
        label="Profile Picture (optional)"
        onChange={(e) => setPfp(e.target.files[0])}
        accept="image/*"
        disabled={isLoading}
      />
      <Button size="small" variation="primary" disabled={isLoading}>
        {isLoading ? <SpinnerMini /> : "Create account"}
      </Button>
    </Form>
  );
}
