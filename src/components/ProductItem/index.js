import React from 'react';
import { Card, CardContent, Grid } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

class ProductItem extends React.Component {
  render() {
    return (
      <Grid key={this.props.id} item>
        <Card className="product-item">
          <CardContent>
            <div className="product-item__image">
              <img src={this.props.imgUrl} alt={this.props.name} />
            </div>
            <div className="product-item__details">
              <div className="product-item__info">
                <h2>{this.props.name}</h2>
                <p>£{this.props.price}</p>
              </div>
              <div className="product-item__action">
                <AddShoppingCartIcon />
              </div>
            </div>
          </CardContent>
        </Card>
      </Grid>
    )
  }
}

export default ProductItem;
