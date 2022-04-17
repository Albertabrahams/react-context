import React from "react";
import Product from "./Product";

const ProductList = ({ products, increasePrice }) => {
  
  return <div>
    {products.map(product=>
     <Product 
     key={product.id} 
     product={product} 
     increasePrice={increasePrice} /> )}
    
    </div>;
};

export default ProductList;