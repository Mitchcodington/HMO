
import logo from "./images/LabOne-2.png";
import rechel from "./images/rechel.png";
import etang from "./images/etang.png"
import { Link } from "react-router-dom";



export default function Desktop9() {
  return (
    <div className="desktop9-container">
      <div className="main-desk9">
       
      <p className="logo-doc-media"><Link style={{color: '#01245E', textDecoration: 'none' }} to="/">
        <img className="logo-book" src={logo} alt="" /></Link></p>
        <img className="desk9-doc" src={etang} alt="" />
        <ul>
          <li>
            <span className="list">Name:</span> DOC ETANG .G. BASSEY
          </li>
          <li>
            <span className="list">Area of Profession:</span> NEUROLOGIST
          </li>
          <li>
            <span className="list">Hospital:</span> SAFE HEALTH CARE CENTER
          </li>
          <li>
            <span className="list">Country:</span> NIGERIA
          </li>
        </ul>

        <div className="media-query">
        <div className="phone-chat-video">
          <p className="symbols">
            <span class="material-symbols-outlined">add_call</span>
          </p>
          <p className="symbols-text">Phone Call</p>
        </div>

        <div className="phone-chat-video">
          <p className="symbols">
            <span class="material-symbols-outlined">add_comment</span>
          </p>
          <p className="symbols-text">Chat</p>
        </div>

        <div className="phone-chat-video">
          <p className="symbols">
            <span class="material-symbols-outlined">video_call</span>
          </p>
          <p className="symbols-text">Video-Call</p>
        </div>
        </div>
        
        <p className="add-rep">Add Medical Report :</p>
        <input type="file" class="custom-file-input"/>
      </div>

      <div>
        <img className="patient" src={rechel} alt="" />
        <ul className="patient-details">
          <li>
            <span className="details1">Patient Name:</span> Oniebuje .R. Rachel
          </li>
          <li>
            <span className="details1">Patient Description:</span> Medical
            Checkup
          </li>
          <li>
            <span className="details1">Current Location:</span> Port-Harcourt,
            Rivers State
          </li>
          <li>
            <span className="details1">Health Plan:</span> Premium Plan
          </li>
        </ul>
        <iframe className="my-map" title="my map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8070160.228169138!2d4.175377834274036!3d9.017343700931084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0baf7da48d0d%3A0x99a8fe4168c50bc8!2sNigeria!5e0!3m2!1sen!2sng!4v1668873408813!5m2!1sen!2sng"></iframe>
      </div>

      <div>
        <div className="tm-dt">
          <div className="book-time">
            <p><span class="material-symbols-outlined">schedule</span></p>
            <p className="time-duration">4.00 pm - 6.00 pm</p>
          </div>
          <div className="book-date">
            <p><span class="material-symbols-outlined">event_available</span></p>
            <p className="time-duration">09.10.22</p>
          </div>
          
        </div>

        <div className="remind-togle">
          <p className="remind">Remind me</p>
          <div>
          <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
          </div>
        </div>
        
        <p><span className="Priority">Priority</span><br/>
        <span className="medical-state">Medical state of patient</span></p>
        <div className="priority-btn">
        <button className="low">Low</button>
        <button className="medium">Medium</button>
        <button className="high">High</button>
        </div>

      </div>
    </div>
  );
}
