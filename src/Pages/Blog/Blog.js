import React from "react";
import { useLoaderData } from "react-router-dom";

const Blog = () => {
  const products = useLoaderData();
  return (
    <div>
      <h2>Comming soon {products.length}</h2>
    </div>
  );
};

export default Blog;
