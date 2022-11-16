import logo from "./images/LabOne-2.png"
import parent1 from "./images/parent1.png"
import parent2 from "./images/parent2.png"
import parent3 from "./images/parent3.png"
import { Link } from "react-router-dom";



export default function Yourparents() {
    return (
        <>
        <div className="img-select">

<p><Link to="/Home"><img className="logo-fam" src={logo} alt="" /></Link></p>

<div className="select">
<div class="callus">
            <span><button className="contact-btn">Our health Plan</button></span>
            <div className="phone-number">
            <p><Link style={{textDecoration: 'none'}} to="/Employees">For You And Your Family</Link></p>
            <p><Link style={{textDecoration: 'none'}} to="/Yourparents">For Your Parents</Link></p>
            <p><Link to="/Employees">For Your Employees</Link></p>
            </div>
          </div>

          <select className="select2" required>
<option >Support</option>
<option className="call">Call Us: +2348061602274</option>
<option>Whatsapp: +2348061602274</option>
<option>Hello@labonehealt h.com</option>
</select>
<button className="started-btn">Get Started</button>
</div>

</div>
         
        
            <h1 className="everyone-bold">For Your Parents</h1>
        <p className="everyone-text">
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
<button className="business-btn"><Link style={{color: 'white', textDecoration: 'none' }} to="/empremium">Learn More</Link></button>
</div>
</div>

<div className="card-section">
<img className="business-img" src={parent2} alt="" />

<div className="everyone-learn">
    <h2 className="bold-text-fam">Gold Plan</h2>
    <p className="light-text"> An affordable health plan with access to quality
     healthcare for you and your loved ones for as low as ₦5,500 per month.   </p>
<button className="business-btn"><Link style={{color: 'white', textDecoration: 'none' }} to="/Youfamgold">Learn More</Link></button>
</div>
</div>

<div className="card-section">
<img className="business-img" src={parent3} alt="" />

<div className="everyone-learn">
    <h2 className="bold-text">Bronze Plan</h2>
    <p className="light-text">An affordable health plan with access to quality 
    healthcare for you and your loved ones for as low as ₦3,500per month</p>
<button className="business-btn"><Link style={{color: 'white', textDecoration: 'none' }} to="/Youfambronze">Learn More</Link></button>
</div>
</div>

</div>


        </>
    )}