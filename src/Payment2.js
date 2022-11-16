

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
<p className="note"><b>Note:</b> all fields are required</p>
<input type="text"/>
< div className="field-input">
    <div>
        <p>Full Name:</p>
        <input className="name-input" type="text" />
    </div>

    <div>
        <p>Email Address:</p>
        <input className="email-input" type="text" />
    </div>
</div>
< div className="field-input">
    <div>
        <p>Phone Number:</p>
        <input className="name-input" type="text" />
    </div>

    <div>
        <p>Age:</p>
        <input className="email-input" type="text" />
    </div>
</div>

< div className="field-input">
    <div>
        <p>Labone ID:</p>
        <input className="name-input" type="text" />
    </div>

    <div>
        <p>Discount Code (if any):</p>
        <input className="email-input" type="text" />
    </div>
</div>
<p className="tems">i agree to labone HMO,<a href="terms">the plans and conditions.</a> i have gone throught
     all the <a href="plans">necessary health plans and benefits.</a></p>
 <p className="please-note"><b>Please note:</b><span className="please-note-span"> your laboneHMO card can only be accessed with the labone 
    mobile app on your mobile devices. thank you</span></p>    

    <button className="pay-btn"><Link style={{textDecoration: 'none', color:"white"}} to="/Payment3">N24,700 Payment</Link></button>

        </>
    )
}