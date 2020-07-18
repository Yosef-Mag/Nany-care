import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Signup() {
  const [customerSignUp, setCustomerSignUp] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const handleChange = (event) => {
    setCustomerSignUp({
      ...customerSignup,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/Customer/SignUp", customerSignup)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  // Also remember to give a name attribute to each input that corresponds to a field in the state. (Which looks like you already have)

  return (
    <div className="container">
      <form className="white" onSubmit={handleSubmit}>
        <h5 className="grey-text.text-darken-3">Sign Up With Email</h5>
        <div className="input-field">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={customerSignUp.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-field">
          <button className="btn blue darken-3" type="submit">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
export default Signup;
