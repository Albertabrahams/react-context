import React from 'react'
import ProductList from './ProductList'
import { ProductProvider } from './ProductContext';

const WithContextApp = () => {
  return (
    <div>
        <ProductProvider>
            <ProductList/>
        </ProductProvider>
    </div>
  )
}

export default WithContextApp