
import Home from "./Home"
import Signup from "./Signup"
import Signin from "./Signin"
import Doctors from "./Doctors"
import Family from "./Family"
import Everyone from "./Everyone"
import Desktop9 from "./Desktop9"
import Employees from "./Employees"
import Empremium from "./Empremium"
import { BrowserRouter, Routes, Route } from "react-router-dom";






function App() {

  return (
    <BrowserRouter>
    <Routes>
    
        <Route index element={<Home />} />
        <Route path="Signup" element={<Signup />} />
        <Route path="Doctors" element={<Doctors/>} />  
        <Route path="Signin" element={<Signin />} />
        <Route path="Family" element={<Family />} /> 
        <Route path="Everyone" element={<Everyone />} />
        <Route path="Employees" element={<Employees />} />
        <Route path="Desktop9" element={<Desktop9/>} />
        <Route path="Empremium" element={<Empremium/>} />
    </Routes>
  </BrowserRouter> 
    
  );
}

export default App;
