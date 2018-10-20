import React from 'react';

class Button extends React.Component {

  render() {
    return (
      <button type="submit">{this.props.label}</button>
    )
  }
  
};

export default Button;
