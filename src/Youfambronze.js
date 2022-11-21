import bronze from "./images/bronze.png"
import { Link } from "react-router-dom";



export default function Youfambronze() {
    return (
        <div className="premium-body">
     <div className="premium-main">
     <img className="premium"  src={bronze} alt="" /> 
     <h2 className="premium-bold">BRONZE PLAN<br/>
     <span className="premium-light">Doctors Available For This Plan :</span></h2>

<div className="premium-mid">
     <ul className="premium-list">
        <li>Dermatologist</li>
        <li>Orthopedist</li>
        <li>Pediatrician</li>
        <li>Gastroenterologist</li>
        <li>Rheumatologist</li>
        <li>Infestious Disease Doctor</li>
     </ul>
     </div>

     <button className="get-plan-btn"><Link style={{color: 'white', textDecoration: 'none' }} to="/Bronzeplan">Get Plan</Link></button> 
     <button className="back-btn">Back</button>
     </div>
        
        </div>
    )
}