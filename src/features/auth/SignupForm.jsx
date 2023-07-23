import styled from "styled-components";
import { useState } from "react";

import Input from "../../ui/Input";
import FileInput from "../../ui/FileInput";
import PasswordInput from "../../ui/PasswordInput";
import Button from "../../ui/Button";

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
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [pfp, setPfp] = useState("");

  // error states
  const [emailError, setEmailError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordConfirmError, setPasswordConfirmError] = useState("");

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

    console.log(user);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        label="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={emailError}
      />
      <Input
        label="username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        error={usernameError}
      />
      <PasswordInput
        value={password}
        label="password"
        onChange={(e) => setPassword(e.target.value)}
        error={passwordError}
      />
      <PasswordInput
        value={passwordConfirm}
        label="password confirm"
        id="passwordConfirm"
        onChange={(e) => setPasswordConfirm(e.target.value)}
        error={passwordConfirmError}
      />
      <FileInput
        id="pfp"
        label="Profile Picture (optional)"
        onChange={(e) => setPfp(e.target.files[0])}
        accept="image/*"
      />
      <Button size="small" variation="primary">
        Create account
      </Button>
    </Form>
  );
}
