import React, { Component } from 'react';
import Description from './Description'

class Option extends Component {

  render() {
    var souldOut = this.props.data.stock.stockLevel > 0 ? '': 'soldout';
    return (
        <li className={souldOut} >
          {this.props.data.sizeData.value}
        </li>
    );
  }
}

export default Option;
