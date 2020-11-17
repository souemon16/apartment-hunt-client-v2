import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Login.css";
import fb from "../../Images/logos/Group 2.png";
import google from "../../Images/logos/Group 573.png";
import auth, { googleProvider } from "./firebase";
import { useForm } from "react-hook-form";

import { useContext } from "react";
import { usercontext } from "../../App";
const Login = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  const [userinfo, setUserinfo] = useContext(usercontext);

  const signinwithgoogle = () => {
    auth
      .signInWithPopup(googleProvider)
      .then((res) => {
        userinfo.email = res.user.email;
        history.replace(from);
      })
      .catch((err) => alert(err));
  };
  const onSubmit = (data) => {
    console.log(data);

    auth
      .signInWithEmailAndPassword(data.email, data.password)
      .then((res) => {
        userinfo.email = res.user.email;

        history.replace(from);
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className="login">
      <Navbar />
      <div className="body container d-flex flex-column align-items-center">
        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
          <h2>Login</h2>
          <input
            type="text"
            name="email"
            id="email"
            className="form-control"
            placeholder="Email"
            ref={register({ required: true })}
          />
          {errors.email && (
            <span style={{ color: "red", fontSize: "22px" }}>
              email is required
            </span>
          )}
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
            placeholder="Password"
            ref={register({ required: true })}
          />
          {errors.password && (
            <span style={{ color: "red", fontSize: "22px" }}>
              password is required
            </span>
          )}
          <div className="mt-4 d-flex justify-content-between">
            <div class="form-check d-flex">
              {/* <input type="checkbox" class="form-check-input" id="remember-me" /> */}

              <label class="form-check-label" for="remember-me">
                Remember Me
              </label>
            </div>
            <Link className="forgot-pass link" to="/">
              {" "}
              Forgot Password{" "}
            </Link>
          </div>
          <button type="submit" className="btn btn-submit">
            Login
          </button>
          <p className="text-center mt-4">
            Don't Have an account?{" "}
            <Link className="link" to="/registration">
              Create an account
            </Link>
          </p>
        </form>

        <p className="hr-text">Or</p>
        <button className="btn auth-login">
          <img src={fb} alt="fb" />
          <p>Continue with Facebook</p>
        </button>
        <button className="btn auth-login" onClick={signinwithgoogle}>
          <img src={google} alt="google" />
          <p>Continue with Google</p>
        </button>
      </div>
    </section>
  );
};

export default Login;
