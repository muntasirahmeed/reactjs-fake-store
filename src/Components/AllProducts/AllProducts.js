import React, { useEffect, useState } from "react";
import SingleProduct from "../SingleProduct/SingleProduct";
import "./AllProducts.css";
const AllProducts = (props) => {
    const { addPd } = props;
    console.log(addPd)
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
    return (
        <div className="row g-3">
            {
                products.map(product => <SingleProduct
                    pd={product}
                    addPd={addPd}
                    dltPd={props.dltPd}
                    key={product.id}
                >
                    
                    </SingleProduct>)
            }
        </div>
    )
};

export default AllProducts;
