import { Grid } from '@material-ui/core';
import React from 'react';
import ProductItem from '../ProductItem';
import { productList } from './data';

class ProductList extends React.Component {
  render() {
    const isRenderable = product => {
      if (this.props.filters) {
        const filters = this.props.filters;
        const categoryStatus = filters.categories.length && !filters.categories.includes(product.category);
        const priceRangeStatus = filters.priceRange.length && (filters.priceRange[0] >= product.price || filters.priceRange[1] <= product.price);
        const stockStatus = filters.stockStatus && product.stock === 0;
        if (categoryStatus || priceRangeStatus || stockStatus) {
          return false;
        }
      }
      return true;
    }

    return (
      <Grid container key="productContainer" className="container" justify="center" spacing={2}>
        {productList.map((product) => 
          isRenderable(product) && <ProductItem  key={product.id} {...product} />
        )}
      </Grid>
    )
  }
}

export default ProductList;
