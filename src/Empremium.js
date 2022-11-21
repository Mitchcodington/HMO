import premium from "./images/premium.png"
import { Link } from "react-router-dom";



export default function Empremium() {
    return (
        <div className="premium-body">
     <div className="premium-main">
     <img className="premium"  src={premium} alt="" /> 
     <h2 className="premium-bold">PREMIUM PLAN<br/>
     <span className="premium-light">Doctors Available For This Plan :</span></h2>

<div className="premium-mid">
     <ul className="premium-list">
        <li>Allergist</li>
        <li>Cardiologist</li>
        <li>Dermatologist</li>
        <li>Oncologist</li>
        <li>Orthopedist</li>
        <li>Urologist</li>
        <li>Nephrologist</li>
        <li>Pediatrician</li>
        <li>Endocrinologist</li>
        <li>Gastroenterologist</li>
        <li>Rheumatologist</li>
        <li>Infestious Disease Doctor</li>
        <li>Otolaryngologist</li>
        <li>Anesthesiologist</li>
     </ul>
     </div>

     <button className="get-plan-btn"><Link style={{color: 'white', textDecoration: 'none' }} to="/Goldplans">Get Plan</Link></button> 
     <button className="back-btn">Back</button>
     </div>
        
        </div>
    )
}
