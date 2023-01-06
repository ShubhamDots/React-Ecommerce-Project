//All Required Dependancies

import React from "react";
import { FaMapMarkerAlt, FaMailBulk, FaPhoneAlt } from "react-icons/fa";

// Showing the Footer Part 
function Footer() {
  return (
    <footer>
      <div className="container-fluid ">
        <div className="row px-xl-5 " style={col}>
          <h5>GET IN TOUCH</h5>
          <div className="addre">
            <p>
              <FaMapMarkerAlt /> &nbsp;&nbsp;6 KHA 9 Jhawar Nagar , Jaipur
            </p>
            <p>
              <FaMailBulk />
              &nbsp;&nbsp; shubham@gmail.com
            </p>
            <p>
              <FaPhoneAlt />
              &nbsp;&nbsp; +9982716071
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
//Style for css
const col ={
  color:"white"
}