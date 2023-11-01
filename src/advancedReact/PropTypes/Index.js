import React from "react";
import { useFetch } from "../CustomHooks/UseFetch";
import Product from "./Product";
// import defaultImage from "../../assets/default-image.jpeg";
const url = "https://course-api.com/react-prop-types-example";
const Index = () => {
  const { products } = useFetch(url);
  return (
    <div>
      <h1>Products</h1>
      {/* <img src={defaultImage} alt="" /> */}
      <article>
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </article>
    </div>
  );
};

export default Index;
