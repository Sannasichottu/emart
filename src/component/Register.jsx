import React from "react";
import {NavLink} from 'react-router-dom'

const Register = () => {
  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 text-center text-danger py-4 my-4">
            <h1>Register Now</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          
          <div className="col-md-6">
            <form>
              <div class="mb-3">
                <label for="exampleForm" class="form-label">
                  User Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleForm"
                  placeholder="Enter Your Name"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Your Mail-Id"
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
              <div class="mb-3">
                <label for="exampleFormControlpassword" class="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleFormControlpassword"
                  placeholder="Enter Your Password"
                />
              </div>
              
              <NavLink to='/' className="btn btn-outline-danger px-3 ">
                        Register
                </NavLink>
            </form>
          </div>
          <div className="col-md-5 d-flex justify-content-center">
            <img
              src="https://assets-news.housing.com/news/wp-content/uploads/2018/01/24194015/Goa%E2%80%99s-RERA-website-launched-builders-to-register-projects-by-February-24-2018-FB-1200x628-compressed.jpg"
              alt="Contact Us"
              height="400px"
              width="400px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
