// Required Dependancies

import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import "../assets/css/login.css";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import InputTextComponent from "../component/InputTextComponent";

const Login = () => {
  const navigate = useNavigate();

  //require State for all InputTextComponent
  const [input, setInput] = useState({ email: "", password: "" });
  const [error, setError] = useState({});

  const submitData = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validate(input));
  };

  const validate = (value) => {
    const errors = {};
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!value.email) {
      errors.email = "Email can't be empty";
    } else if (!value.password) {
      errors.password = "password can't be empty";
    } else if (!regex.test(value.email.trim())) {
      errors.email = "Please Enter Valid Email format";
    } else {
      navigate("/home");
    }
    return errors;
  };

  const [passwordIcon, setPasswordIcon] = useState(<FaEyeSlash />);
  const [passwordType, setPasswordType] = useState("password");

  //Password Hide & show Toggle Function
  const handelToggle = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      setPasswordIcon(FaRegEye);
    } else {
      setPasswordType("password");
      setPasswordIcon(FaEyeSlash);
    }
  };

  return (
    <div className="container  mb-5">
      <div className=" flex-column ms-5">
        <div className="text-center">
          <img
            src="assets/logo/reg.jpg"
            style={{ width: "138px" }}
            alt="logo"
          />
          <h5 id="title">LOGIN PAGE</h5>
        </div>
        <br />

        <form>
          <p id="para">Please login to your account</p>
          <InputTextComponent
            type="email"
            placeholder="Email address"
            name="email"
            value={input.email}
            onChange={submitData}
          />

          <p id="error">{error.email}</p>
          <InputTextComponent
            placeholder="Password"
            name="password"
            value={input.password}
            onChange={submitData}
            type={passwordType}
          />
          <p id="error">{error.password}</p>

          <span id="eye" onClick={handelToggle}>
            {passwordIcon}
          </span>
          <br />
          <p id="forgetP" style={{ color: "#111011" }}>
            <Link to="/forget">Forget Password</Link>{" "}
          </p>
          <p id="login-to">
            {" "}
            <Link to="/">Don't have an account?</Link>
          </p>

          <Button id="signin" onClick={handleSubmit}>
            Sign in
          </Button>
          <br />
        </form>
      </div>
    </div>
  );
};

export default Login;
