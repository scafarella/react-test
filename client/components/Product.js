import React, { Component } from 'react';
class Product extends Component {

  render() {
    return (
        <div>this is a product: {this.props.data.code}</div>
    );
  }
}

export default Product;
