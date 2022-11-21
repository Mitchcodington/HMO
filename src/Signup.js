import React from "react";
import gog from "./images/gog.png";
import fac from "./images/fac.png";
import twi from "./images/twi.png";
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
          LabOne Connects Patients to Exceptional Virtual Care . We offer a range of
           online services for patients and providers available on your smartphone, 
           computer or tablet. We also offer HMO to individuals at a very low cost.
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
          <img className="sugoogle" src={gog} alt="" />
          <img className="sufacebook" src={fac} alt="" />
          <img className="sutwitter" src={twi} alt="" />
        </div>
      </div>
    </div>
  );
}
