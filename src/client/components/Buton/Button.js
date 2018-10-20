import React from 'react';
import { Button as BootstrapButton } from 'reactstrap';

class Button extends React.Component {

  render() {
    return (
      <BootstrapButton type="submit">{this.props.label}</BootstrapButton>
    )
  }
  
};

export default Button;
