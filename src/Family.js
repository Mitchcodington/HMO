
import improvise from "./images/improvise.png"
import parents from "./images/parents.png"
import { Link } from "react-router-dom";
import logo from "./images/LabOne-2.png"

export default function Family() {
    return (
        <>
      <div className="img-select">

        <p><img className="logo-fam" src={logo} alt="" /></p>

        <div className="select">
        <div class="callus">
                    <span><button className="contact-btn">Our health Plan</button></span>
                    <div className="phone-number">
                    <p><Link style={{textDecoration: 'none'}} to="/YouFamily">For You And Your Family</Link></p>
                    <p><Link to="/Yourparents">For Your Parents</Link></p>
                    <p><Link to="/Employees">For Your Employees</Link></p>
                    </div>
                  </div>

                  <select className="select2" required>
                  <option >Support</option>
                    <option className="call">Call Us: +2348061602274</option>
                    <option>Whatsapp: +2348061602274</option>
                    <option>Hello@labonehealt h.com</option>
                </select>
        
        </div>

        </div>
    
       

       <h1 className="bold-health-plans">
        Health insurance plans for you and your family and your 
            employees.</h1>
        <p className="light-text-fam">Sign up now to get healthcare at lower cost when the member stays within
         the subscibed plan.<br/>
         <button className="insurance-btn"><Link  style={{color: 'white', textDecoration: 'none' }} to="/Everyone">Get Health Insurance</Link></button>
        </p>
        

        <img className="parents" src={parents} alt="" />
        <img className="parent-doc" src={improvise} alt="" />

        </>
    )
}