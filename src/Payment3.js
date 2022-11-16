
import card from "./images/card.png"
import transfer from "./images/transfer.png"
import logo from "./images/LabOne-2.png"
import { Link } from "react-router-dom";

export default function Payment() {
    return (
        <>
 <div className="main-payment3">      
<div className="logo-mail-pay">
<p><img className="logo-pay3" src={logo} alt="" /></p>
<div className="email-pay">
    <p className="email-pay" style={{color:"#868484B8"}}>OnieR45@gmail.com</p>
    <p className="ngn">pay <span style={{ color:"red"}}><b>NGN 24,700</b></span></p>
</div>

</div>
<h6>pay with</h6>
<div className="card-transfer">
<div className="card-text">
<p><img className="card" src={card} alt="" /></p>
<p>Card</p>
</div>
<div className="transfer-text">
<p><img className="transfer" src={transfer} alt="" /></p>
<p className="trans">Transfer</p>
</div>
</div>
<div className="input-card-num">
<p className="card-num-text">CARD NUMBER</p>
<input className="card-number" type="text" placeholder=" 0000 0000 0000 0000"/>
</div>
<div className="exp-cvv">
<div className="input-card-exp">
<p className="card-num-text">CARD EXPIRY</p>
<input className="card-number" type="text" placeholder="MM/YY"/>
</div>

<div className="input-card-exp">
<p className="card-num-text">CVV</p>
<input className="card-number" type="text" placeholder="123"/>
</div>
</div>
<button className="card-pay-btn"><b><Link style={{color: 'white', textDecoration: 'none' }} to="/Doctors">pay NGN 24,700</Link></b></button>
<p className="tiny-text-under">pay with all card.</p>
</div>

        </>
    )
}