import React, { useState } from "react";
import axios from "axios";
import sugoogle from "./images/sugoogle.png";
import sufacebook from "./images/sufacebook.png";
import sutwitter from "./images/sutwitter.png";
import logo from "./images/LabOne-2.png";
import model from "./images/model.jpg";
import { Link, useNavigate } from "react-router-dom";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const onChangeHandler = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };
  const onClickHandler = async () => {
    try {
      const response = await axios.post(
        "https://lab-one-hmo.herokuapp.com/api/v1/patients/signin",
        {
          email,
          password,
        }
      );
      console.log(response.data);
      if (response.data.status === "success") {
        navigate("/Doctors");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="signup-main">
      <div className="labone-div">
        <img className="signup-img" src={model} alt="" />
        <div className="lab">
          <p className="h1-labone">LabOne</p>
          <span className="signup-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
            fusce platea non sed enim. Faucibus orci tortor orci malesuada
            pellentesque ultrices urna tellus ac. Dictum duis neque lacus ipsum
            lectus tristique. Quam tempus facilisi lectus magna ipsum ac
            ultrices aliquam donec.
          </span>
        </div>
      </div>

      <div className="main-signleft">
        <img className="signup-logo" src={logo} alt="" />

        <fieldset className="fieldset">
          <legend>Email Address</legend>
          <div className="input">
            <input
              placeholder="glory34@gmail.com"
              value={email}
              onChange={onChangeHandler}
              name="email"
              type="text"
              required
            />
            <span className="material-symbols-outlined">mail</span>
          </div>
        </fieldset>

        <fieldset>
          <legend>Password</legend>
          <div className="input">
            <input
              required
              value={password}
              onChange={onChangeHandler}
              name="password"
              type="password"
            />
            <span className="material-symbols-outlined">visibility_off</span>
          </div>
        </fieldset>
        <p>
          <a className="forget" href="password.html">
            Forget Password
          </a>
        </p>
        <button className="signup-btn" onClick={onClickHandler}>
          Sign In
        </button>

        <div className="header__center2">
          <span className="signinwith">
            <b>Sign in with</b>
          </span>
        </div>
        <div className="socials">
          <img className="sugoogle" src={sugoogle} alt="" />
          <img className="sufacebook" src={sufacebook} alt="" />
          <img className="sutwitter" src={sutwitter} alt="" />
        </div>
      </div>
    </div>
  );
}
