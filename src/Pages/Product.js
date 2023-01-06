//All Required Dependancies

import { Link } from "react-router-dom";
import { ScrollMenu } from "react-horizontal-scrolling-menu";

//show Latest product in Home Page  
function Product() {

  //Store the value array of object 

  let myProduct = [
    {
      name: "iphone 14 pro max",
      image: "assets/images/iphone.jpg",
      price: "$965.62",
      button: "View Details",
      title: "iphone 14 pro max",
      status: "available",
      description:
      " iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface",
      buttons: "Buy Now",
      cart:"Add Cart"
    },
    {
      name: "i5 12th generation laptop",
      image: "assets/images/laptop.jpg",
      price: "$105.62",
      button: "View Details",
      title: "i5 12th generation laptop",
      status: "In Stock",
      description:
      "A laptop computer, sometimes called a notebook computer by manufacturers, is a battery- or AC-powered personal computer generally smaller than a briefcase that can easily be",
      buttons: "Buy Now",
      cart:"Add Cart"
    },
    {
      name: "Home decorate product ",
      image: "assets/images/product-3.jpg",
      price: "$95.62",
      button: "View Details",
      title: "Home decorate product ",
      status: "In Stock",
      description:
      "a home more attractive and visually appealing. Home decor is inclusive of physical items and objects (furniture, art, and accessories), placement of",
      buttons: "Buy Now",
      cart:"Add Cart"
    },
    {
      name: "Men causal shoes",
      image: "assets/images/product-4.jpg",
      price: "$546.62",
      button: "View Details",
      title: "Men causal shoes",
      status: "In Stock",
      description:
      "shoe is an item of footwear intended to protect and comfort the human foot. They are often worn with a sock. Shoes are also used as an item of decoration and fashion",
      buttons: "Buy Now",
      cart:"Add Cart"
    },
    {
      name: "Sky drone ",
      image: "assets/images/product-5.jpg",
      price: "$1000.23",
      button: "View Details",
      title: "Sky Drone ",
      status: "In Stock",
      description:
      "Sky Store is a service operated by Sky Group in the United Kingdom, Ireland, Germany, Austria and Switzerland that offers movies and TV shows via video",
      buttons: "Buy Now",
      cart:"Add Cart"
    },
    {
      name: "Tuch Watch",
      image: "assets/images/product-6.jpg",
      price: "$236.02",
      button: "View Details",
      title: "Tuch Smart Watch",
      status: "In Stock",
      description:
      "A watch is a portable timepiece intended to be carried or worn by a person. It is designed to keep a consistent movement despite the motions caused by the person's activities.",
      buttons: "Buy Now",
      cart:"Add Cart"
    },
    {
      name: "Face wash ",
      image: "assets/images/product-8.jpg",
      price: "$144.62",
      button: "View Details",
      title: "Face wash ",
      status: "In Stock",
      description:
      "facial cleanser is a skincare product used to remove make-up, dead skin cells, oil, dirt, and other types of pollutants from the skin, helping to keep pores clear and prevent skin conditions such as acne",
      buttons: "Buy Now",
      cart:"Add Cart"
    },
    {
      name: "Pandrive",
      image: "assets/images/snakdisk.jpg",
      price: "$214.23",
      button: "View Details",
      title: "Pan Drive",
      status: "In Stock",
      description:
      "USB flash drive (also called a thumb drive) is a data storage device that includes flash memory with an integrated USB interface. It is typically removable",
      buttons: "Buy Now",
      cart:"Add Cart"
    },
  ];

  return (
    <div>
      <h1 id="products_heading">Latest Products</h1>
      <ScrollMenu>
        <div className="column">
          <div className="col-sm-12 home-products my-3">
            {myProduct.map((element) => {
              return (
                <div className="product">              
                  <div className="card p-3 rounded">
                    <img className="card-img-top mx-auto" src={element.image} alt=""/>
                    <div className="card-body d-flex flex-column">
                      <p className="card-title">{element.name}</p>
                      <p className="card-text">{element.price}</p>
                      <Link to="/product-detail" state={{product:element}}   id="view_btn" className="btn btn-block">
                        {element.button}
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </ScrollMenu>
    </div>
  );
}

export default Product;
