import {useState} from "react";
import ProductList from "./ProductList";

const initialProducts = [
    {id:1, product: "Basketball", price: 12 },
    {id:2, product: "Baseball", price: 9 },
    {id:3, product: "Tennis Racquet", price: 89 }
]

const WithPropsApp = () => {
    const [products, setProducts] = useState(initialProducts)

    const increasePrice = () => {
      // const newProducts = [...products];
      console.log("increase");
    }
    
  return (
    <div>
      <h3>WithPropsApp</h3>
      <ProductList products={products} increasePrice={increasePrice}/>
    </div>
  );
};

export default WithPropsApp;