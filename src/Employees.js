import logo from "./images/LabOne-2.png"
import business from "./images/business.png"
import parents2 from "./images/parents2.png"
import family1 from "./images/family1.png"
import { Link } from "react-router-dom";



export default function Employees() {
    return (
        <>
        <div className="img-select">
        <p><img className="logo-fam" src={logo} alt="" /></p>
        
        <div className="select">
        <select className="select1">
        <option className="options">Our health plan</option>
        <option>For you and your family</option>
        <option>For your parents</option>
        <option>For your Employees</option>
        </select>

        <select className="select2" required>
        <option >Support</option>
        <option className="call">Call Us: +2348061602274</option>
        <option>Whatsapp: +2348061602274</option>
        <option>Hello@labonehealt h.com</option>
        </select>
        <button className="started-btn">Get Started</button>
        </div>
        </div>
         
        
            <h1 className="everyone-bold">For Your Employees</h1>
        <p className="everyone-text">
        Your employees will be happier and healthier on our health insurance plans</p>


<div className="card-container">
<div className="card-section">
<img className="business-img" src={business} alt="" />

<div className="everyone-learn">
    <h2 className="bold-text1">Premium Plan</h2>
    <p className="light-text"> 
    Get a health cover that is designed to suit your specific needs and enjoy access to quality 
    healthcare and superior service delivery for as low as ₦4,050 per month. </p>
<button className="business-btn"><Link to="/empremium">Learn More</Link></button>
</div>
</div>

<div className="card-section">
<img className="business-img" src={family1} alt="" />

<div className="everyone-learn">
    <h2 className="bold-text-fam">Gold Plan</h2>
    <p className="light-text"> An affordable health plan with access to quality 
    healthcare for you and your loved ones for as low as ₦2,050 per month.  </p>
<button className="business-btn">Learn More</button>
</div>
</div>

<div className="card-section">
<img className="business-img" src={parents2} alt="" />

<div className="everyone-learn">
    <h2 className="bold-text">Bronze Plan</h2>
    <p className="light-text">An affordable health plan with access to quality
     healthcare for you and your loved ones for as low as ₦1,550 per month</p>
<button className="business-btn">Learn More</button>
</div>
</div>

</div>


        </>
    )}