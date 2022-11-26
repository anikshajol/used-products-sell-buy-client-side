import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "./BookingModal";
import ProductsCard from "./ProductsCard";

const Products = () => {
  const products = useLoaderData();
  const [product, setProduct] = useState(null);
  console.log(products);
  return (
    <section>
      <div className="flex flex-wrap justify-center gap-6">
        {products.map((product) => (
          <ProductsCard
            key={product._id}
            product={product}
            setProduct={setProduct}
          ></ProductsCard>
        ))}
      </div>
      <div>
        {product && (
          <BookingModal
            product={product}
            setProduct={setProduct}
          ></BookingModal>
        )}
      </div>
    </section>
  );
};

export default Products;
