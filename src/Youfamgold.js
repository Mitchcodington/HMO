import gold from "./images/gold.png"

import { Link } from "react-router-dom";



export default function Youfamgold() {
    return (
        <div className="premium-body">
     <div className="premium-main">
     <img className="premium"  src={gold} alt="" /> 
     <h2 className="premium-bold">GOLD PLAN<br/>
     <span className="premium-light">Doctors Available For This Plan :</span></h2>

<div className="premium-mid">
     <ul className="premium-list">
        <li>Cardiologist</li>
        <li>Dermatologist</li>
        <li>Oncologist</li>
        <li>Orthopedist</li>
        <li>Pediatrician</li>
        <li>Endocrinologist</li>
        <li>Gastroenterologist</li>
        <li>Rheumatologist</li>
        <li>Infestious Disease Doctor</li>
     </ul>
     </div>

     <button className="get-plan-btn"><Link style={{color: 'white', textDecoration: 'none' }} to="/GoldPlan">Get Plan</Link></button> 
     <button className="back-btn">Back</button>
     </div>
        
        </div>
    )
}