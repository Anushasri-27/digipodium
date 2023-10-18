/* eslint-disable react/jsx-key */
import "../styles/product.css";
import Data from "../COMPONENT/DummyData";
import { useState } from "react";
console.log(Data);
const ProjectList = () => {
  const [product ,setProduct] = useState(Data);
  const displayProduct = () => {
    return product.map((obj) => (
      <div className="col-md-4 col-6 mb-4 mt-4 ">
        <div className="card shadow text-center">
          <img className="card-img-top p-4" src={obj.image} alt="Card image cap" />
          <div className="card-body">
            {obj.sponsered ? <h6 className="fw-bold text-muted ">sponsered</h6>: ""}
            <h5 className="card-title">{obj.brand}</h5>
            <p className="subtitle text-muted">Model : {obj.model}</p>
            <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, et! Lorem ipsum dolor sit amet.</p>
            <p className="card-text">
              <small className="text-muted"> Price : Rs {obj.price}</small>
            </p>
          </div>
        </div>
      </div>
    ));
  };
  //function to filter data and store it in product
  const searchProduct =(e) =>{
    const search =e.target.value;
    let filteredProduct = Data.filter((product)=>{
      return product.brand.toLowerCase().includes(search.toLowerCase());
    });
    setProduct(filteredProduct);
  }
  return (
    <div className="wrap-product">
      <header className="bgimg text-white p-5 ">
        <h1 className="h1 text-center">
          <strong>Browse product</strong>
        </h1>
        <hr />
        <input
          type="text"
          className="form-control m-auto w-25"
          placeholder="search prodcut"
          onChange={searchProduct}
        />
      </header>
      <div className="container">
        <div className="row">{displayProduct()}</div>
      </div>
    </div>
  );
};

export default ProjectList;
