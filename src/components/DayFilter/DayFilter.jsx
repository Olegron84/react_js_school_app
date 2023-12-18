import React from "react";
import "./dayFilter.css";

const DayFilter = ({ selectedDay, weekdays, onDayChange }) => {
  return (
    <div className="dayfilter">
      <p className="filter-title">Оберіть день тижня:</p>
      <div className="label-wrapper">
        {weekdays.map((day, index) => (
          <label key={day} className="filter-label">
            <input
              className="filter-input"
              type="radio"
              value={day}
              checked={selectedDay === day}
              onChange={() => onDayChange(day)}
            />
            {day}
          </label>
        ))}
      </div>
    </div>
  );
};

export default DayFilter;
