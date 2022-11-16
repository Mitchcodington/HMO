import neu from "./images/neu.png"
import star from "./images/star.png"
import add from "./images/add.png"
import doc1 from "./images/doc1.png"
import plus from "./images/plus.png"
import logo from "./images/LabOne-2.png"
import heartt from "./images/heartt.png"
import derma from "./images/derma.png"
import nephro from "./images/nephro.png"
import onco from "./images/onco.png"
import uro from "./images/uro.png"
import op from "./images/op.png"
import ortho from "./images/ortho.png"
import neuro from "./images/neuro.png"
import CalendarGfg from "./CalendarGfg"
import chat from "./images/chat.png"
import rachel from "./images/rachel.png"
import bell from "./images/bell.png"
import poly from "./images/poly.png"
import etang from "./images/etang.png"
import faith from "./images/faith.png"
import grace from "./images/grace.png"
import osas from "./images/osas.png"
import cyril from "./images/cyril.png"
import docava1 from "./images/docava1.png"
import docava2 from "./images/docava2.png"
import docava3 from "./images/docava3.png"
import docava4 from "./images/docava4.png"
import { Link } from "react-router-dom";

export default function Doctors() {
  return (
    
    <div className="main-container">
      <div className="main-dept">
        <img className="dept-logo" src={logo} alt="" />

        <h2 className="list-dept">
          List Of Medical
          <br />
          Practitionals
        </h2>
        <div className="img-dept">
          <p>
            <img className="heart" src={heart} alt="" />
          </p>
          <p className="logist">CARDIOLOGIST</p>
        </div>
        <div className="img-dept">
          <p>
            <img className="heart" src={heart} alt="" />
          </p>
          <p className="logist">DERMATOLOGIST</p>
        </div>
        <div className="img-dept">
          <p>
            <img className="heart" src={heart} alt="" />
          </p>
          <p className="logist">ONCOLOGIST</p>
        </div>
        <div className="img-dept">
          <p>
            <img className="heart" src={heart} alt="" />
          </p>
          <p className="logist">ORTHOPEDIST</p>
        </div>
        <div className="img-dept">
          <p>
            <img className="heart" src={heart} alt="" />
          </p>
          <p className="logist">NEUROLOGIST</p>
        </div>
        <div className="img-dept">
          <p>
            <img className="heart" src={heart} alt="" />
          </p>
          <p className="logist">UROLOGIST</p>
        </div>
        <div className="img-dept">
          <p>
            <img className="heart" src={heart} alt="" />
          </p>
          <p className="logist">OPHTHALMOLOGIST</p>
        </div>
        <div className="img-dept">
          <p>
            <img className="heart" src={heart} alt="" />
          </p>
          <p className="logist">NEPHROLOGIST</p>
        </div>
        <div className="learnmor">
          <p className="learn-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
            fusce platea non sed enim. Faucibus orci tortor orci malesuada
            pellentesque ultrices urna tellus ac. Dictum duis neque lacus ipsum
            lectus tristique. Quam tempus facilisi lectus magna ipsum ac
            ultrices aliquam donec.
          </p>
          <button className="learn-btn">Learn More</button>
        </div>
      </div>

   <h2 className="list-dept">List Of Medical<br/>
   Practitionals</h2>
    <div className="img-dept">
    <p><img className="heart" src={heartt} alt="" /></p>
    <p className="logist">CARDIOLOGIST</p>
    </div>
    <div className="img-dept">
    <p><img className="heart" src={derma} alt="" /></p>
    <p className="logist">DERMATOLOGIST</p>
    </div>
    <div className="img-dept">
    <p><img className="heart" src={onco} alt="" /></p>
    <p className="logist">ONCOLOGIST</p>
    </div>
    <div className="img-dept">
    <p><img className="heart" src={ortho} alt="" /></p>
    <p className="logist">ORTHOPEDIST</p>
    </div>
    <div className="neuro-div">
    <p><img className="heart" src={neuro} alt="" /></p>
    <p className="neuro">NEUROLOGIST</p>
    </div>
    <div className="img-dept">
    <p><img className="heart" src={uro} alt="" /></p>
    <p className="logist">UROLOGIST</p>
    </div>
    <div className="img-dept">
    <p><img className="heart" src={op} alt="" /></p>
    <p className="logist">OPHTHALMOLOGIST</p>
    </div>
    <div className="img-dept">
    <p><img className="heart" src={nephro} alt="" /></p>
    <p className="logist">NEPHROLOGIST</p>
    </div>
    <div className="learnmor">
        <p className="learn-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Turpis fusce platea non sed enim. Faucibus orci tortor orci 
malesuada pellentesque ultrices urna tellus ac. Dictum duis 
neque lacus ipsum lectus tristique. Quam tempus facilisi 
lectus magna ipsum ac ultrices aliquam donec.</p>
<button className="learn-btn">Learn More</button>
    </div>
</div>

<div className="main-middle">
    <div className="main-search-filter">
        <div className="search-input">
        <p className="search-icon"><span class="material-symbols-outlined">
search
</span></p><input className="doctors-input" type="text" placeholder="Search..." />    
    </div>
    
    <div className="filter">
    <span class="material-symbols-outlined">
mic
</span>
    </div>
    </div>
    
< div className="img-text">
<img className="neorologist" src={neu} alt=""/>
<div className="neuro-main">
<h2 className="neuro-heading">NEUROLOGIST</h2>
<p className="neuro-text">
A neurologist focuses on the 
anatomy, functions, and disorders 
of the nerves and nervous systems. 
Neurologists work with people who 
have had strokes and those with 
degenerative diseases of the 
nervous system, like multiple 
sclerosis. If you exhibit loss of motor 
of cognitive function, you could be 
referred Read More...<br/>
<span className="star-flex"><img className="star" src={star} alt=""/><span className="star-rating">5.8</span></span>
</p>
</div>
</div>
<p className="docava"><b>Doctors Available</b></p>
<p className="docava"><img className="docava1" src={docava1} alt=""/>
<img className="docava2" src={docava2} alt=""/>
<img className="docava3" src={docava3} alt=""/>
<img className="docava4" src={docava4} alt=""/>
<img className="add" src={add} alt=""/></p>



<CalendarGfg />





</div>
    


<div>
 <div className="bell-chat-prof" >
<p><img className="chat" src={chat} alt="" /></p>
<p><img className="bell" src={bell} alt="" /></p>
<p><img className="rachel" src={rachel} alt="" />
<img className="poly" src={poly} alt="" /></p>

</div>
    <p><b>Doctors Available</b></p>
<div className="doc-main">
<div className="doc-section">
<div>
<img className="doc1" src={doc1} alt=""/>
<p className="doc-hosp"><span className="doc-name">Doc Feli x  .B. Adeyomi</span><br/>
Ertra Medical Hospital</p>
&nbsp;&nbsp;&nbsp;&nbsp;<img className="star1" src={star} alt=""/>
<img className="star1" src={star} alt=""/>
<img className="star1" src={star} alt=""/>
<img className="star1" src={star} alt=""/>
<img className="star1" src={star} alt=""/>
<img className="plus" src={plus} alt=""/>
</div>
</div>

<div className="doc-section">
<div>
<img className="doc1" src={etang} alt=""/>
<p className="doc-hosp"><span className="doc-name">Doc Etang .G. Bassey</span><br/>
Safe Health Care Center</p>
&nbsp;&nbsp;&nbsp;&nbsp;<img className="star1" src={star} alt=""/>
<img className="star1" src={star} alt=""/>
<img className="star1" src={star} alt=""/>
<img className="star1" src={star} alt=""/>
<img className="star1" src={star} alt=""/>
<img className="plus" src={plus} alt=""/>
</div>
</div>
</div>

<div className="doc-main">
<div className="doc-section">
<div>
<img className="doc1" src={faith} alt=""/>
<p className="doc-hosp"><span className="doc-name">Doc Faith .N. Johnson</span><br/>
Mother & Child Healthcare</p>
&nbsp;&nbsp;&nbsp;&nbsp;<img className="star1" src={star} alt=""/>
<img className="star1" src={star} alt=""/>
<img className="star1" src={star} alt=""/>
<img className="star1" src={star} alt=""/>
<img className="star1" src={star} alt=""/>
<img className="plus" src={plus} alt=""/>
</div>
</div>

<div className="doc-section">
<div>
<img className="doc1" src={grace} alt=""/>
<p className="doc-hosp"><span className="doc-name">Doc Grace .K. Nathan</span><br/>
St. John Hospital</p>
&nbsp;&nbsp;&nbsp;&nbsp;<img className="star1" src={star} alt=""/>
<img className="star1" src={star} alt=""/>
<img className="star1" src={star} alt=""/>
<img className="star1" src={star} alt=""/>
<img className="star1" src={star} alt=""/>
<img className="plus" src={plus} alt=""/>
</div>
</div>
</div>

<div className="doc-main">
<div className="doc-section">
<div>
<img className="doc1" src={osas} alt=""/>
<p className="doc-hosp"><span className="doc-name">Doc Osas .R. Umoren</span><br/>
GreyGlow MeyN Hospital</p>
&nbsp;&nbsp;&nbsp;&nbsp;<img className="star1" src={star} alt=""/>
<img className="star1" src={star} alt=""/>
<img className="star1" src={star} alt=""/>
<img className="star1" src={star} alt=""/>
<img className="star1" src={star} alt=""/>
<img className="plus" src={plus} alt=""/>
</div>
</div>

<div className="doc-section">
<div>
<img className="doc1" src={cyril} alt=""/>
<p className="doc-hosp"><span className="doc-name">Doc Cyril .V. Laoson</span><br/>
Adifer Medical Center</p>
&nbsp;&nbsp;&nbsp;&nbsp;<img className="star1" src={star} alt=""/>
<img className="star1" src={star} alt=""/>
<img className="star1" src={star} alt=""/>
<img className="star1" src={star} alt=""/>
<img className="star1" src={star} alt=""/>
<img className="plus" src={plus} alt=""/>
</div>
</div>
</div>
<button className="book-now"><Link style={{color: 'white', textDecoration: 'none' }} to="/family">Book Now</Link></button>
</div>
</div>

  )
}
