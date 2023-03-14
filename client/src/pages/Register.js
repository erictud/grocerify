import { useState } from "react";
import Wrapper from "../assets/wrappers/RegisterPage";
import { Alert, InputPasswordRow, InputRow } from "../components";
import { useAppContext } from "../context/appContext";

export default function Register() {
  const initialState = {
    username: "",
    email: "",
    password: "",
    // Based on this property we determine whether we show a login form or a signup onr
    isAlreadyMember: false,
  };

  // global context values
  const { showAlert, displayAlert, isLoading, logIn, signUp } = useAppContext();

  const [values, setValues] = useState(initialState);

  // functionality to change the login/signup state
  const toggleMember = () => {
    setValues({ ...values, isAlreadyMember: !values.isAlreadyMember });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, username } = values;
    //check values validity
    if (!email.trim() || !password.trim()) {
      displayAlert({ alertType: "error", alertText: "Please provide all values!" });
      return;
    }
    if (values.isAlreadyMember) {
      await logIn({ email, password });
    } else {
      // check values validity
      if (!username.trim()) {
        displayAlert({ alertType: "error", alertText: "Please provide all values!" });
        return;
      } else if (password.trim().length < 8) {
        displayAlert({
          alertType: "error",
          alertText: "Password must have at least 8 characters",
        });
        return;
      } else if (username.trim().length < 4) {
        displayAlert({
          alertType: "error",
          alertText: "Username must have at least 4 characters",
        });
        return;
      }
      await signUp({ email, password, username });
    }
  };

  return (
    <Wrapper className="full-page">
      <div className="form-container">
        <h2 className="title">{values.isAlreadyMember ? "Login" : "Signup"}</h2>
        {showAlert && <Alert />}
        <form className="form" onSubmit={handleSubmit}>
          <div className="inputs-container">
            {/* USERNAME */}
            {values.isAlreadyMember || (
              <InputRow
                handleChange={handleChange}
                type="text"
                name="username"
                value={values.username}
              />
            )}
            {/* EMAIL */}
            <InputRow handleChange={handleChange} type="email" name="email" value={values.email} />
            {/* PASSWORD */}
            <InputPasswordRow handleChange={handleChange} value={values.password} name="password" />
          </div>
          <button className="btn-block">{values.isAlreadyMember ? "Login" : "Signup"}</button>
          <p>
            {values.isAlreadyMember ? "Not a member yet?" : "Already a member?"}
            <button
              type="button"
              className="member-btn"
              onClick={toggleMember}
              disabled={isLoading}
            >
              {values.isAlreadyMember ? "Signup" : "Login"}
            </button>
          </p>
        </form>
      </div>
    </Wrapper>
  );
}
