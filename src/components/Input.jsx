import React, { useState } from "react";

export default ({ label }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const userInput = event.target.value;
    setValue(userInput.toUpperCase());
  };

  return (
    <div>
      {label}: <input type="text" onChange={handleChange} value={value} />
    </div>
  );
};
