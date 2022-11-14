import logo from "./images/LabOne-2.png";
import improvise from "./images/improvise.png";
import parents from "./images/parents.png";
import { Link } from "react-router-dom";

export default function Family() {
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
            <option>
              <Link to="/Everyone">For your Employees</Link>
            </option>
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

      <h1 className="bold-health-plans">
        Health insurance plans for you and your family and your employees.
      </h1>
      <p className="light-text-fam">
        Sign up now to get healthcare at lower cost when the member stays within
        the subscibed plan.
        <br />
        <button className="insurance-btn">
          <Link to="/Everyone">Get Health Insurance</Link>
        </button>
      </p>

      <img className="parents" src={parents} alt="" />
      <img className="parent-doc" src={improvise} alt="" />
    </>
  );
}
