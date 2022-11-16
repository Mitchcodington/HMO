import React from "react"
import logo from "./images/LabOne-2.png"
import { Link } from "react-router-dom";



export default function Nav() {
    return (
        <nav>
    <div className="img">
    <img src={logo} alt="" /> 
    </div>
      <div className="navi"> 
      <p className="home"><span className="home-space"><Link style={{color: '#01245E', textDecoration: 'none' }} to="/">Home</Link></span></p>
      <p className="about"><span className="home-space"><Link style={{color: '#01245E', textDecoration: 'none' }} to="/Family">About</Link></span></p>
      <p className="book"><span className="home-space"><Link style={{color: '#01245E', textDecoration: 'none' }} to="/Doctors">Book Appointment</Link></span></p>
      <p className="hmo"><span className="home-space"><Link style={{color: '#01245E', textDecoration: 'none' }} to="/family">HMO</Link></span></p>
      </div>
      
     </nav> 
    )
}