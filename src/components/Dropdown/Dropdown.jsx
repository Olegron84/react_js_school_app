import React, { useState } from "react";
import "./dropdown.css";

const Dropdown = ({ options, onChange, title }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    onChange(selectedValue);
  };
  return (
    <select
      value={selectedOption}
      onChange={handleSelectChange}
      className="dropdown"
    >
      <option value="">{title}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
