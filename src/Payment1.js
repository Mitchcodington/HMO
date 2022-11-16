

import { Link } from "react-router-dom";
import logo from "./images/LabOne-2.png"

export default function Payment() {
    return (
        <>
        <div className="img-select">

<p><img className="logo-fam" src={logo} alt="" /></p>

<div className="select">
<div class="callus">
            <span><button className="contact-btn">Our health Plan</button></span>
            <div className="phone-number">
            <p><Link style={{textDecoration: 'none'}} to="/YouFamily">For You And Your Family</Link></p>
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
<button className="get-strd-btn">Get Started</button>
</div>

</div>

<p className="frequent-text">Frequent Payment Of Health Insurance Plan</p>
<div className="choice-period">
            <h4>Health Plan You Choosed :</h4>
        <div className="pay-period">
            <span className="month"><Link  style={{color: 'white', textDecoration: 'none' }} to="/Goldplans">Monthly</Link></span>
            <span className="quater"><Link  style={{color: '#04049D', textDecoration: 'none' }} to="/Quaterly">Quaterly</Link></span>
            <span className="year"><Link  style={{color: '#04049D', textDecoration: 'none' }} to="/Yearly">Yearly</Link></span>
        </div>
</div>

<div className="choice-period">
            <h4 className="row2">Health Plan :</h4>
            <h4 className="row2">Quantity Of Insurance Plan Made</h4>
            <p className="row2">Total Parkage</p>
</div>

<div className="choice-period">
            <p className="row3">Payment<br/><b>Unit Price:4,050</b></p>
        <div className="main-row3">
        <span style={{color: 'red'}} class="material-symbols-outlined">
do_not_disturb_on
</span>
        <p  style={{color: 'red'}} className="symbol">5</p>
        <span style={{color: 'red'}} class="material-symbols-outlined">add_circle</span>
        </div>
        <h4 className="row3">N4,050/Month</h4>
</div>


       <div className="total">
        <p>Total</p>
        <p><b>N24,700</b></p>
       </div>
       <div className="pay-made">
        <p><b>Payment Made</b></p>
        <p><b>N24,700</b></p>
       </div>

  <div className="button">
    <button className="bck-btn"><Link  style={{color: '#04049D', textDecoration: 'none' }} to="/Goldplans">Back</Link></button>
    <button className="next-btn"><Link  style={{color: 'white', textDecoration: 'none' }} to="/Payment2"><b>Next</b></Link></button>
  </div>

        </>
    )
}