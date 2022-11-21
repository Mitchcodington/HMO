import logo from "./images/LabOne-2.png"
import parent1 from "./images/parent1.png"
import parent2 from "./images/parent2.png"
import parent3 from "./images/parent3.png"
import { Link } from "react-router-dom";
import Getbutton from "./Getbutton"
import Plangold from "./Plangold"
import Planbronze from "./Planbronze"



export default function Yourparents() {
    return (
        <>
        <div className="img-select">

<p><Link to="/"><img className="logo-fam" src={logo} alt="" /></Link></p>

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
        
            <h1 className="everyone-bold-parent">For Your Parents</h1>
        <p className="everyone-text-parent">
        <b>Affordable health insurance for people with pre-existing conditions like
 hypertension, diabetes, arthritis, and peptic ulcer</b></p>


<div className="card-container">
<div className="card-section">
<img className="business-img" src={parent1} alt="" />

<div className="everyone-learn">
    <h2 className="bold-text1">Premium Plan</h2>
    <p className="light-text"> 
    Get a health cover that is designed to suit your specific needs and enjoy access to quality 
    healthcare and superior service delivery for as low as ₦7,500 per month. </p>
    <Getbutton/>
</div>
</div>

<div className="card-section">
<img className="business-img" src={parent2} alt="" />

<div className="everyone-learn">
    <h2 className="bold-text-fam">Gold Plan</h2>
    <p className="light-text"> An affordable health plan with access to quality
     healthcare for you and your loved ones for as low as ₦5,500 per month.   </p>
     <Plangold/>
</div>
</div>

<div className="card-section">
<img className="business-img" src={parent3} alt="" />

<div className="everyone-learn">
    <h2 className="bold-text">Bronze Plan</h2>
    <p className="light-text">An affordable health plan with access to quality 
    healthcare for you and your loved ones for as low as ₦3,500per month</p>
    <Planbronze/>
</div>
</div>

</div>


        </>
    )}