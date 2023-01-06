//All Required Dependancies

import React from "react";
import "../assets/css/login.css";

//Create Component for Input Text
function InputTextComponent(props) {
  return (
    <div>
      <input
        type={props.type}
        className={"form-control"}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
    </div>
  );
}

export default InputTextComponent;
