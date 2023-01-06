//All Required Dependancies

import React from "react";
import { Link, useLocation } from "react-router-dom";

// show the Product Details 
function ProductDetail() {

  // get the value for all product 
  let location = useLocation();
  const detail = location.state.product;

  return (
    <div className="container-fluid">
      <div className="row ">
        <div className="col-5" id="product_image">
          <img src={detail.image} alt="sdf" style={styl} />
        </div>
        <div className=" col-lg-5 mt-5">
          <h3> {detail.title}</h3>
          <hr />
          <p id="product_price">{detail.price}</p>
          <p>
            {" "}
            Status: <span id="stock_status">{detail.status}</span>
          </p>
          <hr />
          <h4>Description:</h4>
          <p>{detail.description}</p>
          <hr />
          <Link to="/home" id="view_btn" className="btn btn-block">
            {" "}
            {detail.buttons}{" "}
          </Link>
          <Link to="/cart" id="cart_btn" className="btn btn-block">
            {" "}
            {detail.cart}{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;

const styl = {
  height: 500,
  width: 500
};
