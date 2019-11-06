import React, { useState } from "react";
import axios from "axios";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleLogin = event => {
    event.preventDefault();
    const API_URL =
      process.env.NODE_ENV === "production"
        ? process.env.REACT_APP_PROD_API_URL
        : process.env.REACT_APP_DEV_API_URL;
    axios
      .post(
        API_URL + "/login",
        { email: email, password: password },
        { "Content-Type": "application/x-www-form-urlencoded" }
      )
      .then(res => {
        //set token in session
        props.setAuthToken(res.data.token);
        props.setLoggedIn(true);
      })
      .catch(err => {
        setError(true);
      });
  };
  return (
    <div className="row h-100 justify-content-md-center pt-5">
      <div className="col"></div>
      <div className="col-sm col-md">
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email address</label>
            <input
              className="form-control"
              placeholder="Enter email"
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
          {error ? (
            <div className="mt-2">
              <span style={{ color: "red" }}>Wrong Email or Password</span>
            </div>
          ) : null}
        </form>
      </div>
      <div className="col"></div>
    </div>
  );
}
