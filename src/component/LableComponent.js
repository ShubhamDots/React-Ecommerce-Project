import React from "react";
import "../assets/css/login.css";

function LableComponent(props) {
  return (
    <div>
      <label id={"login-to"} style={{marginLeft:"26%"}}>{props.text}</label>
    </div>
  );
}

export default LableComponent;
