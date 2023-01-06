//All Required Dependancies

import React from "react";
import Banner from "./Banner";
import AllProduct from "./AllProduct";
import Category from "./Category ";

//Home Screen 
function Home() {
  return (
    <div> 
      <Banner />
      <Category/>
      <AllProduct/>
    </div>
  );
}

export default Home;
