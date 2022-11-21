import logo from "./images/LabOne-2.png";
import business from "./images/business.png";
import parents2 from "./images/parents2.png";
import family1 from "./images/family1.png";
import { Link } from "react-router-dom";

export default function Everyone() {
  return (
    <>
      <div className="img-select">
        <p>
        <Link style={{color: '#01245E', textDecoration: 'none' }} to="/"><img className="logo-fam" src={logo} alt="" /></Link>
        </p>

        <div className="select">
<div class="callus">
            <span><button className="contact-btn">Our health Plan</button></span>
            <div className="phone-number">
            <p><Link style={{textDecoration: 'none', color: "blue"}} to="/YouFamily">For You And Your Family</Link></p>
            <p><Link style={{textDecoration: 'none' , color: "blue"}} to="/Yourparents">For Your Parents</Link></p>
            <p><Link style={{textDecoration: 'none' , color: "blue"}} to="/Employees">For Your Employees</Link></p>
            </div>
          </div>

          <div class="callus">
            <span><button className="contact-btn">Support</button></span>
            <div className="phone-number">
            <p>Call Us: +2348061602274</p>
            <p>Whatsapp:+2348061602274</p>
            <p style={{ color: "yellowgreen"}}>Hello@labonehealth.com</p>
            </div>
          </div>
<button className="started-btn">Get Started</button>
</div>

</div>

      <h1 className="everyone-bold">Health plan for everyone</h1>
      <p className="everyone-text">
        Healt h insurance for business convenience and proper management of your
        organization.
      </p>

      <div className="card-container">
        <div className="card-section">
          <img className="business-img" src={business} alt="" />

          <div className="everyone-learn">
            <h2 className="bold-text1">For Your Business</h2>
            <p className="light-text">
              {" "}
              Health insurance for business convenience and proper management of
              your organization.{" "}
            </p>
            <button className="business-btn">
              <Link to="/Employees">Learn More</Link>
            </button>
          </div>
        </div>

        <div className="card-section">
          <img className="business-img" src={family1} alt="" />

          <div className="everyone-learn">
            <h2 className="bold-text-fam">For You & Your Family</h2>
            <p className="light-text">
              {" "}
              Health insurance for business convenience and proper management of
              your organization.{" "}
            </p>
            <button className="business-btn">Learn More</button>
          </div>
        </div>

        <div className="card-section">
          <img className="business-img" src={parents2} alt="" />

          <div className="everyone-learn">
            <h2 className="bold-text">For Your Parents</h2>
            <p className="light-text">
              {" "}
              Health insurance for business convenience and proper management of
              your organization.{" "}
            </p>
            <button className="business-btn">Learn More</button>
          </div>
        </div>
      </div>
    </>
  );
}
