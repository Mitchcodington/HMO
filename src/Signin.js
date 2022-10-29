import React from "react"
import sugoogle from "./images/sugoogle.png"
import sufacebook from "./images/sufacebook.png"
import sutwitter from "./images/sutwitter.png"
import logo from "./images/LabOne-2.png"
import model from "./images/model.jpg"

export default function Signin() {
 
    return (
        <div className="signup-main">
        <div className="labone-div" >
        <img className="signup-img" src={model} alt="" />
          <div className="lab"><p className="h1-labone">LabOne</p>
      <span className="signup-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Turpis fusce platea non sed enim. Faucibus orci tortor orci 
malesuada pellentesque ultrices urna tellus ac. Dictum duis 
neque lacus ipsum lectus tristique. Quam tempus facilisi 
lectus magna ipsum ac ultrices aliquam donec.</span></div>
    </div>

   < div className="main-signleft"> 
   <img className="signup-logo" src={logo} alt="" /> 

<fieldset className="fieldset">
  <legend>Email Address</legend> 
  <div className="input">
   <input placeholder="glory34@gmail.com"/><span class="material-symbols-outlined">
mail
</span>
 </div> 
</fieldset>

<fieldset>
  <legend>Password</legend> 
  <div className="input">
   <input placeholder="**********************"/><span class="material-symbols-outlined">
visibility_off
</span>
 </div> 
</fieldset>
<p ><a className="forget" href="password.html">Forget Password</a></p>
  <button className="signup-btn">Sign up</button>
 
  <div class="header__center2"><span className="signinwith"><b>Sign in with</b></span></div>
  <div className="socials">
  <img className="sugoogle" src={sugoogle} alt="" /> 
  <img className="sufacebook" src={sufacebook} alt="" /> 
  <img className="sutwitter" src={sutwitter} alt="" /> 
  </div>
</div>


</div>
    )
}
