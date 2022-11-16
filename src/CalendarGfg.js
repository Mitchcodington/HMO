import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';



  
export default function CalendarGfg() {
  const [value, onChange] = useState(new Date());
  
  
  return (

   
    <div className="calender-container">
     
      <div className="calender">
      <h6 className="date-bold">Date Available</h6>
      <Calendar className="calender"
        onChange={onChange}
        value={value}
      />
    </div>
    <div >
      <h6 className="time-bold">Set A Time</h6>
    <input className="time" type="time"/>
    </div>
    </div>
  );
}