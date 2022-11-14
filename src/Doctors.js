import improvise from "./images/improvise.png";
import star from "./images/star.png";
import demo from "./images/demo.png";
import add from "./images/add.png";
import doc1 from "./images/doc1.png";
import plus from "./images/plus.png";
import logo from "./images/LabOne-2.png";
import heart from "./images/heart.png";

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

      <div className="main-middle">
        <div className="main-search-filter">
          <div className="search-input">
            <p className="search-icon">
              <span class="material-symbols-outlined">search</span>
            </p>
            <input
              className="doctors-input"
              type="text"
              placeholder="Search..."
            />
          </div>

          <div className="filter">
            <span class="material-symbols-outlined">tune</span>
          </div>
        </div>

        <div className="img-text">
          <img className="neorologist" src={improvise} alt="" />
          <div className="neuro-main">
            <h2 className="neuro-heading">NEUROLOGIST</h2>
            <p className="neuro-text">
              A neurologist focuses on the anatomy, functions, and disorders of
              the nerves and nervous systems. Neurologists work with people who
              have had strokes and those with degenerative diseases of the
              nervous system, like multiple sclerosis. If you exhibit loss of
              motor of cognitive function, you could be referred Read More...
              <br />
              <span className="star-flex">
                <img className="star" src={star} alt="" />
                <span className="star-rating">5.8</span>
              </span>
            </p>
          </div>
        </div>
        <p>
          <b>Doctors Available</b>
        </p>
        <img className="demo" src={demo} alt="" />
        <img className="demo" src={demo} alt="" />
        <img className="demo" src={demo} alt="" />
        <img className="demo" src={demo} alt="" />
        <img className="add" src={add} alt="" />

        <div className="date-time">
          <div>
            <p className="dt-available">
              <b>Date Available</b>
            </p>
            <input type="date" className="date" />
          </div>

          <div>
            <p className="tm-available">
              <b>Set a time</b>
            </p>
            <input type="time" className="time" />
            <input type="submit" className="submit" />
          </div>
        </div>
      </div>

      <div>
        <p>
          <b>Doctors Available</b>
        </p>
        <div className="doc-main">
          <div className="doc-section">
            <div>
              <img className="doc1" src={doc1} alt="" />
              <p className="doc-hosp">
                <span className="doc-name">Doc Feli x .B. Adeyomi</span>
                <br />
                Ertra Medical Hospital
              </p>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <img className="star1" src={star} alt="" />
              <img className="star1" src={star} alt="" />
              <img className="star1" src={star} alt="" />
              <img className="star1" src={star} alt="" />
              <img className="star1" src={star} alt="" />
              <img className="plus" src={plus} alt="" />
            </div>
          </div>

          <div className="doc-section">
            <div>
              <img className="doc1" src={doc1} alt="" />
              <p className="doc-hosp">
                <span className="doc-name">Doc Feli x .B. Adeyomi</span>
                <br />
                Ertra Medical Hospital
              </p>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <img className="star1" src={star} alt="" />
              <img className="star1" src={star} alt="" />
              <img className="star1" src={star} alt="" />
              <img className="star1" src={star} alt="" />
              <img className="star1" src={star} alt="" />
              <img className="plus" src={plus} alt="" />
            </div>
          </div>
        </div>

        <div className="doc-main">
          <div className="doc-section">
            <div>
              <img className="doc1" src={doc1} alt="" />
              <p className="doc-hosp">
                <span className="doc-name">Doc Feli x .B. Adeyomi</span>
                <br />
                Ertra Medical Hospital
              </p>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <img className="star1" src={star} alt="" />
              <img className="star1" src={star} alt="" />
              <img className="star1" src={star} alt="" />
              <img className="star1" src={star} alt="" />
              <img className="star1" src={star} alt="" />
              <img className="plus" src={plus} alt="" />
            </div>
          </div>

          <div className="doc-section">
            <div>
              <img className="doc1" src={doc1} alt="" />
              <p className="doc-hosp">
                <span className="doc-name">Doc Feli x .B. Adeyomi</span>
                <br />
                Ertra Medical Hospital
              </p>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <img className="star1" src={star} alt="" />
              <img className="star1" src={star} alt="" />
              <img className="star1" src={star} alt="" />
              <img className="star1" src={star} alt="" />
              <img className="star1" src={star} alt="" />
              <img className="plus" src={plus} alt="" />
            </div>
          </div>
        </div>

        <div className="doc-main">
          <div className="doc-section">
            <div>
              <img className="doc1" src={doc1} alt="" />
              <p className="doc-hosp">
                <span className="doc-name">Doc Feli x .B. Adeyomi</span>
                <br />
                Ertra Medical Hospital
              </p>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <img className="star1" src={star} alt="" />
              <img className="star1" src={star} alt="" />
              <img className="star1" src={star} alt="" />
              <img className="star1" src={star} alt="" />
              <img className="star1" src={star} alt="" />
              <img className="plus" src={plus} alt="" />
            </div>
          </div>

          <div className="doc-section">
            <div>
              <img className="doc1" src={doc1} alt="" />
              <p className="doc-hosp">
                <span className="doc-name">Doc Feli x .B. Adeyomi</span>
                <br />
                Ertra Medical Hospital
              </p>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <img className="star1" src={star} alt="" />
              <img className="star1" src={star} alt="" />
              <img className="star1" src={star} alt="" />
              <img className="star1" src={star} alt="" />
              <img className="star1" src={star} alt="" />
              <img className="plus" src={plus} alt="" />
            </div>
          </div>
        </div>
        <button className="book-now">Book Now</button>
      </div>
    </div>
  );
}
