import React from "react"
import gog from "./images/gog.png";
import fac from "./images/fac.png";
import twi from "./images/twi.png";
import logo from "./images/LabOne-2.png"
import model from "./images/model.jpg"
import { Link } from "react-router-dom";



export default function Signin() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const navigate = useNavigate();
  // const onChangeHandler = (e) => {
    // if (e.target.name === "email") {
      // setEmail(e.target.value);
    // } else {
      // setPassword(e.target.value);
    // }
  // };
  // const onClickHandler = async () => {
    // try {
      // const { data } = await axios.post(
        // "https://lab-one-hmo.herokuapp.com/api/v1/patients/signin",
        // {
          // email,
          // password,
        // }
      // );
      // if (data.status === "success") {
        // localStorage.setItem("token", data.token);
        // navigate("/Doctors");
      // }
    // } catch (error) {
      // console.log(error);
    // }
  // };
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

      <div className="main-signleft">
      <Link style={{color: 'gray', textDecoration: 'none' }} to="/"><img className="signup-logo" src={logo} alt="" /></Link>

        <fieldset className="fieldset">
          <legend>Email Address</legend>
          <div className="input">
            <input
              placeholder="glory34@gmail.com"
              // value={email}
              // onChange={onChangeHandler}
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
              // value={password}
              // onChange={onChangeHandler}
              name="password"
              type="password"
              placeholder="*************"
            />
            <span className="material-symbols-outlined">visibility_off</span>
          </div>
        </fieldset>
        <p>
          <a className="forget" href="password.html">
            Forget Password
          </a>
        </p>

        <button className="signup-btn">Sign In</button>
  <div class="header__center2"><span className="signinwith"><b>Sign in with</b></span></div>
  <div className="socials">
  <img className="sugoogle" src={gog} alt="" /> 
  <img className="sufacebook" src={fac} alt="" /> 
  <img className="sutwitter" src={twi} alt="" /> 
  </div>
</div>
</div>



    )
}
