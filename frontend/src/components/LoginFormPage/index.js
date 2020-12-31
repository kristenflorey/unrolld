import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import "./LoginForm.css"

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);


  // REDIRECT LOGIN
  if (sessionUser) return <Redirect to="/profile" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch((res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      });
  };

  return (
    <>
      <div className="login-form">
        <form onSubmit={handleSubmit}>
        <p>SIGN IN</p>
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
            <input
              type="text"
              value={credential}
              placeholder="Email"
              onChange={(e) => setCredential(e.target.value)}
              required
            />
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          <button className="login-submit"type="submit">LOG IN</button>
        </form>
      </div>
    </>
  );
}

export default LoginFormPage;
