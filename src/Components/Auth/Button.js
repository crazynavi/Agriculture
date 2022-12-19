import React, { Component } from "react";
import LoadingSpinner from "../LoadingSpinner";

class Button extends React.Component {
  render() {
    const disableClass = this.props.disabled ? "disabled" : "";
    return (
      <>
      {this.props.disabled && 
        <div
          className={`button ${this.props.buttonClass} ${disableClass}`}
          onClick={this.props.onClick}
        >
          <LoadingSpinner />
        </div>
      }
      {!this.props.disabled && 
        <div
          className={`button ${this.props.buttonClass} ${disableClass}`}
          onClick={this.props.onClick}
        >
          {this.props.buttonText}
        </div>
      }
      </>
    );
  }
}

export default Button;
