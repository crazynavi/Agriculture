import React, { Component } from 'react'

class Button extends React.Component {
  
  render() {
      const disableClass = this.props.disabled?"disabled":"";
      return (
        <div className={`button ${this.props.buttonClass} ${disableClass}`} onClick={this.props.onClick}>
          {this.props.buttonText}
        </div>
      );
    }
}

export default Button;
