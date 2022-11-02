import React from "react";
import sugoogle from "./images/sugoogle.png";
import sufacebook from "./images/sufacebook.png";
import sutwitter from "./images/sutwitter.png";
import logo from "./images/LabOne-2.png";
import model from "./images/model.jpg";
import { Link } from "react-router-dom";

export default function Signup() {
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

      <div className="main-left">
        <img className="signup-logo" src={logo} alt="" />
        <fieldset className="fieldset">
          <legend>Name</legend>
          <div className="input">
            <input placeholder="Enter Name" />
            <span class="material-symbols-outlined">account_circle</span>
          </div>
        </fieldset>

        <fieldset className="fieldset">
          <legend>Email Address</legend>
          <div className="input">
            <input placeholder="Name@gmail.com" />
            <span class="material-symbols-outlined">mail</span>
          </div>
        </fieldset>

        <fieldset>
          <legend>Password</legend>
          <div className="input">
            <input placeholder="6+characters,1 capital letter" />
            <span class="material-symbols-outlined">visibility_off</span>
          </div>
        </fieldset>
        <div className="input-terms">
          <input className="checkbox" type="checkbox" />
          <p className="terms">
            Accept{" "}
            <a className="anchr-terms" href="img.com">
              Terms and Conditions
            </a>
          </p>
        </div>
        <button className="signup-btn">Sign up</button>
        <p className="already">
          Already have an account?
          <Link className="anchr-signin" to="/signin">
            <em>
              <b>Sign in</b>
            </em>
          </Link>
        </p>
        <div class="header__center">
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
