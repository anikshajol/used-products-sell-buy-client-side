import axios from "axios";
import React, { useEffect, useState } from "react";
import DisplayCategory from "./DisplayCategory";

const Category = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(`${process.env.REACT_APP_URL}/products`);
      setCategory(data);
      console.log(data);
    };
    fetchProducts();
  }, []);
  return (
    <div>
      <h2>Category</h2>

      <section className="grid grid-cols-3 gap-8">
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
