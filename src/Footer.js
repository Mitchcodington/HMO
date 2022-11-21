import React from "react"
import icon1 from "./images/icon1.png"
import awareness from "./images/awareness.png"
import insurance from "./images/insurance.png"
import footdoc from "./images/footdoc.png"
import Ellipse from "./images/Ellipse.png"
import circleimages from "./images/circleimages.png"
import screen1 from "./images/screen1.png"
import screen2 from "./images/screen2.png"
import screen3 from "./images/screen3.png"
import facebuk from "./images/facebuk.png"
import twitter from "./images/twitter.png"
import instagram from "./images/instagram.png"
import apple from "./images/apple.png"
import googleplay from "./images/googleplay.png"
import darkfootlogo from "./images/darkfootlogo.png"

export default function Footer() {
    return (
<>
 <div className="footer-main">
         <footer>        
                <h1 className="footer-head">Convenience</h1>
               <div className="text-icon">
                    <p className="footer-text">With LabOne,you don’t have to drive to the doctor’s
                     office or clinic, park, walk or sit in a waiting room when you
                      are sick. You can see your doctor from the comfort of your own bed or sofa. 
                   </p>
                    <p><img className="call-icon" src={icon1} alt="" /></p>
               </div>
                <button className="learn-more">Learn more</button>
         </footer>

             <footer>        
                    <h1 className="footer-head">Awareness</h1>
                 <div className="text-icon">
                      <p className="footer-text">October is the breast cancer awareness month,
                         it is an annual international health campaign to increase awareness of 
                          the disease and to raise funds for research.</p>
                       <p><img className="call-icon" src={awareness} alt="" /></p>
                  </div>
                    <button className="learn-more">Learn more</button>
              </footer>

               <footer>        
                    <h1 className="footer-head">Insurance</h1>
                  <div className="text-icon">
                     <p className="footer-text">Get health insurance (HMO) to access quality 
                      healthcare includingcover for doctor’s virtual appointments, surgeries,
                      medications, eyecare,antenatal, lab tests etc.</p>
                       <p><img className="call-icon" src={insurance} alt="" /></p>
                  </div>
                       <button className="learn-more">Learn more</button>
            </footer>
</div>

<div className="homefoot-text-img">
<div>
<h2 className="vision-bold">Our Vision</h2>
<p className="vision-text">Our vision is to make virtual care the first step on any healthcare journey.
     We're developing technologies to connect to patients and delivering the
      highest standard of clinical quality at every touchpoint. 
</p>
</div>
<p className="home-img2"><img  src={footdoc} alt="" /></p>
</div>

<div className="homefoot-text-img">
<p><img className="ellipse" src={Ellipse} alt="" />
<img className="circleimages" src={circleimages} alt="" /></p>
<div>
<h2 className="mission-bold">Our Mission</h2>
<p className="mission-text">LabOne Health was founded on a simple, yet revolutionary idea that everyone
    should have access to the best healthcare, anywhere in the world on their 
    terms. 
</p>
</div>
</div>

<div className="homefoot-text-img">
<div>
<h2 className="about-bold">About Us</h2>
<p className="vision-text">LabOne Health is the global leader in whole-person virtual care offering 
    the technology to connect, expertise you can trust and the power to improve
     health for all  
</p>
</div>
<p>
<img className="screen3" src={screen3} alt="" />
<img className="screen2" src={screen2} alt="" />

    <img className="screen1" src={screen1} alt="" />
</p>
</div>

<div className="dark-footer">
<p className="footer-main-logo"><img className="dark-logo" src={darkfootlogo} alt="" /></p>
<div className="footer-text-logo">
    <h2 className="footer-bold">ABOUT</h2>
    <p>About us</p>
    <p>Our Vission</p>
    <p>Our Mission</p>
</div>

<div className="footer-text-logo">
<h2 className="footer-bold">BOOK APPOINTMENT</h2>
<p>Cardiologist</p>
<p>Dermatologist</p>
<p>Oncologist</p>
<p>Orthopedist</p>
<p>Urologist</p>
<p>Nephrologist</p>
</div>

<div className="footer-text-logo">
<h2 className="footer-bold">HMO</h2>
<p>For You and Your Family</p>
<p>For Your Parents</p>
<p>For Your Employees</p>
</div>

<div className="footer-text-logo">
<h2 className="footer-bold">CONTACT US</h2>
<p>Call Us: +2348061602274</p>
<p>Whatsapp: +2348061602274</p>
<p className="contact-email">Hello@labonehealth.com</p>
</div>

<div >
    <div className="socials">
      <p className="social-para"><img className="facebook" src={facebuk} alt="" /></p>
      <p className="social-para"><img className="twitter" src={twitter} alt="" /></p>
      <p className="social-para"><img className="instagram" src={instagram} alt="" /></p>
   </div>

   <p><img className="apple" src={apple} alt="" /></p>
   <p><img className="googleplay" src={googleplay} alt="" /></p>
</div>
</div>
</>
    )
}
