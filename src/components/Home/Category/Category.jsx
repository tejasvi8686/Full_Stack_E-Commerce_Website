import React from "react";
import "./Category.scss";

const Category = ({ categories }) => {

  
  return (
    <div className="shop-by-category">
      <div className="categories">
        {categories?.data?.map((item) => (
          <div key={item.id} className="category">
            <img src={
              process.env.REACT_APP_DEV_URL +
              item.attributes.img?.data?.attributes?.url 
              
            } alt="img" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
