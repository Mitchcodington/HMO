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
          <img className="logo-fam" src={logo} alt="" />
        </p>

        <div className="select">
          <select className="select1">
            <option className="options">Our health plan</option>
            <option>For you and your family</option>
            <option>For your parents</option>
            <option>For your Employees</option>
          </select>

          <select className="select2" required>
            <option>Support</option>
            <option className="call">Call Us: +2348061602274</option>
            <option>Whatsapp: +2348061602274</option>
            <option>Hello@labonehealt h.com</option>
          </select>
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
