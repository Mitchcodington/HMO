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
      <p className="home"><span className="home-space"><Link to="/">Home</Link></span></p>
      <p className="about"><span className="home-space"><Link to="/Family">About</Link></span></p>
      <p className="book"><span className="home-space">Book Appointment</span></p>
      <p className="hmo"><span className="home-space"><Link to="/Doctors">HMO</Link></span></p>
      </div>
      
     </nav> 
    )
}