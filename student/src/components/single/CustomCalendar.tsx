import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './customcaleder.css'

export function CustomCalendar() {
  const [value, onChange] = useState<Date | null>(new Date());

  return (
    <div className="calendar-container">
      <h1 className="calendar-title">Calendar - Investing Future Leader</h1>
      <div className="calendar-wrapper">
        <Calendar
          value={value}
          className="custom-calendar" // Apply custom class for further styling
        />
      </div>
    </div>
  );
}
