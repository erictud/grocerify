import { useState } from "react";
import Wrapper from "../assets/wrappers/RegisterPage";
import { InputPasswordRow, InputRow } from "../components";

export default function Register() {
  const initialState = {
    username: "",
    email: "",
    password: "",
    // Based on this property we determine whether we show a login form or a signup onr
    isAlreadyAMember: false,
  };

  const [values, setValues] = useState(initialState);

  // functionality to change the login/signup state
  const toggleMember = () => {
    setValues({ ...values, isAlreadyAMember: !values.isAlreadyAMember });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.isAlreadyAMember) {
      // log user in
    } else {
      // sign up user
    }
  };

  return (
    <Wrapper className="full-page">
      <div className="form-container">
        <h2 className="title">{values.isAlreadyAMember ? "Login" : "Signup"}</h2>
        <form className="form" onSubmit={handleSubmit}>
          <div className="inputs-container">
            {/* USERNAME */}
            {values.isAlreadyAMember || (
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
          <button className="btn-block">{values.isAlreadyAMember ? "Login" : "Signup"}</button>
          <p>
            {values.isAlreadyAMember ? "Not a member yet?" : "Already a member?"}
            <button type="button" className="member-btn" onClick={toggleMember}>
              {values.isAlreadyAMember ? "Signup" : "Login"}
            </button>
          </p>
        </form>
      </div>
    </Wrapper>
  );
}
