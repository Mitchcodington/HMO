import logo from "./images/LabOne-2.png"
import youfam1 from "./images/youfam1.png"
import youfam2 from "./images/youfam2.png"
import youfam3 from "./images/youfam3.png"
import { Link } from "react-router-dom";



export default function YouFamily() {
    return (
        <>
        <div className="img-select">

<p><img className="logo-fam" src={logo} alt="" /></p>

<div className="select">
<div class="callus">
            <span><button className="contact-btn">Our health Plan</button></span>
            <div className="phone-number">
            <p><Link style={{textDecoration: 'none'}} to="/Employees">For You And Your Family</Link></p>
            <p><Link to="/Employees">For Your Parents</Link></p>
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
         
        
            <h1 className="everyone-bold">For You And Your Family</h1>
        <p className="everyone-text">
        <b>Affordable health insurace for individuals and families</b></p>


<div className="card-container">
<div className="card-section">
<img className="business-img" src={youfam1} alt="" />

<div className="everyone-learn">
    <h2 className="bold-text1">Premium Plan</h2>
    <p className="light-text"> 
    Get a health cover that is designed to suit your specific needs and enjoy access to quality 
    healthcare and superior service delivery for as low as ₦4,050 per month. </p>
<button className="business-btn"><Link style={{color: 'white', textDecoration: 'none' }} to="/empremium">Learn More</Link></button>
</div>
</div>

<div className="card-section">
<img className="business-img" src={youfam2} alt="" />

<div className="everyone-learn">
    <h2 className="bold-text-fam">Gold Plan</h2>
    <p className="light-text"> An affordable health plan with access to quality 
    healthcare for you and your loved ones for as low as ₦2,050 per month.  </p>
<button className="business-btn"><Link style={{color: 'white', textDecoration: 'none' }} to="/Youfamgold">Learn More</Link></button>
</div>
</div>

<div className="card-section">
<img className="business-img" src={youfam3} alt="" />

<div className="everyone-learn">
    <h2 className="bold-text">Bronze Plan</h2>
    <p className="light-text">An affordable health plan with access to quality
     healthcare for you and your loved ones for as low as ₦1,550 per month</p>
<button className="business-btn"><Link style={{color: 'white', textDecoration: 'none' }} to="/Youfambronze">Learn More</Link></button>
</div>
</div>

</div>


        </>
    )}