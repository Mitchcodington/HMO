import premium from "./images/premium.png";

export default function Empremium() {
  return (
    <div className="premium-body">
      <div className="premium-main">
        <img className="premium" src={premium} alt="" />
        <h2>PREMIUM PLAN</h2>
        <p>Doctors Available For This Plan :</p>
        <ul>
          <li>Allergist</li>
          <li>Cardiologist</li>
          <li>Dermatologist</li>
          <li>Oncologist</li>
          <li>Orthopedist</li>
          <li>Urologist</li>
          <li>Nephrologist</li>
          <li>Pediatrician</li>
          <li>Endocrinologist</li>
          <li>Gastroenterologist</li>
          <li>Rheumatologist</li>
          <li>Infestious Disease Doctor</li>
          <li>Otolaryngologist</li>
          <li>Anesthesiologist</li>
        </ul>
        <button>Get Plan</button> <button>Back</button>
      </div>
    </div>
  );
}
