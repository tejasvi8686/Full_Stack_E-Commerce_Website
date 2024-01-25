// import React from "react";
// import "./Products.scss";
// import Product from "./Product/Product";

// const Products = ({ products, innerPage, headingText }) => {
//   // Check if products is undefined or does not have a 'data' property
//   if (!products || !products.data || !Array.isArray(products.data)) {
//     // You might want to handle this case based on your application's requirements
//     return null;
//   }

//   return (
//     <div className="products-container">
//       {!innerPage && <div className="sec-heading">{headingText}</div>}
//       <div className="products">
//         {products.data.map((item) => (
//           <Product key={item.id} id={item.id} data={item.attributes} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Products;

import React from "react";
import "./Products.scss";
import Product from "./Product/Product";

const Products = ({ products, innerPage, headingText }) => {
  return (
    <div className="products-container">
      {!innerPage && <div className="sec-heading"> {headingText} </div>}
      <div className="products">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default Products;
