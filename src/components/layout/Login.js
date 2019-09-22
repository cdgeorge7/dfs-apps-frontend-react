import React from "react";

export default function Login() {
  return (
    <div className="row login-form-2">
      <div>
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Your Email *"
              defaultValue=""
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Your Password *"
              defaultValue=""
            />
          </div>
          <div className="form-group">
            <input type="submit" className="btnSubmit" value="Login" />
          </div>
          {/* <div className="form-group">
          <a href="#" className="btnForgetPwd" value="Login">
            Forget Password?
          </a>
        </div> */}
        </form>
      </div>
    </div>
  );
}
