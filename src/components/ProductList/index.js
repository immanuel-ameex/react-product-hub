import React from 'react';
import ProductItem from '../ProductItem';
import { productList } from './data';

class ProductList extends React.Component {
  render() {
    return (
      <div key="productContainer" className="container">
        {productList.map((props) => (
          <ProductItem  key={props.id} {...props} />
        ))}
      </div>
    )
  }
}

export default ProductList;
