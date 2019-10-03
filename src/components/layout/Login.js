import React, { useState } from "react";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const goodEmail = "dadoo@x.com";
  const goodPass = "abcdefg";

  const handleLogin = event => {
    event.preventDefault();
    if (email === goodEmail && password === goodPass) {
      props.setLoggedIn(true);
    } else {
      setError(true);
    }
  };
  return (
    <div className="pt-5">
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {error ? (
        <div>
          <span style={{ color: "red" }}>Wrong Email or Password</span>
        </div>
      ) : null}
    </div>
  );
}
