//All Required Dependancies
import React from "react";

// show all category in product
function Category() {

  // Store Value for Category Details
  let myProduct = [
    {
      name: "Electronics devices",
    },
    {
      name: "Home Appliances ",
    },
    {
      name: "Men's Style",
    },

    {
      name: "Women Fashion",
    },
    {
      name: "Beauty & Personal Care",
    },
    {
      name: "Baby Toy's",
    },
    {
      name: "Automobile items",
    },
  ];

  return (
    <div>
      <h1 id="products_heading">Category List</h1>
      <div className="column">
        <div className="col-sm-12 home-products my-3">
          {myProduct.map((element) => {
            return (
              <div className="product">
                <div className="card p-3 rounded">
                  <div className="card-body d-flex flex-column">
                    <p style={{ fontWeight: "bold" }} className="card-title">
                      {element.name}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Category;
