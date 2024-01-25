import React from "react";
import "./Category.scss";
import cat1 from "../../../assets/category/cat-1.jpg"
const Category = ({ categories }) => {

  
  return (
    <div className="shop-by-category">
      <div className="categories">

        <div className="category">
          <img src={cat1} alt="" />
        </div>
        <div className="category">
          <img src={cat1} alt="" />
        </div>
        <div className="category">
          <img src={cat1} alt="" />
        </div>
        <div className="category">
          <img src={cat1} alt="" />
        </div>
        {/* {categories?.data?.map((item) => (
          <div key={item.id} className="category">
            <img src={
              process.env.REACT_APP_DEV_URL +
              item.attributes.img?.data?.attributes?.url 
              
            } alt="img" />
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Category;
