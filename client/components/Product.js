import React, { Component } from 'react';
import Description from './Description'
import OptionList from './OptionList'

class Product extends Component {

  constructor(props){
    super(props);
    this.state = {
      hover:false
    }
    this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
    this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
  }

  onMouseEnterHandler(){
    this.setState({
      hover:true
    })
  }

  onMouseLeaveHandler(){
    this.setState({
      hover:false
    })
  }
  render() {
    return (
        <div className="product" onMouseEnter={this.onMouseEnterHandler}
                    onMouseLeave={this.onMouseLeaveHandler}>
          <OptionList className="options" options={this.props.data.variantOptions} show={this.state.hover} />
          <img src={this.props.data.thumbnail.replace('thumbnail','large')} />
          <Description data={this.props.data} />
        </div>
    );
  }
}

export default Product;
