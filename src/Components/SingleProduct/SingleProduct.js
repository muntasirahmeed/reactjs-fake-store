import React from "react";
import "./SingleProduct.css";
const SingleProduct = (props) => {
  const { image, title } = props.pd;
  const newTitle = title.slice(0, 25);
  console.log(newTitle);
  return (
    <div className="singlePd col-md-4">
      <div className="card p-3 product">
        <div className="pdImg mb-2">
          <img src={image} alt="" />
        </div>
              <h4 className="text-center">{newTitle}</h4>
              <div className="d-flex justify-content-around mt-3">
              <button className="btn btn-success">Add to Cart</button>
              <button className="btn btn-danger">Delete</button>
              <button className="btn btn-info">About</button>
              </div>
      </div>
    </div>
  );
};

export default SingleProduct;
