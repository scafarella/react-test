import React, { Component } from 'react';
import promise from 'es6-promise';
promise.polyfill();
import fetch from 'isomorphic-fetch';
import Product from './Product';

class ProductList extends Component {

  constructor(props){
    super(props);
    this.state = {
      productList: null
    }
  }

  componentDidMount(){
    fetch('/api/products')
    .then(response => response.json())
    .then(data => {
        this.setState({productList: data})
    })
    .catch(console.error)
  }

  render() {
    if(this.state.productList == null){
        return <div>...waiting</div>
    }else{
      return <div className="products">
        {this.state.productList.map(function(p){
          return <Product key={p.code}
                data={p} />
        })}
        <div className="clear"></div>
      </div>
    }
  }
}

export default ProductList;
