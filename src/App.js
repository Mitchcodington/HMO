
import Home from "./Home"
import Signup from "./Signup"
import Signin from "./Signin"
import Doctors from "./Doctors"
import Family from "./Family"
import Everyone from "./Everyone"
import Desktop9 from "./Desktop9"
import Employees from "./Employees"
import Empremium from "./Empremium"
import Goldplans from "./Goldplans"
import YouFamily from "./YouFamily"
import Quaterly from "./Quaterly"
import Yearly from "./Yearly"
import Youfamgold from "./Youfamgold"
import GoldPlan from "./GoldPlan"
import FamgoldQuater from "./FamgoldQuater"
import FamgoldYearly from "./FamgoldYearly"
import Youfambronze from "./Youfambronze"
import Bronzeplan from "./Bronzeplan"
import FambronzeQuater from "./FambronzeQuater"
import FambronzeYearly from "./FambronzeYearly"
import Yourparents from "./Yourparents"
import Payment1 from "./Payment1"
import Payment2 from "./Payment2"
import Payment3 from "./Payment3"

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="Signup" element={<Signup />} />
        <Route path="Doctors" element={<Doctors />} />
        <Route path="Signin" element={<Signin />} />
        <Route path="Family" element={<Family />} />
        <Route path="Everyone" element={<Everyone />} />
        <Route path="Employees" element={<Employees />} />
        <Route path="Desktop9" element={<Desktop9/>} />
        <Route path="Empremium" element={<Empremium/>} />
        <Route path="Goldplans" element={<Goldplans/>} />
        <Route path="YouFamily" element={<YouFamily/>} />
        <Route path="Quaterly" element={<Quaterly/>} />
        <Route path="Yearly" element={<Yearly/>} />
        <Route path="Youfamgold" element={<Youfamgold/>} />
        <Route path="GoldPlan" element={<GoldPlan/>} />
        <Route path="FamgoldQuater" element={<FamgoldQuater/>} />
        <Route path="FamgoldYearly" element={<FamgoldYearly/>} />
        <Route path="Youfambronze" element={<Youfambronze/>} />
        <Route path="Bronzeplan" element={<Bronzeplan />} />
        <Route path="FambronzeQuater" element={<FambronzeQuater />} />
        <Route path="FambronzeYearly" element={<FambronzeYearly />} />
        <Route path="Yourparents" element={<Yourparents />} />
        <Route path="Payment1" element={<Payment1 />} />
        <Route path="Payment2" element={<Payment2 />} />
        <Route path="Payment3" element={<Payment3 />} />
    </Routes>
  </BrowserRouter> 
    
  );
}

export default App;
