import logo from "./images/LabOne-2.png"
import { Link } from "react-router-dom";



export default function Quaterly() {
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
       
       
       

            
     
       <h2 className="plan-bold">Plans And Pricing</h2>
       <p className="get-any-text">Get any comfortable payment plan. you can get as many plans 
        as you desire which is affordable.with time the plan would be
         frequently updated to suit everyone taste.</p>
         
         <div className="period">
            <span className="monthly"><Link  style={{color: '#04049D', textDecoration: 'none' }} to="/Goldplans">Monthly</Link></span>
            <span className="quaterly"><Link  style={{color: 'white', textDecoration: 'none' }} to="/Quaterly">Quaterly</Link></span>
            <span className="year"><Link  style={{color: '#04049D', textDecoration: 'none' }} to="/Yearly">Yearly</Link></span>
        </div>
        
        <div className="card-main">
         <div className="amount-card">
            <h6 className="card-h6">For You And Your Family</h6>
            <p className="amount-payment"><span className="naira"> ₦ 78,050</span>
            <span className="family-payment">Family Payment<br/>
            Per Month</span></p>
            <button className="card-get-btn">Get</button>
            <p className="tiny-text">Medical checkout recommendation of drug: <span className="million">N1.7million</span> per year</p>
            <p className="tiny-text">Personal medical practionals to be attended to Individually,
             from meal taken to all form of other activities: <span className="million">N2.5million</span> per year</p>
            <p className="tiny-text"><span className="million">N4.8million</span> for surgeries to be performed on patients if advised my doctors.</p>
         </div>

         <div className="amount-card">
            <h6 className="parent-h6">For Your Parents</h6>
            <p className="amount-payment"><span className="naira"> ₦ 83,500</span>
            <span className="family-payment">Family Payment<br/>
            Per Month</span></p>
            <button className="card-get-btn">Get</button>
            <p className="tiny-text">Medical checkout recommendation of drug: <span className="million">N1.7million</span> per year</p>
            <p className="tiny-text">Personal medical practionals to be attended to Individually,
             from meal taken to all form of other activities: <span className="million">N2.5million</span> per year</p>
            <p className="tiny-text"><span className="million">N4.8million</span> for surgeries to be performed on patients if advised my doctors.</p>
         </div>

         <div className="amount-card">
            <h6 className="employee-h6">For Your Employee</h6>
            <p className="amount-payment"><span className="naira"> ₦ 78,050</span>
            <span className="family-payment">Family Payment<br/>
            Per Month</span></p>
            <button className="card-get-btn">Get</button>
            <p className="tiny-text">Medical checkout recommendation of drug: <span className="million">N1.7million</span> per year</p>
            <p className="tiny-text">Personal medical practionals to be attended to Individually,
             from meal taken to all form of other activities: <span className="million">N2.5million</span> per year</p>
            <p className="tiny-text"><span className="million">N4.8million</span> for surgeries to be performed on patients if advised my doctors.</p>
         </div>

         </div>


        </>
    )
}