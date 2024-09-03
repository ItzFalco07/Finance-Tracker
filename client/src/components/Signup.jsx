import React, { useState } from "react";
import axios from "axios";

const Signup = ({ SignupSwitch }) => {
  // State management for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send signup data to the server
      const response = await axios.post(
        "https://budgetbuddy-cplc.onrender.com/user/register",
        formData,
        { withCredentials: true } // Send credentials (cookies)
      );
      console.log("Signup successful", response.data);
    } catch (error) {
      console.error("Signup failed", error.response.data);
    }
  };

  return (
    <div id="Form__Con" style={{ width: "100%", height: "100%" }}>
      <form id="form" className="relative" onSubmit={handleSubmit}>
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
            type="text"
            id="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div data-mdb-input-init className="form-outline mb-4">
          <label className="form-label" htmlFor="email">
            Email address
          </label>
          <input
            placeholder="Enter Email"
            type="email"
            id="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div data-mdb-input-init className="form-outline mb-4">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            placeholder="Enter Password"
            type="password"
            id="password"
            className="form-control"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <button
          data-mdb-ripple-init
          type="submit"
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
                alt="Google Icon"
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
