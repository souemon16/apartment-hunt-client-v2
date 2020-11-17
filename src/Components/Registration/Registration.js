import React, { useContext, useState } from "react";
import "./Registration.css";
import Navbar from "../Navbar/Navbar";
import fb from "../../Images/logos/Group 2.png";
import google from "../../Images/logos/Group 573.png";
import { Link, useHistory, useLocation } from "react-router-dom";
import auth, { googleProvider } from "../Login/firebase";
import { useForm } from "react-hook-form";
import { usercontext } from "../../App";

const Registration = () => {
  const [userinfo, setUserinfo] = useContext(usercontext);
  const { register, handleSubmit, errors } = useForm();
  const [err, setErr] = useState("");
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  const signupwithgoogle = () => {
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
    if (data.password === data.confirmPassword) {
      auth
        .createUserWithEmailAndPassword(data.email, data.password)
        .then((res) => {
          userinfo.email = res.user.email;
          history.replace(from);
        })
        .catch((err) => alert(err));
    } else {
      setErr("password did not match with confirm password");
    }
  };
  return (
    <section className="registration container-fluid">
      <Navbar />
      <div className="body container d-flex flex-column align-items-center">
        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
          <h2>Registration</h2>
          <input
            type="text"
            name="firstName"
            id="first-name"
            className="form-control"
            placeholder="First Name"
            ref={register({ required: true })}
          />
          {errors.firstName && (
            <span style={{ color: "red", fontSize: "22px" }}>
              firstName is required
            </span>
          )}
          <input
            type="text"
            name="lastName"
            id="last-name"
            className="form-control"
            placeholder="Last Name"
            ref={register({ required: true })}
          />
          {errors.lastName && (
            <span style={{ color: "red", fontSize: "22px" }}>
              lastname is required
            </span>
          )}
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            placeholder="Username or Email"
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
          <input
            type="password"
            name="confirmPassword"
            id="confirm-password"
            className="form-control"
            placeholder="Confirm Password"
            ref={register({ required: true })}
          />
          {errors.confirmPassword && (
            <span style={{ color: "red", fontSize: "22px" }}>
              confirm password is required
            </span>
          )}
          <div style={{ color: "red", fontSize: "22px" }}>{err}</div>
          <button type="submit" className="btn btn-submit mb-2">
            Create an account
          </button>
          <p className="text-center mt-5">
            Already have an account?{" "}
            <Link className="link" to="/login">
              Login
            </Link>
          </p>
        </form>

        <p className="hr-text">Or</p>
        <button className="btn auth-login">
          <img src={fb} alt="fb" />
          <p>Continue with Facebook</p>
        </button>
        <button className="btn auth-login" onClick={signupwithgoogle}>
          <img src={google} alt="google" />
          <p>Continue with Google</p>
        </button>
      </div>
    </section>
  );
};

export default Registration;
