import React from "react";
import { useNavigate } from "react-router-dom";
import "./Category.scss";
import cat1 from "../../../assets/category/cat-1.jpg";

const Category = ({ categories }) => {
  const navigate = useNavigate();
  
  return (
    <div className="shop-by-category">
      <div className="categories">
        {categories?.data?.map((item) => (
          <div key={item.id} className="category">
            <img src={cat1} alt={`Category ${item.id}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
