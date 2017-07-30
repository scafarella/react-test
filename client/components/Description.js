import React, { Component } from 'react';
import Price from './Price'

class Description extends Component {

  render() {
    return (
        <div className="description">
          <div>{this.props.data.designerData.name}</div>
          <div>{this.props.data.name}</div>
          <Price isSale={this.props.data.isSale}
                  price={this.props.data.priceData}  message={this.props.data.discountMessage}/>
        </div>
    );
  }
}

export default Description;
