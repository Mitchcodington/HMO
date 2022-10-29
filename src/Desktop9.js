import doc1 from "./images/doc1.png"
import logo from "./images/LabOne-2.png"
import demo from "./images/demo.png"

export default function Desktop9() {
    
    return (
        
    <div className="desktop9-container">

< div className="main-desk9"> 
<img className="desk9-logo" src={logo} alt="" />
   <img className="desk9-doc" src={doc1} alt="" /> 
   <ul>
    <li><span className="list">Name:</span> DOC ETANG .G. BASSEY</li>
    <li><span className="list">Area of Profession:</span> NEUROLOGIST</li>
    <li><span className="list">Hospital:</span> SAFE HEALTH CARE CENTER</li>
    <li><span className="list">Country:</span> NIGERIA</li>
   </ul>
   <div className="phone-chat-video">
   <p className="symbols"><span class="material-symbols-outlined">
add_call
</span></p>
 <p className="symbols-text">Phone Call</p>
   </div>

   <div className="phone-chat-video">
   <p className="symbols"><span class="material-symbols-outlined">
add_comment
</span></p>
 <p className="symbols-text">Chat</p>
   </div>

   <div className="phone-chat-video">
   <p className="symbols"><span class="material-symbols-outlined">
video_call
</span></p>
<p className="symbols-text">Video-Call</p>
   </div>
   <p className="add-rep">Add Medical Report :</p>
   <input type="file" class="custom-file-input"></input>
   </div>

   <div>
    <img className="patient" src={demo} alt="" />
    <ul className="patient-details">
    <li><span className="details1">Patient Name:</span> Oniebuje .R. Rachel</li>
    <li><span className="details1">Patient Description:</span> Medical Checkup</li>
    <li><span className="details1">Current Location:</span> Port-Harcourt, Rivers State</li>
    <li><span className="details1">Health Plan:</span> Premium Plan</li>
   </ul>
   </div>
   

<div>
   <div className="tm-dt">
    <p>4.00 pm - 6.00 pm</p>
    <p>09.10.22</p>
   </div>
   <label class="switch">
  <input type="checkbox"/>
  <span class="slider round"></span>
  </label>
   <h2>Priority</h2>
   <p>Medical state of patient</p>
   <button>Low</button>
   <button>Medium</button>
   <button>High</button>
  
</div>
   
</div>

)}