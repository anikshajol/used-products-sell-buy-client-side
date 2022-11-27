import axios from "axios";
import React, { useEffect, useState } from "react";
import DisplayCategory from "./DisplayCategory";

const Category = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(`${process.env.REACT_APP_URL}/category`);
      setCategory(data);
      console.log(data);
    };
    fetchProducts();
  }, []);
  return (
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold">Select Category</h2>

      <section className=" flex flex-wrap justify-center gap-12 my-12">
        {category.map((product) => (
          <DisplayCategory
            key={product._id}
            product={product}
          ></DisplayCategory>
        ))}
      </section>
    </div>
  );
};

export default Category;
