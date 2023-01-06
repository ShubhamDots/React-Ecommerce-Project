//All Required Dependancies

import "../assets/css/login.css";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import InputTextComponent from "../component/InputTextComponent";
import LableComponent from "../component/LableComponent";

function ForgetPass() {
  // Require State for Forget Password
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [regemail, setRegemail] = useState(false);
  const [emailError, setEmailError] = useState(false);

//validation for Valid email
  let regmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w\w+)+$/;

  const validate = () => {
    if (email.length === 0) {
      setEmailError(true);
    } else if (regmail.test(email) === false) {
      setRegemail(true);
    } else {
      navigate("/login");
    }
  };

  return (
    <MDBContainer className="my-3 gradient-form">
      <MDBRow>
        <MDBCol col="4" className="mb-5">
          <div className="d-flex flex-column ms-5">
            <div className="text-center">
              <img
                src="assets/logo/forget.jpg"
                style={{ width: "138px" }}
                alt="logo"
              />
              <h5 id="title">FORGET PASSWORD</h5>
            </div>
            <br />
            <InputTextComponent
              placeholder="Email address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setRegemail(false);
              }}
              type="email"
            />
            {emailError && email.length <= 0 ? (
              <LableComponent text="Email can't be empty " />
            ) : (
              ""
            )}
            {regemail || (error && email.length <= 0) ? (
              <LableComponent text="Please Enter valid email " />
            ) : (
              ""
            )}

            <Button id="signin" onClick={validate}>
              Submit
            </Button>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default ForgetPass;
