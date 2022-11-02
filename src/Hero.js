import model from "./images/model.jpg";
import { Link } from "react-router-dom";

export default function Hero() {
  function form() {
    window.location.href = "index.html";
  }
  return (
    <div className="main-hero">
      <div className="hero">
        <h1 className="medical">MEDICAL</h1>
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis fusce
          platea non sed enim. Faucibus orci tortor orci malesuada pellentesque
          ultrices urna tellus ac. Dictum duis neque lacus ipsum lectus
          tristique. Quam tempus facilisi lectus magna ipsum ac ultrices aliquam
          donec.
        </p>
        <button className="signup">
          <Link to="/Signup">Signup</Link>
        </button>
        <button className="signin">
          <Link to="/Signin">Signin</Link>
        </button>
      </div>

      <img className="hero-img" src={model} alt="" />
    </div>
  );
}
