import { increment, decrement } from "./Actions";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import logo from "./images/LabOne-2.png"



export default function Paymentyear() {

    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();


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
<button className="started-red-btn">Get Started</button>
</div>

</div>

<p className="frequent-text">Frequent Payment Of Health Insurance Plan</p>
<div className="choice-period">
            <h4>Health Plan You Choosed :</h4>
        <div className="pay-period">
            <span className="month-payment"><Link  style={{color:'#04049D' , textDecoration: 'none' }} to="/Payment1">Monthly</Link></span>
            <span className="quater"><Link  style={{color:'#04049D' , textDecoration: 'none' }} to="/Paymentquater">Quaterly</Link></span>
            <span className="year-payment"><Link  style={{color: 'white', textDecoration: 'none' }} to="/Paymentyear">Yearly</Link></span>
        </div>
</div>

<div className="choice-period">
            <h4 className="row2">Health Plan :</h4>
            <h4 className="row2">Quantity Of Insurance Plan Made</h4>
            <p className="row2">Total Parkage</p>
</div>

<div className="choice-period">
            <p className="row3">Payment<br/><b>Unit Price:
                <span className="per-unit">249,050</span></b></p>
        <div className="main-row3">
            <div className="incre-decre">
            <Link><span className="decre-btn"  onClick={() => dispatch(decrement())} style={{color: 'red'}} class="material-symbols-outlined">
do_not_disturb_on
</span></Link>
        <p  style={{color: 'red'}} className="symbol">1</p>
       <Link><span className="incre-btn" onClick={() => dispatch(increment())} style={{color: 'red'}} class="material-symbols-outlined">
add_circle
</span></Link>
            </div>

      
        </div>
        <h4 className="row3">N<span className="per-month"></span>{counter + 2000}/Month</h4>
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