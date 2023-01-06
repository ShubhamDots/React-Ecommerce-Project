 //All Required Dependancies
import React from "react";
import Product from "./Product";
import { Link } from "react-router-dom";

//Create Button & show all Product 

function AllProduct() {
  return (
    <>
      <Link to="/product-listing" id="all_product" className="btn btn-block">
        Show all item
      </Link>
      <Product />
    </>
  );
}

export default AllProduct;
