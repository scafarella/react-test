import React, { Component } from 'react';
import Description from './Description'
import Option from './Option'

class OptionList extends Component {

  render() {
    var className = "options " + (this.props.show?'':'hide');
    return <ul className={className}>
      {this.props.options.map(function(o){
        return <Option key={o.code}
              data={o} />
      })}
    </ul>
  }
}

export default OptionList;
