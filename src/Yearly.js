import logo from "./images/LabOne-2.png"
import { Link } from "react-router-dom";



export default function Yearly() {
    return (
        <>
        
        <div className="img-select">

        <p><img className="logo-fam" src={logo} alt="" /></p>

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
       
       

            
     
       <h2 className="plan-bold">Plans And Pricing</h2>
       <p className="get-any-text">Get any comfortable payment plan. you can get as many plans 
        as you desire which is affordable.with time the plan would be
         frequently updated to suit everyone taste.</p>
         
         <div className="period">
            <span className="monthly-year"><Link  style={{color: '#04049D', textDecoration: 'none' }} to="/Goldplans">Monthly</Link></span>
            <span className="quaterly-year"><Link  style={{color: '#04049D', textDecoration: 'none' }} to="/Quaterly">Quaterly</Link></span>
            <span className="yearly-year"><Link  style={{color: 'white', textDecoration: 'none' }} to="/Yearly">Yearly</Link></span>
        </div>
        
        <div className="card-main">
         <div className="amount-card">
            <h6 className="card-h6">For You And Your Family</h6>
            <p className="amount-payment"><span className="naira"> ₦ 278,050</span>
           </p>
            
            <p className="tiny-text">Medical checkout recommendation of drug: <span className="million">N1.7million</span> per year</p>
            <p className="tiny-text">Personal medical practionals to be attended to Individually,
             from meal taken to all form of other activities: <span className="million">N2.5million</span> per year</p>
            <p className="tiny-text"><span className="million">N4.8million</span> for surgeries to be performed on patients if advised my doctors.</p>
            <button className="card-get-btn"><Link style={{color: 'white', textDecoration: 'none' }} to="/Payment1">Get</Link></button>
         </div>

         <div className="amount-card">
            <h6 className="parent-h6">For Your Parents</h6>
            <p className="amount-payment"><span className="naira"> ₦ 283,500</span></p>
            
            <p className="tiny-text">Medical checkout recommendation of drug: <span className="million">N1.7million</span> per year</p>
            <p className="tiny-text">Personal medical practionals to be attended to Individually,
             from meal taken to all form of other activities: <span className="million">N2.5million</span> per year</p>
            <p className="tiny-text"><span className="million">N4.8million</span> for surgeries to be performed on patients if advised my doctors.</p>
            <button className="card-get-btn"><Link style={{color: 'white', textDecoration: 'none' }} to="/Payment1">Get</Link></button>
         </div>

         <div className="amount-card">
            <h6 className="employee-h6">For Your Employee</h6>
            <p className="amount-payment"><span className="naira"> ₦ 278,050</span>
            </p>
            
            <p className="tiny-text">Medical checkout recommendation of drug: <span className="million">N1.7million</span> per year</p>
            <p className="tiny-text">Personal medical practionals to be attended to Individually,
             from meal taken to all form of other activities: <span className="million">N2.5million</span> per year</p>
            <p className="tiny-text"><span className="million">N4.8million</span> for surgeries to be performed on patients if advised my doctors.</p>
            <button className="card-get-btn"><Link style={{color: 'white', textDecoration: 'none' }} to="/Payment1">Get</Link></button>
         </div>

         </div>


        </>
    )
}