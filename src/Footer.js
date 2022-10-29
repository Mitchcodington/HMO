import React from "react"
import icon1 from "./images/icon1.png"
import awareness from "./images/awareness.png"
import insurance from "./images/insurance.png"

export default function Footer() {
    return (
        <div className="footer-main">
        <footer>        
<h1 className="footer-head">Convenience</h1>
<div className="text-icon">
<p className="footer-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Turpis fusce platea non sed enim. Faucibus orci tortor orci malesuada pellentesque ultrices urna tellus ac. Dictum duis neque lacus ipsum lectus tristique. Quam tempus facilisi lectus magna ipsum ac ultrices aliquam donec.</p>
<p><img className="call-icon" src={icon1} alt="" /></p>
</div>
<button className="learn-more">Learn more</button>
</footer>

<footer>        
<h1 className="footer-head">Awareness</h1>
<div className="text-icon">
<p className="footer-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Turpis fusce platea non sed enim. Faucibus orci tortor orci malesuada pellentesque ultrices urna tellus ac. Dictum duis neque lacus ipsum lectus tristique. Quam tempus facilisi lectus magna ipsum ac ultrices aliquam donec.</p>
<p><img className="call-icon" src={awareness} alt="" /></p>
</div>
<button className="learn-more">Learn more</button>
</footer>

<footer>        
<h1 className="footer-head">Insurance</h1>
<div className="text-icon">
<p className="footer-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Turpis fusce platea non sed enim. Faucibus orci tortor orci malesuada pellentesque ultrices urna tellus ac. Dictum duis neque lacus ipsum lectus tristique. Quam tempus facilisi lectus magna ipsum ac ultrices aliquam donec.</p>
<p><img className="call-icon" src={insurance} alt="" /></p>
</div>
<button className="learn-more">Learn more</button>
</footer>
</div>
    )
}