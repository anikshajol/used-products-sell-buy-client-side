import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductsCard from "./ProductsCard";

const Products = () => {
  const products = useLoaderData();
  console.log(products);
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {products.map((product) => (
        <ProductsCard key={product._id} product={product}></ProductsCard>
      ))}
    </div>
  );
};

export default Products;
