import React, { useEffect, useContext, useCallback } from "react";
import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";

// This project is made by Tejasvi raj
const Home = () => {
  const { product, setProducts, categories, setCategories } =
    useContext(Context);

  const getProducts = useCallback(() => {
    fetchDataFromApi("/api/products?populate=*").then((res) => {
      setProducts(res);
      console.log(res)
    });
  }, [setProducts]);

  const getCategories = useCallback(() => {
    fetchDataFromApi("/api/categories?populate=*").then((res) => {
      setCategories(res);
      console.log(res)
    });
  }, [setCategories]);

  useEffect(() => {
    getProducts();
    getCategories();
  }, [getProducts, getCategories]);

  // useEffect(() => {
  //   getProducts();
  // }, []);

  // const getProducts = () => {
  //   fetchDataFromApi("/api/products?populate=*").then(res => console.log(res))
  // };

  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category categories={categories} />
          <Products  products={product} headingText="Popular Products"  />
        </div>
      </div>
    </div>
  );
};

export default Home;
