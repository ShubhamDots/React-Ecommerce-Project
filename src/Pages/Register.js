//All Required Dependancies

import React, { useState } from "react";
import "../assets/css/login.css";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import InputTextComponent from "../component/InputTextComponent";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    cPassword: "",
  });
  const [error, setError] = useState({});

  const submitData = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (e) => { 
    e.preventDefault();
    setError(validation(input));
  };

  const validation = (value) => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const errors = {};
    if (!value.name.trim()) {
      errors.name = "name can't be empty";
    }
     if (!value.email.trim()) {
      errors.email = "Email can't be empty";
    } 
      if (!regex.test(value.email.trim())) {
      errors.email = "Please Enter Valid Email format";
    }
    if (!value.mobile.trim()) {
      errors.mobile = "mobile No can't be empty";
    }
   if (!value.password.trim()) {
      errors.password = "password can't be empty";
    }
    if (!value.cPassword.trim()) {
      errors.cPassword = "confirm password can't be empty";
    } else {
      navigate("/login");
    }
    return errors;
  };

  const [passwordIcon, setPasswordIcon] = useState(<FaEyeSlash />);
  const [passwordType, setPasswordType] = useState("password");
  const [cPassworIcon, setCPasswordIcon] = useState(<FaEyeSlash />);
  const [cPasswordType, setCPasswordType] = useState("password");

  //password hide & show Toggle Function
  const passwordToggle = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      setPasswordIcon(FaRegEye);
    } else {
      setPasswordType("password");
      setPasswordIcon(FaEyeSlash);
    }
  };
  const confirmToggle = () => {
    if (cPasswordType === "password") {
      setCPasswordType("text");
      setCPasswordIcon(FaRegEye);
    } else {
      setCPasswordType("password");
      setCPasswordIcon(FaEyeSlash);
    }
  };

  // validation condition for all TextInputComponent

  return (
   


    <div className=" container mb-5">
      <div className="d-flex flex-column ms-5">
        <div className="text-center">
          <img
            src="assets/logo/mai.png"
            style={{ width: "100px" }}
            alt="logo"
          />
          <h6 id="title">REGISTRATION PAGE</h6>
        </div>
        <br />
        <form>
          <p id="para">Please fill your details</p>
          <InputTextComponent
            placeholder="Enter Name"
            name="name"
            value={input.name||""}
            onChange={submitData}
            type="text"
          />
          <p id="error">{error.name}</p>
          <InputTextComponent
            placeholder="Email address"
            name="email"
            value={input.email}
            onChange={submitData}
            type="email"
          />{" "}
          <p id="error">{error.email}</p>
          <InputTextComponent
            placeholder="Enter Mobile"
            name="mobile"
            value={input.mobile}
            onChange={submitData}
            type="number"
          />{" "}
          <p id="error">{error.mobile}</p>
          <InputTextComponent
            placeholder="Password"
            name="password"
            value={input.password}
            onChange={submitData}
            type={passwordType}
          />{" "}
          <p id="error">{error.password}</p>
          <p id="passeye" onClick={passwordToggle}>
            {passwordIcon}
          </p>
          <InputTextComponent
            placeholder=" Confirm Password"
            name="cPassword"
            value={input.cPassword}
            onChange={submitData}
            type={cPasswordType}
          />{" "}
          <p id="error">{error.cPassword}</p>
          <p id="passeye" onClick={confirmToggle}>
            {cPassworIcon}
          </p>
          <Button id="signin" onClick={handleSubmit}>
            Register Now
          </Button>
          <br />
          <p id="regto">
            <Link to="/login">Already have an account</Link>
          </p>
        </form>
      </div>
    </div>

  );
};
export default Register;
