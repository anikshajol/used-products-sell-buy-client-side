import moment from "moment/moment";
import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";

const ProductsCard = ({ product, setProduct }) => {
  const { user } = useContext(AuthContext);
  console.log(user);
  let date = moment().format("MM-DD-YYYY");

  console.log(product);
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={product.picture} alt="phone" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.company}</h2>
          <p>Buying Price: {product?.buying_price} </p>
          <p>Selling Price: {product?.sell_price} </p>
          <p> Used Duration : {product?.used_duration} </p>
          <p>
            {" "}
            Used Duration : {product?.company}
            {product?.model}{" "}
          </p>
          <p>Location:{product.location} </p>
          <section className="flex justify-around">
            <p> {user.displayName}</p>
            <p> {date} </p>
          </section>
          <div className="card-actions justify-end">
            <label
              htmlFor="booking-modal"
              className="btn btn-primary text-white"
              onClick={() => setProduct(product)}
            >
              Book Now
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
