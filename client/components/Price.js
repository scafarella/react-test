import React, { Component } from 'react';

class Price extends Component {

  render() {
    if(!this.props.isSale){
      return (<span>{this.props.price.formattedValue}</span>)
    }else{
      return (
        <span className="price">
          <span className="sale">{this.props.price.formattedValue}&nbsp;</span>
          <span>(<strike>{this.props.price.formattedWasPrice}</strike>)&nbsp;</span>
          <span>{this.props.message}</span>
        </span>
        )
    }
  }
}

export default Price;
