import model from "./images/model.jpg";
import { Link } from "react-router-dom";

export default function Hero() {
    
    return (
      <>
    <div className="main-hero">
    <div className="hero">
      <h1 className="medical">Telemedicine</h1>
      <p className="text">Telemedicine at LabOne makes it possible
       for patients to talk in real time with 
      some of the best leading practioners throuh 
      computers,smartphones or tablets.</p>
<button className="signup" ><Link  style={{color: '#01245E', textDecoration: 'none' }} to="/Signup">Signup</Link></button> 
<button className="signin"><Link style={{color: 'white', textDecoration: 'none' }} to="/Signin">Signin</Link></button>
    </div>
 
        <img className="hero-img" src={model} alt="" />
    
    </div>

      
    </>
  );
}
