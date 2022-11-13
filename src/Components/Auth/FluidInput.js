import React from 'react'

class FluidInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        focused: false,
        value: ""
      };
    }
    focusField() {
      const { focused } = this.state;
      // if(this.state.value !== ""){
      //   this.setState({
      //     focused:false
      //   })
      // }
      this.setState({
        focused: !focused
      });
    }

    handleChange(event) {
      const { target } = event;
      const { value } = target;
      this.setState({
        value: value
      });
      this.props.setFiled(this.props.field, value);
    }

    render() {
      const { type, label, style, id } = this.props;
      const { focused, value } = this.state;
      
      let inputClass = "fluid-input";
      if (focused) {
        inputClass += " fluid-input--focus";
      } else if (value !== "") {
        inputClass += " fluid-input--open";
      }
      
      return (
        <div className={inputClass} style={style}>
          <div className="fluid-input-holder">
            
            <input 
              className="fluid-input-input"
              type={type}
              id={id}
              onFocus={this.focusField.bind(this)}
              onBlur={this.focusField.bind(this)}
              onChange={this.handleChange.bind(this)}
              autoComplete="on"
            />
            <label className="fluid-input-label" htmlFor={id}>{label}</label>
            
          </div>
        </div>
      );
    }
}

export default FluidInput;
