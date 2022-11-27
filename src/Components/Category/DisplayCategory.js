import React from "react";
import { Link } from "react-router-dom";

const DisplayCategory = ({ product }) => {
  console.log(product);
  return (
    <>
      <Link to={`/category/${product.category_id}`}>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={product.picture} className="h-64" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product.name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              {" "}
              <button className="btn btn-primary">See</button>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default DisplayCategory;
