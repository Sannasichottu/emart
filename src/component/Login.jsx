import React from "react";
import {NavLink} from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 text-center text-secondary py-4 my-4">
            <h1>Welcome</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-5 d-flex justify-content-center">
            <img
              src="https://www.doptlrc.in/sites/default/files/inline-images/login-bg1_0.jpg"
              alt="Contact Us"
              height="400px"
              width="400px"
            />
          </div>
          <div className="col-md-6 py-5">
            <form>
              <div class="mb-3">
                <label for="exampleForm" class="form-label">
                  User Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleForm"
                  placeholder="Your Username"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlpassword" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleFormControlpassword"
                  placeholder="Enter Your Password"
                />
              </div>
              <NavLink to='/' className="d-flex justify-content-center btn btn-outline-dark px-3 ">
                        Login
                </NavLink>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
