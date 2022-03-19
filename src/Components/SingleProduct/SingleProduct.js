import React from "react";
import ReactModal from "../Details/Details";
import "./SingleProduct.css";
const SingleProduct = (props) => {
  const { image, title } = props.pd;
  const newTitle = title.slice(0, 25);
  return (
    <div className="singlePd col-md-4">
      <div className="card p-3 product">
        <div className="pdImg mb-2">
          <img src={image} alt="" />
        </div>
              <h4 className="text-center">{newTitle}</h4>
              <div className="d-flex justify-content-around mt-3">
              <button onClick={props.addPd} className="btn btn-success">Add to Cart</button>
              <button onClick={props.dltPd}  className="btn btn-danger">Delete</button>
              <ReactModal pd={props.pd}></ReactModal>
              </div>
      </div>
    </div>
  );
};

export default SingleProduct;
