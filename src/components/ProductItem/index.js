import React from 'react';

class ProductItem extends React.Component {
  render() {
    return (
      <div className="item-wrapper">
        <div className="item-container">
          <div className="top">
            <img src={this.props.imgUrl} alt={this.props.name} />
          </div>
          <div className="bottom">
            <div className="left">
              <div className="details">
                <h2>{this.props.name}</h2>
                <p>£{this.props.price}</p>
              </div>
              <div className="buy"><i className="fa fa-shopping-cart"></i></div>
            </div>
            <div className="right">
              <div className="done"><i className="material-icons">done</i></div>
              <div className="details">
                <h1>Chair</h1>
                <p>Added to your cart</p>
              </div>
              <div className="remove"><i className="material-icons">clear</i></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductItem;
