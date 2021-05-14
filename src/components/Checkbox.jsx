import React, { useState } from "react";
import "./checkbox.css";

let pocitadlo = 1;

export default ({ label }) => {
  const [checked, setChecked] = useState(false);
  const [disabled, setDisabled] = useState(false);

  console.log(`Počet volání funkce Checkbox: ${pocitadlo++}. Volána pro label: ${label}`);

  const handleClick = (event) => {
    setChecked((oldState) => !oldState);
  };

  return (
    <div className="checkbox-container" onClick={(event) => handleClick(event)}>
      <div className={checked ? "checkbox checkbox--checked" : "checkbox checkbox--unchecked"}></div>
      {label}
      {checked ? <em>(zaškrtnuto)</em> : null}
    </div>
  );
};

const OldCheckbox = ({ label }) => {
  const checked = false;

  return `
    <div class="checkbox-container">
      <div class=${checked ? "checkbox checkbox--checked" : "checkbox checkbox--unchecked"}></div>
      {label}
    </div>
  `;
};
