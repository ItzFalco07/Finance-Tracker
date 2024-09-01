import React from "react";

const Signup = ({ SignupSwitch }) => {
  return (
    <div id="Form__Con" width="100%" height="100%">
      <form id="form" className="relative">
        <h2 className="absolute heading-top">Signup</h2>
        <button
          onClick={() => SignupSwitch(0)}
          id="btn-cross"
          className="absolute corner btn btn-outline-primary rounded-circle"
          type="button"
        >
          <h4 id="cross" className="bi">
            X
          </h4>
          <span className="visually-hidden">Dismiss</span>
        </button>

        <div data-mdb-input-init className="form-outline mb-4">
          <label className="form-label" htmlFor="Name">
            Name
          </label>
          <input
            placeholder="John Doe"
            type="email"
            id="Name"
            className="form-control"
          />
        </div>

        <div data-mdb-input-init className="form-outline mb-4">
          <label className="form-label" htmlFor="form2Example1">
            Email address
          </label>
          <input
            placeholder="Enter Email"
            type="email"
            id="form2Example1"
            className="form-control"
          />
        </div>

        <div data-mdb-input-init className="form-outline mb-4">
          <label className="form-label" htmlFor="form2Example2">
            Password
          </label>
          <input
            placeholder="Enter Password"
            type="password"
            id="form2Example2"
            className="form-control"
          />
        </div>

        <button
          data-mdb-ripple-init
          type="button"
          className="btn btn-primary btn-block mb-4"
        >
          Sign Up
        </button>

        <div id="idk" className="text-center">
          <p>
            <b>OR</b>
          </p>

          <a href="https://budgetbuddy-cplc.onrender.com/auth">
            <button
              id="google"
              data-mdb-ripple-init
              type="button"
              className="btn btn-primary center btn-floating mx-1"
            >
              <img
                src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-color-icon.png"
                width="30px"
              />
              <h5>Signup With Google</h5>
            </button>
          </a>
        </div>
      </form>
    </div>
  );
};

export default Signup;
