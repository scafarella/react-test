import React, { Component } from 'react';
class ProductList extends Component {

  componentDidMount(){
    fetch('/api/products')
  }

  render() {
    return (
        <div>this is a product list</div>
    );
  }
}

export default ProductList;
