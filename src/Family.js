
import improvise from "./images/improvise.png"
import parents from "./images/parents.png"
import { Link } from "react-router-dom";
import logo from "./images/LabOne-2.png"

export default function Family() {
    return (
        <>
      <div className="img-select">

      <p><Link style={{color: '#01245E', textDecoration: 'none' }} to="/"><img className="logo-fam" src={logo} alt="" /></Link></p>

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
    
       

       <h1 className="bold-health-plans">
        Health insurance plans for you and your family and your 
            employees.</h1>
            <div>
            <p className="light-text-fam">Sign up now to get healthcare at lower cost when the member stays within
         the subscibed plan.</p>
         <Link style={{textDecoration: 'none', color: "white"}} to="/YouFamily">
          <button className="insurance-btn">
            <Link style={{textDecoration: 'none', color: "white"}} to="/YouFamily">
              Get Health Insurance</Link></button></Link>
            </div>
        
        
   

      
  <div className="img-img">
  <img className="parents" src={parents} alt="" />
      <img className="parent-doc" src={improvise} alt="" />
  </div>
     
    </>
  );
}
